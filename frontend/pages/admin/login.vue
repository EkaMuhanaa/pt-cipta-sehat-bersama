<template>
  <div class="min-h-screen bg-surface-container flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-xl w-full max-w-md p-10">
      <div class="text-center mb-10">
        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-3xl text-primary">admin_panel_settings</span>
        </div>
        <h1 class="text-2xl font-bold text-on-background">Admin Login</h1>
        <p class="text-on-surface-variant font-body-sm mt-2">Masuk ke panel manajemen konten</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block font-label-md text-on-surface mb-2">Email</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="admin@ciptasehat.com"
          />
        </div>
        <div>
          <label class="block font-label-md text-on-surface mb-2">Password</label>
          <input 
            v-model="password" 
            type="password" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="••••••••"
          />
        </div>
        
        <div v-if="error" class="bg-error/10 text-error px-4 py-3 rounded-lg text-sm font-label-md">
          {{ error }}
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full bg-primary text-white py-3 rounded-full font-label-md hover:bg-opacity-90 transition-all shadow-md disabled:opacity-50"
        >
          {{ isLoading ? 'Memproses...' : 'Masuk' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false // No layout for login page
})

const email = ref('admin@ciptasehat.com')
const password = ref('hashedpassword') // Just for demo
const error = ref('')
const isLoading = ref(false)
const router = useRouter()

const handleLogin = async () => {
  isLoading.value = true
  error.value = ''
  
  try {
    const res = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })
    
    if (res.success) {
      const token = useCookie('auth_token', { maxAge: 60 * 60 * 24 })
      token.value = res.token
      router.push('/admin')
    }
  } catch (err) {
    error.value = err.data?.message || 'Login gagal. Periksa kembali email dan password Anda.'
  } finally {
    isLoading.value = false
  }
}
</script>
