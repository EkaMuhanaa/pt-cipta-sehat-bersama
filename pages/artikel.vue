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
          <button class="bg-primary text-white px-6 py-2 rounded-full font-label-md hover:bg-opacity-90 transition-colors">Semua Artikel</button>
          <button class="bg-white text-on-surface-variant border border-outline px-6 py-2 rounded-full font-label-md hover:bg-surface-container-low hover:text-primary transition-colors">Medis</button>
          <button class="bg-white text-on-surface-variant border border-outline px-6 py-2 rounded-full font-label-md hover:bg-surface-container-low hover:text-primary transition-colors">Kalibrasi Alkes</button>
          <button class="bg-white text-on-surface-variant border border-outline px-6 py-2 rounded-full font-label-md hover:bg-surface-container-low hover:text-primary transition-colors">K3</button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <!-- Article 1 -->
          <article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" alt="Pentingnya MCU Berkala" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Medis</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> 12 Jul 2026</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 5 Min Baca</span>
              </div>
              <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer">
                Pentingnya Medical Check-Up Berkala bagi Karyawan
              </h2>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow">
                Medical Check-Up bukan hanya sekadar kewajiban tahunan, tetapi langkah preventif penting untuk mendeteksi penyakit dini dan menjaga produktivitas.
              </p>
              <a href="#" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop" alt="Kalibrasi Alat Tensi" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">Kalibrasi Alkes</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> 08 Jul 2026</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 4 Min Baca</span>
              </div>
              <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer">
                Standar Kalibrasi Alat Tensimeter di Klinik
              </h2>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow">
                Akurasi diagnosis sangat bergantung pada alat yang digunakan. Pahami jadwal dan prosedur kalibrasi tensimeter sesuai standar ISO.
              </p>
              <a href="#" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1000&auto=format&fit=crop" alt="Keselamatan Industri" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-on-background text-white text-xs font-bold px-3 py-1 rounded-full">K3</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> 02 Jul 2026</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 7 Min Baca</span>
              </div>
              <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer">
                5 Kesalahan Fatal dalam Implementasi SMK3
              </h2>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow">
                Hindari risiko kecelakaan kerja dengan mengidentifikasi kesalahan umum perusahaan saat menerapkan Sistem Manajemen K3.
              </p>
              <a href="#" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </article>

          <!-- Article 4 -->
          <article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop" alt="P3K di Tempat Kerja" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-on-background text-white text-xs font-bold px-3 py-1 rounded-full">K3</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> 28 Jun 2026</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 4 Min Baca</span>
              </div>
              <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer">
                Panduan Melengkapi Kotak P3K Industri
              </h2>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow">
                Apa saja isi standar kotak P3K di area produksi? Simak daftar lengkap peralatan darurat yang wajib ada di fasilitas Anda.
              </p>
              <a href="#" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </article>

          <!-- Article 5 -->
          <article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000&auto=format&fit=crop" alt="Pemeriksaan Lab" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Medis</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> 20 Jun 2026</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 6 Min Baca</span>
              </div>
              <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer">
                Membaca Hasil Pemeriksaan Laboratorium Dasar
              </h2>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow">
                Edukasi ringan tentang cara membaca parameter dasar pada hasil pemeriksaan darah lengkap yang sering dilakukan di klinik.
              </p>
              <a href="#" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </article>

          <!-- Article 6 -->
          <article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1000&auto=format&fit=crop" alt="Ruang Server K3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">Kalibrasi Alkes</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> 15 Jun 2026</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 5 Min Baca</span>
              </div>
              <h2 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors cursor-pointer">
                Kalibrasi Alat Uji Lingkungan Kerja
              </h2>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-6 flex-grow">
                Alat ukur debu, kebisingan, dan pencahayaan harus dikalibrasi secara rutin untuk menjamin validitas pelaporan audit K3.
              </p>
              <a href="#" class="inline-flex items-center gap-1 text-primary font-label-md hover:text-secondary transition-colors">
                Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
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
import { onMounted } from 'vue';

onMounted(() => {
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
