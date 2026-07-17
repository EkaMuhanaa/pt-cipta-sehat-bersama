<template>
  <div>
    <!-- B. HERO SECTION -->
    <section class="relative min-h-[calc(100vh-120px)] w-full flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="absolute inset-0 bg-primary mix-blend-multiply opacity-60 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10"></div>
        <div 
          v-for="(img, idx) in heroImages" 
          :key="idx"
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 z-0" 
          :class="activeHeroIndex === idx ? 'opacity-100' : 'opacity-0'"
          :style="{ backgroundImage: `url('${img}')` }"
        ></div>
      </div>
      <div class="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full text-white">
        <div class="max-w-3xl">
          <div class="flex items-center gap-4 mb-6 opacity-80">
            <div class="h-px w-12 bg-secondary-fixed"></div>
            <span class="font-label-md uppercase tracking-widest text-secondary-fixed"><b>Professional Healthcare Solutions</b></span>
          </div>
          <h1 class="font-display-lg text-white mb-6 leading-tight">Solusi Terpadu Kesehatan &amp; Pengembangan SDM</h1>
          <p class="font-body-lg text-white/90 mb-10">Membangun kredibilitas layanan medis, reparasi &amp; kalibrasi alat kesehatan, serta pelatihan sertifikasi K3 bagi masyarakat dan mitra bisnis.</p>
          <div class="flex flex-wrap gap-4">
            <a class="pill-cta bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md flex items-center gap-3" href="https://wa.me/6282140009541">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              Konsultasi via WhatsApp
            </a>
            <NuxtLink to="/layanan" class="pill-cta border-2 border-white text-white px-8 py-4 rounded-full font-label-md hover:bg-white hover:text-primary transition-all">
              Jelajahi Layanan
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- C. HOVER ACCORDION (4 Pillars) -->
    <section class="py-24 bg-surface transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop text-center mb-16">
        <h2 class="font-headline-lg text-primary mb-4">Pilar Utama Layanan Kami</h2>
        <div class="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div class="w-full">
        <div class="flex flex-col md:flex-row gap-0 min-h-[500px] w-full overflow-hidden border-y border-white/10 mt-8">
          <!-- Pillar 1 -->
          <div class="brand-panel flex-1 p-8 flex flex-col justify-end group relative overflow-hidden border-r border-white/10 last:border-r-0">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" :style="{ backgroundImage: `url('${getSetting('home_hero_1', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80')}')` }"></div>
            <div class="absolute inset-0 bg-primary/80 group-hover:bg-primary/60 transition-colors duration-500"></div>
            <div class="absolute top-8 left-8 text-white/30 font-display-lg select-none z-10">01</div>
            <div class="relative z-10">
              <span class="material-symbols-outlined text-secondary-fixed text-4xl mb-6">medical_services</span>
              <h3 class="font-headline-md text-white mb-2">Layanan Penunjang Medis</h3>
              <p class="font-label-sm text-secondary-fixed mb-4">KBLI 86993, 86103, 86105</p>
              <div class="brand-desc">
                <p class="text-white/90 font-body-md">Medical Lab &amp; Clinic Services yang komprehensif untuk mendukung diagnosa tepat dan pelayanan kesehatan masyarakat.</p>
              </div>
            </div>
          </div>
          <!-- Pillar 2 -->
          <div class="brand-panel flex-1 p-8 flex flex-col justify-end group relative overflow-hidden border-r border-white/10 last:border-r-0">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" :style="{ backgroundImage: `url('${getSetting('home_hero_2', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')}')` }"></div>
            <div class="absolute inset-0 bg-primary/80 group-hover:bg-primary/60 transition-colors duration-500"></div>
            <div class="absolute top-8 left-8 text-white/30 font-display-lg select-none z-10">02</div>
            <div class="relative z-10">
              <span class="material-symbols-outlined text-secondary-fixed text-4xl mb-6">construction</span>
              <h3 class="font-headline-md text-white mb-2">Reparasi &amp; Kalibrasi Alkes</h3>
              <p class="font-label-sm text-secondary-fixed mb-4">KBLI 33132</p>
              <div class="brand-desc">
                <p class="text-white/90 font-body-md">Equipment Maintenance profesional untuk memastikan semua peralatan medis berfungsi sesuai standar akurasi internasional.</p>
              </div>
            </div>
          </div>
          <!-- Pillar 3 -->
          <div class="brand-panel flex-1 p-8 flex flex-col justify-end group relative overflow-hidden border-r border-white/10 last:border-r-0">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" :style="{ backgroundImage: `url('${getSetting('home_hero_3', 'https://images.unsplash.com/photo-1584308666744-24d5e1823ebf?auto=format&fit=crop&w=800&q=80')}')` }"></div>
            <div class="absolute inset-0 bg-primary/80 group-hover:bg-primary/60 transition-colors duration-500"></div>
            <div class="absolute top-8 left-8 text-white/30 font-display-lg select-none z-10">03</div>
            <div class="relative z-10">
              <span class="material-symbols-outlined text-secondary-fixed text-4xl mb-6">inventory_2</span>
              <h3 class="font-headline-md text-white mb-2">Katalog Produk &amp; Solusi</h3>
              <p class="font-label-sm text-secondary-fixed mb-4">KBLI 47721, 47725, 47723</p>
              <div class="brand-desc">
                <p class="text-white/90 font-body-md">Distribusi alat kesehatan dan produk farmasi berkualitas tinggi untuk memenuhi kebutuhan fasilitas kesehatan modern.</p>
              </div>
            </div>
          </div>
          <!-- Pillar 4 -->
          <div class="brand-panel flex-1 p-8 flex flex-col justify-end group relative overflow-hidden border-r border-white/10 last:border-r-0">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" :style="{ backgroundImage: `url('${getSetting('home_hero_4', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80')}')` }"></div>
            <div class="absolute inset-0 bg-primary/80 group-hover:bg-primary/60 transition-colors duration-500"></div>
            <div class="absolute top-8 left-8 text-white/30 font-display-lg select-none z-10">04</div>
            <div class="relative z-10">
              <span class="material-symbols-outlined text-secondary-fixed text-4xl mb-6">school</span>
              <h3 class="font-headline-md text-white mb-2">Edukasi &amp; Pelatihan SDM</h3>
              <p class="font-label-sm text-secondary-fixed mb-4">KBLI 85594, 85589</p>
              <div class="brand-desc">
                <p class="text-white/90 font-body-md">Pusat pelatihan sertifikasi K3 dan pengembangan kompetensi tenaga kesehatan untuk standar pelayanan unggul.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- D. ABOUT US -->
    <section class="bg-primary pt-32 pb-48 px-margin-desktop relative transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto">
        <div class="glass-card -mt-48 relative z-20 rounded-lg p-10 md:p-16 shadow-xl flex flex-col lg:flex-row gap-16">
          <!-- Content Left -->
          <div class="lg:w-7/12">
            <span class="font-label-md text-secondary uppercase tracking-widest mb-4 block">Siapa Kami</span>
            <h2 class="font-headline-lg text-primary mb-8 leading-tight">Membangun Kredibilitas &amp; Pelayanan Kesehatan Terpadu</h2>
            <blockquote class="border-l-4 border-secondary pl-6 py-2 mb-10 italic text-on-surface-variant font-body-lg">
              "Kesehatan masyarakat dan standar kompetensi SDM medis adalah fondasi utama bagi kemajuan masa depan yang berkelanjutan."
            </blockquote>
            <!-- Legality & Management Box -->
            <div class="bg-surface-container-low rounded-2xl">
              <h4 class="font-label-md text-primary mb-6 flex items-center gap-2">
                <span class="material-symbols-outlined">verified</span>
                LEGALITAS &amp; MANAJEMEN
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p class="font-label-sm text-outline mb-1 uppercase">SK Kemenkumham RI</p>
                  <p class="font-label-md text-on-surface">AHU-0051867.AH.01.01.TAHUN 2026</p>
                </div>
                <div>
                  <p class="font-label-sm text-outline mb-1 uppercase">NIB OSS</p>
                  <p class="font-label-md text-on-surface">0707260044615</p>
                </div>
                <div>
                  <p class="font-label-sm text-outline mb-1 uppercase">Direktur Utama</p>
                  <p class="font-label-md text-on-surface">Ahmad Fachri Romdhoni</p>
                </div>
                <div>
                  <p class="font-label-sm text-outline mb-1 uppercase">Komisaris</p>
                  <p class="font-label-md text-on-surface">Marsugi Rahmat Sukiyat</p>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-outline-variant">
                <p class="font-label-sm text-outline mb-1 uppercase">NPWP Perusahaan</p>
                <p class="font-label-md text-on-surface">10.000.000.1-024.8572</p>
              </div>
            </div>
          </div>
          <!-- Image Right -->
          <div class="lg:w-5/12 relative">
            <div class="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none" style="background-image: radial-gradient(#025689 2px, transparent 2px); background-size: 20px 20px;"></div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <img alt="Professional Profile" class="w-full h-full object-cover" :src="getSetting('about_leader_1', 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoaSpC5xovznSzEbHP1O_ItCJ5NHDpDK71mrBtaAvt18MuhWD2qWUbTSOre_54O-oEgGz02CuuBJNoN99JDdVd65a1adWauTWjStxtKwZOTEI3dTGVgwFET6WE0kWMxvXZbMIQGVYnBGsU1b2Lbpp_r5AiicG0Nqp3JvySAxdMeM1U9MIIXJtzIjSD2YipypDb14W_luhcbsqxrYpRcArhO-LBEJgDZkQQmN2nBp54r5YhUdWT5dnkA')"/>
            </div>
            <div class="absolute -bottom-8 -left-8 bg-secondary text-white p-8 rounded-2xl shadow-lg">
              <div class="text-display-lg leading-none font-extrabold mb-1">10+</div>
              <div class="font-label-sm uppercase tracking-widest opacity-80">Tahun Pengalaman Kolektif</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E. WHY CHOOSE US -->
    <section class="py-24 bg-white px-margin-desktop transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto">
        <div class="text-center mb-20">
          <h2 class="font-headline-lg text-primary mb-4">Mengapa Bermitra Dengan Kami?</h2>
          <div class="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="group p-8 rounded-2xl hover:bg-surface-container transition-colors duration-300">
            <div class="w-16 h-16 bg-primary-fixed/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-primary text-3xl">gavel</span>
            </div>
            <h3 class="font-headline-md text-primary mb-4">Legalitas Resmi</h3>
            <p class="font-body-md text-on-surface-variant leading-relaxed">Beroperasi dengan izin resmi dan patuh pada regulasi Kemenkumham serta standar OSS terbaru.</p>
          </div>
          <div class="group p-8 rounded-2xl hover:bg-surface-container transition-colors duration-300">
            <div class="w-16 h-16 bg-secondary-container/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-secondary text-3xl">groups</span>
            </div>
            <h3 class="font-headline-md text-primary mb-4">Tenaga Medis Ahli</h3>
            <p class="font-body-md text-on-surface-variant leading-relaxed">Didukung oleh praktisi kesehatan dan teknisi bersertifikasi yang berpengalaman di bidangnya.</p>
          </div>
          <div class="group p-8 rounded-2xl hover:bg-surface-container transition-colors duration-300">
            <div class="w-16 h-16 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-tertiary text-3xl">bolt</span>
            </div>
            <h3 class="font-headline-md text-primary mb-4">Pelayanan Fast Response</h3>
            <p class="font-body-md text-on-surface-variant leading-relaxed">Komitmen pada kecepatan layanan dan efisiensi birokrasi untuk kepuasan mitra bisnis kami.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- F. PARTNERSHIP BANNER -->
    <section class="py-20 bg-primary relative overflow-hidden transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');"></div>
      <div class="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center">
        <h2 class="font-display-lg text-white mb-6">Siap Menjadi Mitra Kesehatan Anda?</h2>
        <p class="font-body-lg text-white/80 max-w-2xl mx-auto mb-10">Dapatkan solusi medical support dan pengembangan SDM terbaik untuk institusi Anda bersama PT CIPTA SEHAT BERSAMA.</p>
        <a class="pill-cta inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg" href="https://wa.me/6282140009541">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">whatshot</span>
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const { data: settingsData } = await useFetch('/api/settings')
const settings = settingsData.value?.data || {}

const getSetting = (key, defaultUrl) => settings[key] || defaultUrl

const heroImages = [
  getSetting('home_hero_1', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjLx2H9qjr4bTuCMCcpugbNEBTwBZCrT952oQQ5ZLYGzgGsY5NFWCtluQQVRbMpEQShYCLlhxEsHJcEQ0e4aDzt1bjSYEU9ouqCM9zryNOXUO91OP_Ub2BMYVfJ0nP8EI6WIAsmh5N21Ap0mPlzOElHyzRQoa04H7cHzvKqTblKGBy_XGVUBY9qHE0cCJDGig6v6gthcnWciUZbufz39Q49_VBeAO4i18Z7ADdtpikHBmB8Xi5puYQDg'),
  getSetting('home_hero_2', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80'),
  getSetting('home_hero_3', 'https://images.unsplash.com/photo-1584308666744-24d5e1823ebf?auto=format&fit=crop&w=1920&q=80'),
  getSetting('home_hero_4', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')
].filter(Boolean);

const activeHeroIndex = ref(0)

onMounted(() => {
  if (heroImages.length > 1) {
    setInterval(() => {
      activeHeroIndex.value = (activeHeroIndex.value + 1) % heroImages.length
    }, 5000)
  }

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
