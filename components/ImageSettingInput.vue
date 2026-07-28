<template>
  <div class="border border-outline-variant p-4 rounded-2xl bg-surface-container-low/30 relative group">
    <label class="block font-label-md text-on-surface mb-3">{{ label }}</label>
    
    <div class="relative w-full h-40 bg-surface-container rounded-xl overflow-hidden border border-outline-variant group-hover:border-primary transition-colors">
      <img :src="modelValue" :alt="label" class="w-full h-full object-cover" />
      
      <!-- Overlay & Upload Button -->
      <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <label class="cursor-pointer bg-white text-primary px-4 py-2 rounded-full font-label-md hover:scale-105 transition-transform flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">upload</span> Ubah Gambar
          <input type="file" class="hidden" accept="image/*" @change="handleFileUpload" />
        </label>
      </div>
      
      <!-- Loading State -->
      <div v-if="isUploading" class="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-2">
        <span class="material-symbols-outlined animate-spin text-primary">sync</span>
        <span class="text-sm font-label-md text-primary">Mengunggah...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
const isUploading = ref(false)

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  isUploading.value = true
  const formData = new FormData()
  formData.append('image', file)

  try {
    const res = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    
    if (res.success) {
      emit('update:modelValue', res.url)
    }
  } catch (error) {
    alert('Gagal mengunggah gambar.')
  } finally {
    isUploading.value = false
    // reset input
    event.target.value = ''
  }
}
</script>
