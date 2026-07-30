<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden reveal-on-scroll bg-white">
      <div class="relative z-10 max-w-container-max mx-auto px-margin-desktop">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="flex-1 space-y-6">
            <h1 class="font-display-lg text-display-lg text-slate-800 leading-tight">
              Dedikasi Kami untuk <span class="text-secondary">Kesehatan &amp; Keselamatan</span>
            </h1>
            <p class="text-body-lg font-body-lg text-slate-600 max-w-xl">
              PT CIPTA SEHAT BERSAMA hadir sebagai mitra strategis dalam menyediakan solusi kesehatan menyeluruh, mengintegrasikan teknologi medis mutakhir dengan standar keselamatan kerja yang tak tertandingi.
            </p>
          </div>
          <div class="flex-1 relative">
            <div class="rounded-xl overflow-hidden shadow-2xl">
              <img class="w-full aspect-video object-cover" :src="getSetting('about_hero', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoasd8kUoZUnGRtRe06cjVOLpKL-i1dc5w9jYHcPoKYqkB1PKHd8BV750td68Tt1rjsF03kQr_BGpEZTLvpgetQxAd6JXewoMq0ZDNO-PoLONxqvOBsz9hNNkYhfos04cyGu9TwPTNZAJuuOky62-WIETCYkraYvMR-OCphgannLCw8TuYvMqZhGwVjWB8Bw9E4_a-F63ZOQ0xfhvaEBx7SeWO2SnOmrCh077EtmUQHAv9Fiwo_k0OBw')"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Mission Bento Grid -->
    <section class="py-24 bg-surface-container-low transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <!-- Visi -->
          <div class="md:col-span-2 group">
            <div class="flex items-start gap-6">
              <div class="bg-primary/10 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">visibility</span>
              </div>
              <div class="space-y-4">
                <h2 class="font-headline-lg text-headline-lg text-primary">Visi Kami</h2>
                <p class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Menjadi perusahaan penyedia layanan kesehatan dan solusi keselamatan kerja (K3) terdepan di Indonesia yang mengutamakan inovasi, integritas, dan kualitas demi meningkatkan kesejahteraan masyarakat dan produktivitas industri.
                </p>
              </div>
            </div>
          </div>
          <!-- Stats Card -->
          <div class="bg-primary p-12 rounded-2xl text-white flex flex-col justify-center items-center text-center space-y-4 shadow-xl">
            <span class="text-6xl font-bold">100%</span>
            <p class="font-label-md text-label-md uppercase tracking-widest opacity-80">Standar Kualitas</p>
            <p class="font-body-md text-body-md">Sertifikasi internasional dalam setiap layanan medis kami.</p>
          </div>
          <!-- Misi -->
          <div class="md:col-span-3 mt-8">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-8 flex items-center gap-3">
              <span class="material-symbols-outlined text-4xl">rocket_launch</span>
              Misi Perusahaan
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">1</div>
                <p class="text-body-lg font-body-md text-on-surface-variant leading-relaxed">Menyediakan peralatan medis dan solusi kesehatan yang inovatif serta terjangkau bagi seluruh lapisan mitra kerja.</p>
              </div>
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">2</div>
                <p class="text-body-lg font-body-md text-on-surface-variant leading-relaxed">Membangun budaya keselamatan kerja yang proaktif melalui edukasi dan pelatihan K3 yang komprehensif.</p>
              </div>
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">3</div>
                <p class="text-body-lg font-body-md text-on-surface-variant leading-relaxed">Menjalin kemitraan strategis dengan institusi global untuk menghadirkan teknologi kesehatan terbaik di Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 overflow-hidden transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop text-center mb-16">
        <h2 class="font-headline-lg text-headline-lg text-on-background mb-4">Nilai-Nilai Utama</h2>
        <p class="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">Filosofi yang menjadi landasan setiap langkah PT CIPTA SEHAT BERSAMA.</p>
      </div>
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div class="group relative bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
            <div class="mb-6 inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-3">Integritas</h3>
            <p class="text-on-surface-variant font-body-md">Kejujuran dan transparansi adalah fondasi dalam membangun kepercayaan dengan mitra kami.</p>
          </div>
          <div class="group relative bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
            <div class="mb-6 inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">medical_services</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-3">Profesionalisme</h3>
            <p class="text-on-surface-variant font-body-md">Menjalankan tugas dengan kompetensi tinggi dan standar etika medis yang ketat.</p>
          </div>
          <div class="group relative bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
            <div class="mb-6 inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">workspace_premium</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-3">Kualitas</h3>
            <p class="text-on-surface-variant font-body-md">Hanya memberikan solusi dan produk kesehatan terbaik yang telah melalui uji kualitas ketat.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Legality & History Section -->
    <section class="py-24 transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div class="space-y-8">
            <h2 class="font-headline-lg text-headline-lg text-on-background">Sejarah Singkat</h2>
            <div class="relative pl-8 border-l-2 border-primary/20 space-y-8">
              <div class="relative">
                <div class="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                <h4 class="font-headline-md text-headline-md text-primary">Pendirian</h4>
                <p class="text-body-md font-body-md text-on-surface-variant mt-2">Didirikan dengan visi untuk mentransformasi sistem pengadaan alat kesehatan di Indonesia menjadi lebih efisien dan terintegrasi.</p>
              </div>
              <div class="relative">
                <div class="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                <h4 class="font-headline-md text-headline-md text-primary">Ekspansi K3</h4>
                <p class="text-body-md font-body-md text-on-surface-variant mt-2">Memperluas layanan ke sektor Keselamatan &amp; Kesehatan Kerja (K3) untuk menjawab kebutuhan industri akan lingkungan kerja yang aman.</p>
              </div>
            </div>
          </div>
          <div class="bg-surface-container-low p-10 rounded-2xl border border-outline-variant">
            <h2 class="font-headline-lg text-headline-lg text-on-background mb-8 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">gavel</span>
              Aspek Legalitas
            </h2>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <p class="font-label-md text-label-md font-bold text-on-surface">Akta Pendirian Perusahaan</p>
                  <p class="text-on-surface-variant text-body-md">Terdaftar resmi di Kemenkumham Republik Indonesia.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <p class="font-label-md text-label-md font-bold text-on-surface">NIB (Nomor Induk Berusaha)</p>
                  <p class="text-on-surface-variant text-body-md">Izin operasional lengkap untuk perdagangan besar alat laboratorium, farmasi, dan kedokteran.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <p class="font-label-md text-label-md font-bold text-on-surface">Izin Penyalur Alat Kesehatan (IPAK)</p>
                  <p class="text-on-surface-variant text-body-md">Sertifikasi resmi dari Kementerian Kesehatan RI.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <p class="font-label-md text-label-md font-bold text-on-surface">Penyedia Jasa K3 (PJK3)</p>
                  <p class="text-on-surface-variant text-body-md">Pengakuan dari Kemnaker RI sebagai lembaga edukasi dan audit K3.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call Center & Maps Section -->
    <section class="py-24 bg-surface transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Hubungi Pusat Layanan Kami</h2>
          <div class="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p class="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">Kami siap melayani kebutuhan informasi dan konsultasi medis Anda setiap hari kerja.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <!-- Call Center Info -->
          <div class="lg:col-span-4 bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-outline-variant relative overflow-hidden flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="relative z-10 space-y-10">
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-headline-md text-title-md font-bold text-slate-800 mb-1">Call Center</h4>
                  <p class="text-slate-600 font-body-md mb-2">Layanan Konsultasi</p>
                  <a href="https://wa.me/6282140009541" class="text-lg font-bold text-primary hover:text-secondary transition-colors inline-block mt-1">+62 821 4000 9541</a>
                </div>
              </div>
              
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-headline-md text-title-md font-bold text-slate-800 mb-1">Email Resmi</h4>
                  <p class="text-slate-600 font-body-md mb-2">Kemitraan & Info</p>
                  <a href="mailto:info@ciptasehatbersama.com" class="text-base font-bold text-primary hover:text-secondary transition-colors break-all inline-block mt-1">info@ciptasehatbersama.com</a>
                </div>
              </div>
              
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-headline-md text-title-md font-bold text-slate-800 mb-1">Kantor Pusat</h4>
                  <p class="text-slate-600 font-body-md leading-relaxed mt-2">
                    Jl. Prepedan No. 39, Kel. Kamal, <br/>
                    Kec. Kalideres, Jakarta Barat, <br/>
                    DKI Jakarta 11810
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Maps Embed -->
          <div class="lg:col-span-8 rounded-xl overflow-hidden shadow-sm min-h-[450px] border border-outline-variant bg-slate-50 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1147055745855!2d106.70275827552541!3d-6.115206360098495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02b1f8ef94bd%3A0xc34cccecf55e378f!2sJl.%20Prepedan%20Raya%20No.39%2C%20RT.4%2FRW.9%2C%20Kamal%2C%20Kec.%20Kalideres%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011810!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              class="absolute inset-0 w-full h-full" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white transition-all duration-700 opacity-0 translate-y-10 reveal-on-scroll">
      <div class="max-w-container-max mx-auto px-margin-desktop text-center space-y-8">
        <h2 class="font-headline-lg text-headline-lg">Siap Membangun Kemitraan yang Lebih Sehat?</h2>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <button class="bg-secondary text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> Hubungi via WhatsApp
          </button>
          <button class="bg-white text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all">
            Unduh Company Profile
          </button>
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
