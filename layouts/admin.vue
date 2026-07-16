<template>
  <div class="min-h-screen bg-surface-container-lowest font-sans flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col">
      <div class="p-6">
        <h2 class="text-xl font-bold text-primary flex items-center gap-2">
          <span class="material-symbols-outlined">health_and_safety</span> Admin Panel
        </h2>
      </div>
      <nav class="flex-grow flex flex-col gap-2 px-4">
        <NuxtLink to="/admin" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white hover:text-primary transition-all font-label-md" active-class="bg-white text-primary font-bold shadow-sm">
          <span class="material-symbols-outlined text-xl">dashboard</span> Dashboard
        </NuxtLink>
        <NuxtLink to="/admin/articles" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white hover:text-primary transition-all font-label-md" active-class="bg-white text-primary font-bold shadow-sm">
          <span class="material-symbols-outlined text-xl">article</span> Artikel
        </NuxtLink>
        <NuxtLink to="/admin/services" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white hover:text-primary transition-all font-label-md" active-class="bg-white text-primary font-bold shadow-sm">
          <span class="material-symbols-outlined text-xl">medical_services</span> Layanan
        </NuxtLink>
      </nav>
      <div class="p-4 border-t border-outline-variant">
        <button @click="logout" class="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-error hover:bg-error/10 transition-all font-label-md">
          <span class="material-symbols-outlined text-xl">logout</span> Keluar
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col">
      <header class="bg-white border-b border-outline-variant h-16 flex items-center justify-between px-8">
        <div class="md:hidden">
          <span class="material-symbols-outlined cursor-pointer">menu</span>
        </div>
        <div class="ml-auto flex items-center gap-4">
          <span class="font-label-md text-on-surface">Halo, Admin</span>
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">A</div>
        </div>
      </header>
      <div class="p-8 flex-grow overflow-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  const cookie = useCookie('auth_token')
  cookie.value = null
  router.push('/admin/login')
}
</script>
