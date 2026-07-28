<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/articles" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface">
        <span class="material-symbols-outlined">arrow_back</span>
      </NuxtLink>
      <div>
        <h1 class="text-3xl font-display-md text-on-background">Edit Artikel</h1>
        <p class="text-on-surface-variant font-body-md mt-1">Perbarui konten artikel Anda.</p>
      </div>
    </div>

    <div v-if="isFetching" class="bg-white rounded-2xl border border-outline-variant shadow-sm p-8 text-center text-on-surface-variant">
      Memuat data artikel...
    </div>

    <form v-else @submit.prevent="updateArticle" class="bg-white rounded-2xl border border-outline-variant shadow-sm p-8 space-y-6">
      
      <!-- Title & Slug -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block font-label-md text-on-surface mb-2">Judul Artikel *</label>
          <input 
            v-model="form.title" 
            @input="generateSlug"
            type="text" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div>
          <label class="block font-label-md text-on-surface mb-2">Slug URL *</label>
          <input 
            v-model="form.slug" 
            type="text" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
      </div>

      <!-- Category & Image -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block font-label-md text-on-surface mb-2">Kategori *</label>
          <select 
            v-model="form.category" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
          >
            <option value="" disabled>Pilih Kategori...</option>
            <option value="Medis">Medis</option>
            <option value="Kalibrasi Alkes">Kalibrasi Alkes</option>
            <option value="K3">K3</option>
          </select>
        </div>
        <div>
          <label class="block font-label-md text-on-surface mb-2">Upload Gambar Sampul</label>
          <input 
            type="file" 
            accept="image/*"
            @change="handleFileUpload"
            class="w-full px-4 py-2 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
          />
          <div v-if="form.imageUrl" class="mt-4">
            <img :src="form.imageUrl" alt="Preview" class="h-32 object-cover rounded-xl border border-outline-variant" />
          </div>
        </div>
      </div>

      <!-- Excerpt -->
      <div>
        <label class="block font-label-md text-on-surface mb-2">Ringkasan (Excerpt)</label>
        <textarea 
          v-model="form.excerpt" 
          rows="2"
          class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
        ></textarea>
      </div>

      <!-- Content -->
      <div>
        <label class="block font-label-md text-on-surface mb-2">Isi Artikel *</label>
        <TiptapEditor v-model="form.content" />
      </div>

      <!-- Publish Options -->
      <div class="flex items-center gap-3 py-4 border-t border-outline-variant">
        <input 
          type="checkbox" 
          id="isPublished"
          v-model="form.isPublished"
          class="w-5 h-5 text-primary rounded focus:ring-primary"
        />
        <label for="isPublished" class="font-label-md text-on-surface cursor-pointer">Terbitkan (Publish)</label>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-4">
        <NuxtLink to="/admin/articles" class="px-6 py-3 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
          Batal
        </NuxtLink>
        <button 
          type="submit" 
          :disabled="isLoading"
          class="bg-primary text-white px-8 py-3 rounded-full font-label-md flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md disabled:opacity-50"
        >
          <span v-if="isLoading" class="material-symbols-outlined animate-spin text-sm">autorenew</span>
          <span v-else class="material-symbols-outlined text-sm">save</span>
          {{ isLoading ? 'Menyimpan...' : 'Simpan Perubahan' }}
        </button>
      </div>

    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

definePageMeta({
  layout: 'admin'
})

const router = useRouter()
const route = useRoute()
const articleId = route.params.id

const isFetching = ref(true)
const isLoading = ref(false)

const form = ref({
  title: '',
  slug: '',
  category: '',
  imageUrl: '',
  excerpt: '',
  content: '',
  isPublished: true
})

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  const formData = new FormData()
  formData.append('image', file)
  
  try {
    const res = await $fetch('/api/upload', { 
      method: 'POST',
      body: formData
    , headers: { Authorization: `Bearer ${useCookie("auth_token").value}` } })
    
    if (res.success) {
      form.value.imageUrl = res.url
    }
  } catch (error) {
    alert('Gagal mengupload gambar')
  }
}

const generateSlug = () => {
  form.value.slug = form.value.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

onMounted(async () => {
  try {
    // Note: We need a backend API to fetch a single article by ID.
    // Let's assume the API returns the article.
    const res = await $fetch(`/api/articles`)
    // Because we didn't build an explicit GET /api/articles/:id in express yet, 
    // we'll filter it from the array for now or we should add that endpoint!
    // Let's filter from the array for simplicity since this is local demo.
    const article = res.data.find(a => a.id === articleId)
    
    if (article) {
      form.value = {
        title: article.title,
        slug: article.slug,
        category: article.category,
        imageUrl: article.imageUrl || '',
        excerpt: article.excerpt || '',
        content: article.content,
        isPublished: article.isPublished
      }
    } else {
      alert('Artikel tidak ditemukan')
      router.push('/admin/articles')
    }
  } catch (error) {
    alert('Gagal memuat artikel')
  } finally {
    isFetching.value = false
  }
})

const updateArticle = async () => {
  isLoading.value = true
  try {
    const res = await $fetch(`/api/articles/${articleId}`, {
      method: 'PUT',
      body: form.value
    })
    
    if (res.success) {
      alert('Perubahan berhasil disimpan!')
      router.push('/admin/articles')
    }
  } catch (error) {
    alert(error.data?.message || 'Gagal menyimpan perubahan')
  } finally {
    isLoading.value = false
  }
}
</script>
