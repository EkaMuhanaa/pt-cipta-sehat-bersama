<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-surface-container-low text-center">
      <div class="relative z-10 max-w-container-max mx-auto px-margin-desktop">
        <h1 class="font-display-lg text-display-lg text-on-background mb-4">Wawasan &amp; Artikel Kesehatan</h1>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Temukan informasi terbaru seputar dunia medis, kalibrasi alat kesehatan, hingga panduan komprehensif Keselamatan dan Kesehatan Kerja (K3).
        </p>
      </div>
    </section>

    <!-- Articles Grid Section -->
    <section class="py-16 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-white text-on-surface-variant border-outline hover:bg-surface-container-low hover:text-primary'"
            class="px-6 py-2 rounded-full font-label-md border transition-colors"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div v-if="isLoading" class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10 text-on-surface-variant font-label-md">
            Memuat artikel...
          </div>
          
          <div v-else-if="filteredArticles.length === 0" class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10 text-on-surface-variant font-label-md">
            Belum ada artikel di kategori ini.
          </div>

          <article v-else v-for="article in filteredArticles" :key="article.id" class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden bg-surface-container-low">
              <img :src="article.imageUrl || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop'" :alt="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full" 
                   :class="article.category === 'Medis' ? 'bg-primary' : article.category === 'K3' ? 'bg-on-background' : 'bg-secondary'">
                {{ article.category }}
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> {{ new Date(article.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) }}</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">person</span> {{ article.author?.name || 'Admin' }}</span>
              </div>
              <NuxtLink :to="`/artikel/${article.slug}`">
                <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {{ article.title }}
                </h2>
              </NuxtLink>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow line-clamp-3">
                {{ article.excerpt || article.content.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...' }}
              </p>
              <NuxtLink :to="`/artikel/${article.slug}`" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors mt-auto">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </NuxtLink>
            </div>
          </article>

        </div>

        <!-- Pagination (Mock) -->
        <div class="flex justify-center items-center gap-2 mt-16">
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">1</button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-bold">2</button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-bold">3</button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-20 bg-primary text-white reveal-on-scroll mt-12 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      <div class="max-w-4xl mx-auto px-margin-desktop text-center relative z-10">
        <span class="material-symbols-outlined text-5xl mb-4 opacity-80">mark_email_read</span>
        <h2 class="font-headline-lg text-headline-lg mb-4">Berlangganan Newsletter Kami</h2>
        <p class="text-body-lg text-white/80 mb-8 max-w-xl mx-auto">
          Dapatkan wawasan medis, panduan keselamatan kerja, dan informasi layanan terbaru langsung di kotak masuk surel Anda.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" @submit.prevent>
          <input type="email" placeholder="Masukkan alamat email Anda" class="flex-grow px-6 py-4 rounded-full text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary font-body-md" required />
          <button type="submit" class="bg-secondary text-white px-8 py-4 rounded-full font-label-md hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap">
            Berlangganan
          </button>
        </form>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const activeCategory = ref('Semua')
const articles = ref([])
const isLoading = ref(true)

const categories = ['Semua', 'Medis', 'Kalibrasi Alkes', 'K3']

const filteredArticles = computed(() => {
  if (activeCategory.value === 'Semua') return articles.value
  return articles.value.filter(a => a.category === activeCategory.value)
})

const fetchArticles = async () => {
  isLoading.value = true
  try {
    const res = await $fetch('/api/articles')
    if (res.success) {
      // Filter out unpublished articles
      articles.value = res.data.filter(a => a.isPublished)
    }
  } catch (error) {
    console.error('Error fetching articles:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchArticles()

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(section => {
    observer.observe(section);
  });
});
</script>
