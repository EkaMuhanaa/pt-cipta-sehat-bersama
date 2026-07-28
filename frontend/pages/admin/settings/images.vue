<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-display-lg text-on-background">Pengaturan Gambar</h1>
        <p class="text-on-surface-variant font-body-md mt-2">Kelola background hero dan foto-foto ilustrasi pada halaman publik.</p>
      </div>
      <button 
        @click="saveSettings" 
        :disabled="isSaving"
        class="bg-primary text-white px-6 py-2 rounded-full font-label-md hover:bg-opacity-90 transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-sm" v-if="!isSaving">save</span>
        <span class="material-symbols-outlined text-sm animate-spin" v-else>sync</span>
        {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>

    <!-- Feedback Message -->
    <div v-if="message" :class="messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="p-4 rounded-xl flex items-center gap-3">
      <span class="material-symbols-outlined">{{ messageType === 'success' ? 'check_circle' : 'error' }}</span>
      <p class="font-label-md">{{ message }}</p>
    </div>

    <div v-if="isLoading" class="py-12 text-center text-on-surface-variant">
      <span class="material-symbols-outlined text-4xl animate-spin">progress_activity</span>
      <p class="mt-4">Memuat pengaturan...</p>
    </div>

    <div v-else class="space-y-8">
      <!-- Section: Beranda -->
      <div class="bg-white rounded-3xl p-8 border border-outline-variant shadow-sm">
        <h2 class="text-xl font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-4">
          <span class="material-symbols-outlined">home</span>
          Halaman Beranda
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageSettingInput v-model="settings.home_hero_1" label="Slider 1 (Layanan Medis)" />
          <ImageSettingInput v-model="settings.home_hero_2" label="Slider 2 (Alat Kesehatan)" />
          <ImageSettingInput v-model="settings.home_hero_3" label="Slider 3 (Kalibrasi)" />
          <ImageSettingInput v-model="settings.home_hero_4" label="Slider 4 (Edukasi K3)" />
        </div>
      </div>

      <!-- Section: Tentang Kami -->
      <div class="bg-white rounded-3xl p-8 border border-outline-variant shadow-sm">
        <h2 class="text-xl font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-4">
          <span class="material-symbols-outlined">info</span>
          Halaman Tentang Kami
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageSettingInput v-model="settings.about_hero" label="Gambar Hero Tentang Kami" />
          <div class="space-y-8">
            <ImageSettingInput v-model="settings.about_leader_1" label="Foto Pimpinan 1 (Ahmad)" />
            <ImageSettingInput v-model="settings.about_leader_2" label="Foto Pimpinan 2 (Marsugi)" />
          </div>
        </div>
      </div>

      <!-- Section: Layanan & Edukasi -->
      <div class="bg-white rounded-3xl p-8 border border-outline-variant shadow-sm">
        <h2 class="text-xl font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-4">
          <span class="material-symbols-outlined">medical_services</span>
          Layanan & Edukasi
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageSettingInput v-model="settings.service_medis" label="Gambar Layanan Medis" />
          <ImageSettingInput v-model="settings.service_kalibrasi" label="Gambar Kalibrasi" />
          <ImageSettingInput v-model="settings.service_k3" label="Gambar Pelatihan K3" />
          <ImageSettingInput v-model="settings.service_tenaga" label="Gambar Tenaga Ahli" />
          <ImageSettingInput v-model="settings.edu_hero" label="Gambar Hero Edukasi K3" />
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

const isLoading = ref(true)
const isSaving = ref(false)
const message = ref('')
const messageType = ref('')

const defaultSettings = {
  home_hero_1: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  home_hero_2: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  home_hero_3: 'https://images.unsplash.com/photo-1584308666744-24d5e1823ebf?auto=format&fit=crop&w=800&q=80',
  home_hero_4: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  about_hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoasd8kUoZUnGRtRe06cjVOLpKL-i1dc5w9jYHcPoKYqkB1PKHd8BV750td68Tt1rjsF03kQr_BGpEZTLvpgetQxAd6JXewoMq0ZDNO-PoLONxqvOBsz9hNNkYhfos04cyGu9TwPTNZAJuuOky62-WIETCYkraYvMR-OCphgannLCw8TuYvMqZhGwVjWB8Bw9E4_a-F63ZOQ0xfhvaEBx7SeWO2SnOmrCh077EtmUQHAv9Fiwo_k0OBw',
  about_leader_1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLHf3AWVTA99J0g-1Q-wGFYCZhw8_KAdSeOLP9QXH-RwFByVmIlpQyTuctYpTiqJFHmip_SOM1vgBCipKewpBLAyVyfm8_R52m8IergV_y_O-wMDDbaYXjuGNLm2hGhUZFkL3k04HNa8ISpeBf8-gnq_iV9l4_zGno4fg85nl6YCDRhnhcrvbOr7iaXCx7jNZHCyTMeXaPs4w12vJs3BNdsbklqJbhcQpBhbZtbu-5Z6aTBH4pzDvnFA',
  about_leader_2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4t8DQhi3V3X9xdJEZREl_WjDVtpb0ImUuYXKOLTuBvEcWAqMZPSE4oCf6J8HChQA_J2NabDVH-_gN9XdsUZzn7iiacLA-nybs7nvv3mAHNQfrwOW3iBBtsET93WUSZNNnmX1jLcgEDx8ulZthXQ6RXZOteh38q-z1GZ_4Y0nXuo28Rq9DrASEiA5cZv77JBDWVDBWYgqsJTWN8xe1Ju6gZ1v-seiePeZL3MnnvMP87kZFwHQO-FTZog',
  service_medis: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
  service_kalibrasi: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop',
  service_k3: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop',
  service_tenaga: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
  edu_hero: 'https://images.unsplash.com/photo-1541888086968-3e4210ff40f5?q=80&w=2000&auto=format&fit=crop'
}

const settings = ref({ ...defaultSettings })

const fetchSettings = async () => {
  isLoading.value = true
  try {
    const res = await $fetch('/api/settings')
    if (res.success && res.data) {
      // Merge with defaults
      settings.value = { ...defaultSettings, ...res.data }
    }
  } catch (error) {
    console.error('Failed to fetch settings', error)
  } finally {
    isLoading.value = false
  }
}

const saveSettings = async () => {
  isSaving.value = true
  message.value = ''
  try {
    const res = await $fetch('/api/settings', {
      method: 'PUT',
      body: settings.value
    })
    if (res.success) {
      message.value = 'Pengaturan berhasil disimpan!'
      messageType.value = 'success'
      setTimeout(() => { message.value = '' }, 3000)
    }
  } catch (error) {
    message.value = 'Gagal menyimpan pengaturan'
    messageType.value = 'error'
  } finally {
    isSaving.value = false
  }
}

onMounted(() => {
  fetchSettings()
})
</script>
