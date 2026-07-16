<template>
  <header
    id="main-nav"
    class="fixed top-0 w-full z-[100] shadow-md bg-white flex flex-col"
  >
    <!-- Top Bar -->
    <div class="hidden md:block bg-primary text-white py-2 px-4 lg:px-8 text-sm">
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-6">
          <a href="https://wa.me/6282140009541" class="hover:text-secondary-fixed transition-colors flex items-center gap-2">
            Hubungi Kami
          </a>
          <div class="w-px h-4 bg-white/50"></div>
          <div class="flex items-center gap-6">
             <a href="#" class="hover:text-secondary-fixed transition-colors flex items-center gap-1">
               <span class="material-symbols-outlined text-[16px]">public</span> @ptciptasehatbersama
             </a>
             <a href="#" class="hover:text-secondary-fixed transition-colors flex items-center gap-1">
               <span class="material-symbols-outlined text-[16px]">share</span> @ptciptasehatbersama
             </a>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="font-medium tracking-wide">Selamat datang</span>
          <div class="w-px h-4 bg-white/50"></div>
          <span class="font-bold flex items-center gap-1">ID <span class="material-symbols-outlined text-sm">expand_more</span></span>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="w-full bg-white px-4 lg:px-8 py-4 relative">
      <div class="w-full flex justify-between items-center">
        
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="flex items-center gap-4">
          <img :src="'/logo-pt-trans.png'" alt="Logo PT Cipta Sehat Bersama" class="h-10 md:h-12 w-auto object-contain" />
          <div class="flex flex-col text-primary">
            <span class="font-bold text-sm md:text-xl leading-tight tracking-wide">PT Cipta Sehat Bersama</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden xl:flex items-center gap-8">
          <NuxtLink to="/" class="font-bold text-slate-800 hover:text-primary transition-colors text-[15px]">Beranda</NuxtLink>
          <NuxtLink to="/tentang-kami" class="font-bold text-slate-800 hover:text-primary transition-colors text-[15px]">Tentang Kami</NuxtLink>
          <NuxtLink to="/layanan" class="font-bold text-slate-800 hover:text-primary transition-colors text-[15px]">Layanan</NuxtLink>
          <NuxtLink to="/edukasi-k3" class="font-bold text-slate-800 hover:text-primary transition-colors text-[15px]">Edukasi &amp; K3</NuxtLink>
          <NuxtLink to="/artikel" class="font-bold text-slate-800 hover:text-primary transition-colors text-[15px]">Artikel</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="xl:hidden text-primary p-2 focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span class="material-symbols-outlined text-3xl">{{ isMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-show="isMenuOpen" class="xl:hidden bg-white w-full border-t border-slate-200 absolute top-full left-0 shadow-xl pb-4">
      <div class="flex flex-col px-margin-desktop py-4 space-y-4">
        <NuxtLink to="/" class="text-slate-800 font-bold border-b border-slate-100 pb-3" @click="isMenuOpen = false">Beranda</NuxtLink>
        <NuxtLink to="/tentang-kami" class="text-slate-800 font-bold border-b border-slate-100 pb-3" @click="isMenuOpen = false">Tentang Kami</NuxtLink>
        <NuxtLink to="/layanan" class="text-slate-800 font-bold border-b border-slate-100 pb-3" @click="isMenuOpen = false">Layanan</NuxtLink>
        <NuxtLink to="/edukasi-k3" class="text-slate-800 font-bold border-b border-slate-100 pb-3" @click="isMenuOpen = false">Edukasi &amp; K3</NuxtLink>
        <NuxtLink to="/artikel" class="text-slate-800 font-bold border-b border-slate-100 pb-3" @click="isMenuOpen = false">Artikel</NuxtLink>
        <a class="text-slate-800 font-bold pb-1" href="#">Kontak</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

// Close mobile menu on route change
watch(route, () => {
  isMenuOpen.value = false;
});
</script>

<style scoped>
/* No extra styles needed; using Tailwind classes */
</style>
