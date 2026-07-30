<template>
  <div class="bg-white min-h-screen">
    <div v-if="isLoading" class="pt-40 pb-20 text-center font-display-md text-on-surface-variant">
      Memuat artikel...
    </div>
    
    <div v-else-if="!article" class="pt-40 pb-20 text-center font-display-md text-error">
      Artikel tidak ditemukan.
    </div>

    <template v-else>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20">
        <!-- Breadcrumb -->
        <div class="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-10">
          <NuxtLink to="/" class="relative inline-block transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:-bottom-1 after:left-0 after:bg-primary after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Beranda</NuxtLink>
          <span class="material-symbols-outlined text-sm">chevron_right</span>
          <NuxtLink to="/artikel" class="relative inline-block transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:-bottom-1 after:left-0 after:bg-primary after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Berita & Artikel Kesehatan</NuxtLink>
          <span class="material-symbols-outlined text-sm">chevron_right</span>
          <span class="relative inline-block font-bold text-primary transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-primary after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">{{ article.title }}</span>
        </div>

        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Left Content -->
          <div class="lg:w-2/3">
            <!-- Category -->
            <div class="inline-block bg-primary text-white px-4 py-1.5 rounded text-sm font-medium mb-6">
              {{ article.category }}
            </div>
            
            <!-- Title -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6 leading-tight font-display-lg">
              {{ article.title }}
            </h1>
            
            <!-- Author -->
            <div class="text-gray-600 mb-4 text-lg">
              Oleh {{ article.author?.name || 'Tim PT Cipta Sehat Bersama' }}
            </div>
            
            <!-- Date & Share Buttons -->
            <div class="flex items-center gap-6 text-gray-500 text-sm mb-8 pb-4">
              <div>{{ new Date(article.created_at).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }}</div>
              
              <div class="flex items-center gap-3">
                <span class="w-1 h-1 rounded-full bg-gray-400"></span>
                <div class="flex items-center gap-2">
                  <button class="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                  </button>
                  <button class="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path></svg>
                  </button>
                  <button class="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                  </button>
                  <button @click="copyLink" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ml-1" title="Salin Tautan">
                    <span class="material-symbols-outlined text-sm">link</span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Excerpt -->
            <p v-if="article.excerpt" class="font-bold text-gray-800 text-lg mb-8 leading-relaxed">
              {{ article.excerpt }}
            </p>
            
            <!-- Cover Image -->
            <div v-if="article.image_url" class="mb-10">
              <img :src="article.image_url" :alt="article.title" class="w-full h-auto rounded-lg object-cover border border-outline-variant" style="max-height: 500px;" />
            </div>
            
            <!-- Content -->
            <div class="prose prose-lg prose-headings:font-display-md prose-headings:text-on-background prose-p:text-gray-700 prose-a:text-primary max-w-none pb-16 border-b" v-html="article.content"></div>
          </div>
          
          <!-- Right Sidebar: Related Articles -->
          <div class="lg:w-1/3">
            <h3 class="text-lg font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-6 flex items-center">
              Artikel Terkait
            </h3>
            
            <div class="space-y-6">
              <div v-if="relatedArticles.length === 0" class="text-sm text-gray-500">
                Belum ada artikel terkait.
              </div>
              
              <NuxtLink 
                v-else
                v-for="related in relatedArticles" 
                :key="related.id" 
                :to="`/artikel/${related.slug}`"
                class="block group pb-6 border-b border-gray-100 last:border-0"
              >
                <div class="text-xs text-gray-500 mb-2">{{ new Date(related.created_at).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }}</div>
                <h4 class="text-base font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">{{ related.title }}</h4>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const article = ref(null)
const allArticles = ref([])
const isLoading = ref(true)

const relatedArticles = computed(() => {
  if (!article.value || allArticles.value.length === 0) return []
  return allArticles.value
    .filter(a => a.category === article.value.category && a.id !== article.value.id)
    .slice(0, 5) // Show top 5 related articles
})

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  alert('Tautan berhasil disalin!')
}

onMounted(async () => {
  try {
    const res = await $fetch('/api/articles')
    if (res.success) {
      allArticles.value = res.data
      article.value = res.data.find(a => a.slug === slug)
    }
  } catch (error) {
    console.error('Failed to fetch article', error)
  } finally {
    isLoading.value = false
  }
})
</script>
