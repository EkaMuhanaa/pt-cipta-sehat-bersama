<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 overflow-hidden reveal-on-scroll">
      <div class="absolute inset-0 z-0">
        <img :src="getSetting('edu_hero', 'https://images.unsplash.com/photo-1541888086968-3e4210ff40f5?q=80&w=2000&auto=format&fit=crop')" alt="Edukasi K3 Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center">
        <h1 class="font-display-lg text-display-lg text-white leading-tight mb-6 max-w-4xl mx-auto drop-shadow-lg">
          Edukasi & Pelatihan <span class="text-secondary">Keselamatan Kerja (K3)</span>
        </h1>
        <p class="text-body-lg font-body-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
          Menciptakan lingkungan kerja yang proaktif, aman, dan mematuhi regulasi nasional serta internasional demi produktivitas yang berkelanjutan.
        </p>
      </div>
    </section>

    <!-- Training Programs Section -->
    <section class="py-24 bg-surface-container-lowest transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg text-on-background mb-4">Program Pelatihan Kami</h2>
          <p class="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">Dirancang secara khusus oleh para ahli K3 tersertifikasi untuk menjawab berbagai kebutuhan industri.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Program 1 -->
          <div class="group bg-white rounded-2xl p-8 border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1 cursor-pointer">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">medical_services</span>
            </div>
            <div>
              <h3 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">Pelatihan P3K di Tempat Kerja</h3>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Pelatihan komprehensif bagi petugas P3K (Pertolongan Pertama Pada Kecelakaan) di perusahaan untuk menangani insiden medis darurat sebelum bantuan lanjutan tiba.
              </p>
              <span class="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-sm">verified</span> Sertifikat Kemenaker RI
              </span>
            </div>
          </div>

          <!-- Program 2 -->
          <div class="group bg-white rounded-2xl p-8 border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1 cursor-pointer">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">fire_extinguisher</span>
            </div>
            <div>
              <h3 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">Tanggap Darurat & Kebakaran</h3>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Simulasi dan edukasi mengenai sistem pemadaman api, evakuasi gedung, dan manajemen risiko kebakaran di lingkungan industri maupun perkantoran.
              </p>
              <span class="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-sm">verified</span> Sertifikat Kemenaker RI
              </span>
            </div>
          </div>

          <!-- Program 3 -->
          <div class="group bg-white rounded-2xl p-8 border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1 cursor-pointer">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">airline_seat_recline_normal</span>
            </div>
            <div>
              <h3 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">Ergonomi & Kesehatan Industri</h3>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Identifikasi risiko ergonomi dan edukasi postur kerja yang ideal untuk mencegah penyakit akibat kerja (PAK) dan meningkatkan kenyamanan serta produktivitas pekerja.
              </p>
              <span class="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-sm">health_and_safety</span> In-house Training
              </span>
            </div>
          </div>

          <!-- Program 4 -->
          <div class="group bg-white rounded-2xl p-8 border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1 cursor-pointer">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">assignment_turned_in</span>
            </div>
            <div>
              <h3 class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">Audit & Implementasi SMK3</h3>
              <p class="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Pendampingan implementasi Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) serta pelaksanaan audit internal perusahaan sesuai PP No. 50 Tahun 2012.
              </p>
              <span class="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-sm">verified</span> Audit Profesional
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Certification Highlight Section -->
    <section class="py-24 bg-surface-container-low transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="bg-primary rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div class="absolute -right-10 -top-10 opacity-10">
            <span class="material-symbols-outlined text-[200px]">workspace_premium</span>
          </div>
          <div class="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div class="flex-1 space-y-6">
              <h2 class="font-headline-lg text-headline-lg">Sertifikasi & Legalitas Kemenaker RI</h2>
              <p class="text-body-lg font-body-lg text-white/90">
                PT CIPTA SEHAT BERSAMA merupakan Perusahaan Jasa K3 (PJK3) resmi yang ditunjuk langsung oleh Kementerian Ketenagakerjaan Republik Indonesia. Seluruh program pelatihan kami memenuhi standar hukum yang berlaku.
              </p>
              <ul class="space-y-4 pt-4">
                <li class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"><span class="material-symbols-outlined text-sm">check</span></div>
                  Sertifikat resmi dari negara
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"><span class="material-symbols-outlined text-sm">check</span></div>
                  Buku Kerja / Lisensi K3 Kemenaker
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"><span class="material-symbols-outlined text-sm">check</span></div>
                  Instruktur adalah Ahli K3 Tersertifikasi
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/3">
              <div class="bg-white/10 border border-white/20 p-8 rounded-2xl text-center backdrop-blur-sm">
                <span class="material-symbols-outlined text-6xl text-secondary mb-4">verified</span>
                <h3 class="font-headline-sm text-headline-sm mb-2">Terakreditasi Penuh</h3>
                <p class="text-body-sm text-white/80">Lembaga PJK3 Nasional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-surface-container-lowest transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop text-center space-y-8">
        <h2 class="font-display-md text-display-md text-on-background">Tingkatkan Standar Keselamatan Perusahaan Anda</h2>
        <p class="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Daftarkan tim Anda sekarang atau konsultasikan kebutuhan *in-house training* secara khusus dengan tim kami.
        </p>
        <div class="flex justify-center gap-4 mt-8">
          <a href="https://wa.me/6282140009541" target="_blank" class="bg-secondary text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">event_available</span> Jadwalkan Pelatihan
          </a>
          <NuxtLink to="/layanan" class="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-label-md text-label-md hover:bg-outline-variant transition-all">
            Pelajari Layanan Lainnya
          </NuxtLink>
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
