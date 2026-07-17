<template>
  <footer class="bg-white pt-20 pb-10 px-margin-desktop border-t border-outline-variant mt-auto">
    <div class="max-w-container-max mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <!-- Branding -->
        <div class="col-span-1 lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 mb-6 block cursor-pointer">
            <img :src="'/logo-pt-trans.png'" alt="Logo PT Cipta Sehat Bersama" class="h-16 w-auto p-1 rounded-md hover:opacity-80 transition-opacity" />
          </NuxtLink>
          <p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
            Penyedia solusi kesehatan terintegrasi, kalibrasi alkes, dan pelatihan sertifikasi K3 terkemuka di Indonesia.
          </p>
          <div class="flex gap-4">
            <a class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span class="material-symbols-outlined text-sm">public</span></a>
            <a class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span class="material-symbols-outlined text-sm">mail</span></a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-label-md text-primary mb-8 uppercase tracking-widest"><b>Tautan Cepat</b></h4>
          <ul class="space-y-4">
            <li><NuxtLink class="font-body-md text-on-surface-variant hover:text-primary hover:font-bold transition-all" to="/tentang-kami">Tentang Kami</NuxtLink></li>
            <li><NuxtLink class="font-body-md text-on-surface-variant hover:text-primary hover:font-bold transition-all" to="/layanan">Layanan Medis</NuxtLink></li>
            <li><NuxtLink class="font-body-md text-on-surface-variant hover:text-primary hover:font-bold transition-all" to="/layanan">Kalibrasi Alkes</NuxtLink></li>
            <li><NuxtLink class="font-body-md text-on-surface-variant hover:text-primary hover:font-bold transition-all" to="/layanan">Pelatihan K3</NuxtLink></li>
            <li><NuxtLink class="font-body-md text-on-surface-variant hover:text-primary hover:font-bold transition-all" to="/artikel">Artikel Kesehatan</NuxtLink></li>
          </ul>
        </div>

        <!-- Legalitas -->
        <div>
          <h4 class="font-label-md text-primary mb-8 uppercase tracking-widest"><b>Legalitas</b></h4>
          <ul class="space-y-4">
            <li><span class="font-body-md text-on-surface-variant">Syarat &amp; Ketentuan</span></li>
            <li><span class="font-body-md text-on-surface-variant">Kebijakan Privasi</span></li>
            <li><span class="font-body-md text-on-surface-variant">Sertifikasi ISO</span></li>
            <li><span class="font-body-md text-on-surface-variant">Lisensi Operasional</span></li>
          </ul>
        </div>

        <!-- Kontak -->
        <div>
          <h4 class="font-label-md text-primary mb-8 uppercase tracking-widest"><b>Kantor Pusat</b></h4>
          <div class="flex gap-4 mb-6">
            <span class="material-symbols-outlined text-secondary">location_on</span>
            <p class="font-body-md text-on-surface-variant leading-relaxed">
                Jl. Prepedan No. 39, Kel. Kamal, <br/>
                Kec. Kalideres, Jakarta Barat, <br/>
                DKI Jakarta 11810
            </p>
          </div>
          <div class="flex gap-4">
            <span class="material-symbols-outlined text-secondary">call</span>
            <p class="font-body-md text-on-surface-variant">+62 821 4000 9541</p>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-label-sm text-on-surface-variant">© 2026 PT CIPTA SEHAT BERSAMA. All rights reserved.</p>
        <div class="flex gap-8">
          <a class="font-label-sm text-on-surface-variant hover:text-primary" href="#">Medical Excellence</a>
          <a class="font-label-sm text-on-surface-variant hover:text-primary" href="#">Trusted Partner</a>
        </div>
      </div>
    </div>
  </footer>
</template>
