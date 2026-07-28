import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_prod';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Middleware to protect routes
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
};

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// --- File Upload Route ---
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    // Return the URL to access the uploaded file
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ success: true, url: fileUrl });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Upload failed' });
  }
});

// --- Auth Routes ---
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ success: true, token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Login failed' });
  }
});

// --- Articles Routes ---
app.get('/api/articles', async (req, res) => {
  try {
    const category = req.query.category as string | undefined;
    const articles = await prisma.article.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { name: true }
        }
      }
    });
    res.json({ success: true, data: articles });
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch articles' });
  }
});

app.post('/api/articles', authenticateToken, async (req: any, res: any) => {
  try {
    const body = req.body;
    if (!body.title || !body.slug || !body.content || !body.category) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    let user = await prisma.user.findFirst();
    if (!user) {
      const hashedPassword = await bcrypt.hash('hashedpassword', 10);
      user = await prisma.user.create({
        data: {
          email: 'admin@ciptasehat.com',
          password: hashedPassword,
          name: 'Admin'
        }
      });
    }

    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        excerpt: body.excerpt,
        category: body.category,
        imageUrl: body.imageUrl,
        isPublished: body.isPublished ?? true,
        authorId: user.id
      }
    });

    res.json({ success: true, data: article });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to create article' });
  }
});

app.put('/api/articles/:id', authenticateToken, async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const article = await prisma.article.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        excerpt: body.excerpt,
        category: body.category,
        imageUrl: body.imageUrl,
        isPublished: body.isPublished
      }
    });
    res.json({ success: true, data: article });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to update article' });
  }
});

app.delete('/api/articles/:id', authenticateToken, async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.article.delete({
      where: { id }
    });
    res.json({ success: true, message: 'Article deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to delete article' });
  }
});

// --- Services Routes ---
app.get('/api/services', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' }
    });
    res.json({ success: true, data: services });
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch services' });
  }
});

app.post('/api/services', authenticateToken, async (req: any, res: any) => {
  try {
    const { title, description, icon, order } = req.body;
    const service = await prisma.service.create({
      data: {
        title,
        description,
        icon: icon || 'medical_services',
        order: order || 0
      }
    });
    res.json({ success: true, data: service });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to create service' });
  }
});

app.put('/api/services/:id', authenticateToken, async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { title, description, icon, order } = req.body;
    const service = await prisma.service.update({
      where: { id },
      data: { title, description, icon, order }
    });
    res.json({ success: true, data: service });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to update service' });
  }
});

app.delete('/api/services/:id', authenticateToken, async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.service.delete({ where: { id } });
    res.json({ success: true, message: 'Service deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to delete service' });
  }
});

// --- Settings Routes ---
app.get('/api/settings', async (req, res) => {
  try {
    const settings = await prisma.setting.findMany();
    // Convert array of {key, value} to object {key: value}
    const settingsObj = settings.reduce((acc: any, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {});
    res.json({ success: true, data: settingsObj });
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch settings' });
  }
});

app.put('/api/settings', authenticateToken, async (req: any, res: any) => {
  try {
    // req.body should be an object of key-value pairs to update
    const settings = req.body;
    
    // We update sequentially or use transaction
    for (const [key, value] of Object.entries(settings)) {
      if (typeof value === 'string') {
        await prisma.setting.upsert({
          where: { key },
          update: { value },
          create: { key, value }
        });
      }
    }
    
    res.json({ success: true, message: 'Settings updated' });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to update settings' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
