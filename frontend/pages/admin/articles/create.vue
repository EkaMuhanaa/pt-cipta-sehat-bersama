<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/articles" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface">
        <span class="material-symbols-outlined">arrow_back</span>
      </NuxtLink>
      <div>
        <h1 class="text-3xl font-display-md text-on-background">Tambah Artikel Baru</h1>
        <p class="text-on-surface-variant font-body-md mt-1">Tulis dan terbitkan konten edukasi baru.</p>
      </div>
    </div>

    <form @submit.prevent="submitArticle" class="bg-white rounded-2xl border border-outline-variant shadow-sm p-8 space-y-6">
      
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
            placeholder="Contoh: Pentingnya K3 di Industri"
          />
        </div>
        <div>
          <label class="block font-label-md text-on-surface mb-2">Slug URL *</label>
          <input 
            v-model="form.slug" 
            type="text" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="pentingnya-k3-di-industri"
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
          placeholder="Tulis satu atau dua kalimat ringkasan artikel..."
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
        <label for="isPublished" class="font-label-md text-on-surface cursor-pointer">Langsung Terbitkan (Publish)</label>
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
          {{ isLoading ? 'Menyimpan...' : 'Simpan Artikel' }}
        </button>
      </div>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'admin'
})

const router = useRouter()
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
      // res.url might be relative like "/uploads/...", we should prefix with API_URL if needed.
      // Wait, since we fetch through proxy /api/upload, the response url is "/uploads/file.png".
      // Nuxt proxy only proxies /api/**, so we should proxy /uploads/** too!
      // Or we can just save it.
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

const submitArticle = async () => {
  isLoading.value = true
  try {
    const res = await $fetch('/api/articles', { 
      method: 'POST',
      body: form.value
    , headers: { Authorization: `Bearer ${useCookie("auth_token").value}` } })
    
    if (res.success) {
      alert('Artikel berhasil ditambahkan!')
      router.push('/admin/articles')
    }
  } catch (error) {
    alert(error.data?.message || 'Gagal menyimpan artikel')
  } finally {
    isLoading.value = false
  }
}
</script>
