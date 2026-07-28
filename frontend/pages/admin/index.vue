<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-display-md text-on-background">Dashboard</h1>
      <p class="text-on-surface-variant font-body-md mt-1">Ringkasan statistik website Anda.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <div class="bg-white rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-6">
        <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <span class="material-symbols-outlined text-2xl">article</span>
        </div>
        <div>
          <p class="text-on-surface-variant font-label-md">Total Artikel</p>
          <h2 class="text-3xl font-bold text-on-background">{{ stats.articles }}</h2>
        </div>
      </div>
      
      <!-- Card 2 -->
      <div class="bg-white rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-6">
        <div class="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
          <span class="material-symbols-outlined text-2xl">medical_services</span>
        </div>
        <div>
          <p class="text-on-surface-variant font-label-md">Total Layanan</p>
          <h2 class="text-3xl font-bold text-on-background">{{ stats.services }}</h2>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'admin'
})

const stats = ref({
  articles: 0,
  services: 0
})

onMounted(async () => {
  try {
    const res = await $fetch('/api/articles', { headers: { Authorization: `Bearer ${useCookie("auth_token").value}` } })
    if (res.success) {
      stats.value.articles = res.data.length
    }
  } catch (error) {
    console.error('Failed to load stats')
  }
})
</script>
