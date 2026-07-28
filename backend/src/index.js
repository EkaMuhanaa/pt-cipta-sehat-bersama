import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());
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
app.post('/api/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        // Return the URL to access the uploaded file
        const fileUrl = `/uploads/${req.file.filename}`;
        res.json({ success: true, url: fileUrl });
    }
    catch (error) {
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
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // In a real app, generate JWT here. For now we just return success.
        res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    }
    catch (error) {
        res.status(500).json({ message: error.message || 'Login failed' });
    }
});
// --- Articles Routes ---
app.get('/api/articles', async (req, res) => {
    try {
        const category = req.query.category;
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
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch articles' });
    }
});
app.post('/api/articles', async (req, res) => {
    try {
        const body = req.body;
        if (!body.title || !body.slug || !body.content || !body.category) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        let user = await prisma.user.findFirst();
        if (!user) {
            user = await prisma.user.create({
                data: {
                    email: 'admin@ciptasehat.com',
                    password: 'hashedpassword',
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
    }
    catch (error) {
        res.status(500).json({ message: error.message || 'Failed to create article' });
    }
});
app.put('/api/articles/:id', async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ message: error.message || 'Failed to update article' });
    }
});
app.delete('/api/articles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.article.delete({
            where: { id }
        });
        res.json({ success: true, message: 'Article deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message || 'Failed to delete article' });
    }
});
// --- Settings Routes ---
app.get('/api/settings', async (req, res) => {
    try {
        const settings = await prisma.setting.findMany();
        // Convert array of {key, value} to object {key: value}
        const settingsObj = settings.reduce((acc, curr) => {
            acc[curr.key] = curr.value;
            return acc;
        }, {});
        res.json({ success: true, data: settingsObj });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch settings' });
    }
});
app.put('/api/settings', async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ message: error.message || 'Failed to update settings' });
    }
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map