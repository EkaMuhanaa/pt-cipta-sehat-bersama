<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden reveal-on-scroll bg-surface-container-lowest">
      <div class="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center">
        <h1 class="font-display-lg text-display-lg text-on-background leading-tight mb-6 max-w-4xl mx-auto">
          Solusi <span class="text-secondary">Kesehatan &amp; Keselamatan</span> Terintegrasi
        </h1>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          PT CIPTA SEHAT BERSAMA menyediakan ragam layanan komprehensif, dari pengadaan alat medis hingga pelatihan keselamatan kerja bersertifikasi.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-surface-container-low transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <!-- Service 1: Layanan Medis -->
          <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-outline-variant hover:shadow-2xl hover:border-primary transition-all duration-500">
            <div class="h-64 overflow-hidden">
              <img :src="getSetting('service_medis', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')" alt="Layanan Medis" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="p-8">
              <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <span class="material-symbols-outlined text-3xl">stethoscope</span>
              </div>
              <h3 class="font-headline-lg text-headline-lg text-on-background mb-4 group-hover:text-primary transition-colors">Layanan Medis Terpadu</h3>
              <p class="text-body-md font-body-md text-on-surface-variant mb-6">
                Kami menyediakan layanan klinik utama, medical check-up (MCU) berkala untuk karyawan, serta penyediaan tenaga medis profesional di lingkungan perusahaan.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Medical Check-up Berkala</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Penyediaan Dokter & Perawat</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Fasilitas Klinik Perusahaan</span></li>
              </ul>
            </div>
          </div>

          <!-- Service 2: Kalibrasi Alkes -->
          <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-outline-variant hover:shadow-2xl hover:border-primary transition-all duration-500">
            <div class="h-64 overflow-hidden">
              <img :src="getSetting('service_kalibrasi', 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop')" alt="Kalibrasi Alat Kesehatan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="p-8">
              <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <span class="material-symbols-outlined text-3xl">settings_applications</span>
              </div>
              <h3 class="font-headline-lg text-headline-lg text-on-background mb-4 group-hover:text-primary transition-colors">Kalibrasi Alkes</h3>
              <p class="text-body-md font-body-md text-on-surface-variant mb-6">
                Pengujian dan kalibrasi alat-alat kesehatan dengan standar internasional untuk memastikan keakuratan, keamanan, dan kelayakan operasional medis.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Standar ISO/IEC 17025</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Sertifikat Kelayakan Resmi</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Teknisi Elektromedis Handal</span></li>
              </ul>
            </div>
          </div>

          <!-- Service 3: Pelatihan K3 -->
          <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-outline-variant hover:shadow-2xl hover:border-primary transition-all duration-500">
            <div class="h-64 overflow-hidden">
              <img :src="getSetting('service_k3', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop')" alt="Pelatihan K3" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="p-8">
              <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <span class="material-symbols-outlined text-3xl">health_and_safety</span>
              </div>
              <h3 class="font-headline-lg text-headline-lg text-on-background mb-4 group-hover:text-primary transition-colors">Pelatihan Edukasi & K3</h3>
              <p class="text-body-md font-body-md text-on-surface-variant mb-6">
                Edukasi keselamatan dan kesehatan kerja secara mendalam untuk mencegah kecelakaan di tempat kerja dan meningkatkan produktivitas perusahaan.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Sertifikasi Kemnaker RI</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Pelatihan Pertolongan Pertama</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface-variant text-sm">Audit Keselamatan Kerja</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-primary text-white transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div class="max-w-container-max mx-auto px-margin-desktop relative z-10">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="flex-1 space-y-8">
            <h2 class="font-headline-lg text-headline-lg mb-4">Mengapa Memilih Layanan Kami?</h2>
            <p class="text-body-lg font-body-lg text-white/80 max-w-xl">
              Kami berkomitmen untuk memberikan solusi yang tidak hanya memenuhi ekspektasi, tetapi juga menetapkan standar baru dalam industri kesehatan dan keselamatan.
            </p>
            <div class="space-y-6 mt-8">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 class="font-headline-sm text-headline-sm font-bold">Terakreditasi & Tersertifikasi</h4>
                  <p class="text-body-sm text-white/70">Legalitas lengkap dan pengakuan resmi dari kementerian terkait.</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <div>
                  <h4 class="font-headline-sm text-headline-sm font-bold">Teknologi Mutakhir</h4>
                  <p class="text-body-sm text-white/70">Penggunaan instrumen kalibrasi dan medis dengan standar terkini.</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined">support_agent</span>
                </div>
                <div>
                  <h4 class="font-headline-sm text-headline-sm font-bold">Dukungan Tenaga Ahli</h4>
                  <p class="text-body-sm text-white/70">Tim medis, elektromedis, dan pakar K3 yang berpengalaman.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img :src="getSetting('service_tenaga', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop')" alt="Tenaga Ahli" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-surface-container-low transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop text-center space-y-8">
        <h2 class="font-display-md text-display-md text-on-background">Siap Berkonsultasi?</h2>
        <p class="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Diskusikan kebutuhan medis, kalibrasi alkes, dan pelatihan keselamatan di perusahaan Anda bersama konsultan ahli kami.
        </p>
        <div class="flex justify-center mt-8">
          <a href="https://wa.me/6282140009541" target="_blank" class="bg-secondary text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const { data: settingsData } = await useFetch('/api/settings')
const settings = settingsData.value?.data || {}

const getSetting = (key, defaultUrl) => settings[key] || defaultUrl

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
