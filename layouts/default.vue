<template>
  <div class="min-h-screen flex flex-col bg-background text-on-background antialiased overflow-x-hidden">
    <AppHeader />
    <main class="flex-grow pt-[72px] md:pt-[120px]">
      <slot />
    </main>
    <AppFooter />
    
    <!-- Floating WhatsApp CTA -->
    <a href="https://wa.me/6282140009541" target="_blank" class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center cursor-pointer group">
      <span class="material-symbols-outlined text-3xl group-hover:animate-pulse">chat</span>
    </a>
  </div>
</template>
