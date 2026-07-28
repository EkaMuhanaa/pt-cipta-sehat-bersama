<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-display-md text-on-background">Manajemen Artikel</h1>
        <p class="text-on-surface-variant font-body-md mt-1">Kelola berita, edukasi K3, dan artikel kesehatan.</p>
      </div>
      <NuxtLink to="/admin/articles/create" class="bg-primary text-white px-6 py-3 rounded-full font-label-md flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-sm">
        <span class="material-symbols-outlined">add</span> Tambah Artikel
      </NuxtLink>
    </div>

    <div class="bg-white rounded-2xl border border-outline-variant overflow-hidden shadow-sm">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-label-md">
            <th class="px-6 py-4">Judul Artikel</th>
            <th class="px-6 py-4">Kategori</th>
            <th class="px-6 py-4">Status</th>
            <th class="px-6 py-4">Tanggal</th>
            <th class="px-6 py-4 text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading" class="border-b border-outline-variant">
            <td colspan="5" class="px-6 py-8 text-center text-on-surface-variant">Memuat data...</td>
          </tr>
          <tr v-else-if="articles.length === 0" class="border-b border-outline-variant">
            <td colspan="5" class="px-6 py-8 text-center text-on-surface-variant">Belum ada artikel.</td>
          </tr>
          <tr v-else v-for="article in articles" :key="article.id" class="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
            <td class="px-6 py-4">
              <p class="font-bold text-on-background">{{ article.title }}</p>
              <p class="text-xs text-on-surface-variant mt-1">/{{ article.slug }}</p>
            </td>
            <td class="px-6 py-4">
              <span class="bg-surface-container text-on-surface px-3 py-1 rounded-full text-xs font-bold">{{ article.category }}</span>
            </td>
            <td class="px-6 py-4">
              <span v-if="article.isPublished" class="text-secondary flex items-center gap-1 text-sm font-bold"><span class="material-symbols-outlined text-sm">check_circle</span> Published</span>
              <span v-else class="text-on-surface-variant flex items-center gap-1 text-sm font-bold"><span class="material-symbols-outlined text-sm">draft</span> Draft</span>
            </td>
            <td class="px-6 py-4 text-sm text-on-surface-variant">
              {{ new Date(article.createdAt).toLocaleDateString('id-ID') }}
            </td>
            <td class="px-6 py-4 text-right">
              <div class="flex items-center justify-end gap-2">
                <NuxtLink :to="`/admin/articles/${article.id}/edit`" class="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span class="material-symbols-outlined text-sm">edit</span>
                </NuxtLink>
                <button @click="deleteArticle(article.id)" class="w-8 h-8 rounded-full bg-surface-container-low text-error flex items-center justify-center hover:bg-error hover:text-white transition-colors">
                  <span class="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'admin'
})

const articles = ref([])
const isLoading = ref(true)

const fetchArticles = async () => {
  isLoading.value = true
  try {
    const res = await $fetch('/api/articles', { headers: { Authorization: `Bearer ${useCookie("auth_token").value}` } })
    if (res.success) {
      articles.value = res.data
    }
  } catch (error) {
    console.error('Failed to fetch articles')
  } finally {
    isLoading.value = false
  }
}

const deleteArticle = async (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
    try {
      await $fetch(`/api/articles/${id}`, { method: 'DELETE' })
      await fetchArticles()
    } catch (error) {
      alert('Gagal menghapus artikel')
    }
  }
}

onMounted(() => {
  fetchArticles()
})
</script>
