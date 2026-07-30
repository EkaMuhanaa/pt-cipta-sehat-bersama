# Pedoman Desain UI/UX: PT Cipta Sehat Bersama

Pedoman ini mengatur standar visual untuk website perusahaan agar mencerminkan identitas yang **Formal, Profesional, Higienis, dan Terpercaya** sebagai perusahaan (PT) di bidang kesehatan dan alat medis.

## 1. Prinsip Utama Desain (Design Principles)
- **Profesional & Formal:** Hindari elemen desain yang terlalu mencolok atau *playful* (seperti efek *glow*/pendaran, bayangan warna-warni yang berlebihan, atau animasi memantul).
- **Bersih & Higienis (Clean):** Gunakan *white space* (ruang kosong) yang cukup dengan tata letak yang terstruktur rapi. Background dominan putih atau abu-abu sangat muda.
- **Kepercayaan (Trust):** Tampilkan informasi dengan lugas, tipografi yang jelas dan kokoh, serta warna-warna solid yang memberikan rasa aman.

## 2. Palet Warna
- **Warna Utama (Primary):** Biru korporat atau Hijau Medis (melambangkan kesehatan, profesionalisme, dan kepercayaan). Hindari gradien mencolok, gunakan warna *solid*.
- **Warna Latar (Background):** Putih bersih (`#FFFFFF`) untuk konten utama, dan Abu-abu terang (`#F8FAFC` atau `bg-slate-50`) untuk membedakan antar seksi (section).
- **Warna Teks (Typography):** Abu-abu gelap/hitam kebiruan (`#1E293B` atau `text-slate-800`) untuk *headline*, dan abu-abu sedang (`#475569` atau `text-slate-600`) untuk *body text*.
- **Aksen (Accent):** Gunakan warna aksen secara sangat terbatas, hanya untuk tombol (Call to Action) atau ikon penting.

## 3. Efek & Interaksi (Hover States)
- **Shadows (Bayangan):** Gunakan bayangan yang sangat halus (`shadow-sm` atau `shadow`) hanya untuk memisahkan kartu konten dari *background*. Jangan gunakan shadow berukuran besar (`shadow-2xl`) kecuali untuk modal/pop-up.
- **Hover Effects:** Transisi saat kursor diarahkan (*hover*) harus halus dan tidak berlebihan. 
  - **Diperbolehkan:** Mengubah warna *background* tombol menjadi sedikit lebih gelap, sedikit mengangkat elemen (`-translate-y-1` maksimal), atau mempertegas border.
  - **TIDAK Diperbolehkan:** Skala yang membesar secara drastis (`scale-110`), filter ekstrem (merubah *grayscale* menjadi berwarna secara perlahan pada peta), atau efek bercahaya/blur (*glow/blur*).

## 4. Tipografi
- Gunakan font *sans-serif* yang modern namun bersih dan formal (seperti Inter, Roboto, atau Helvetica).
- Ukuran teks tidak boleh terlalu besar dan berteriak. Gunakan hierarki heading yang terstruktur (H1, H2, H3, dst).
- *Font weight* untuk judul menggunakan *Semi-Bold* atau *Bold*, sedangkan untuk paragraf menggunakan *Regular*.

## 5. Komponen UI
- **Borders (Garis Tepi):** Gunakan garis tepi yang tipis (`border`, `border-outline-variant`) dengan warna yang pudar untuk kartu (*cards*).
- **Bentuk (Border Radius):** Gunakan sudut yang membulat secara moderat (`rounded-lg` atau `rounded-xl`). Hindari bentuk membulat ekstrem (`rounded-3xl` atau `rounded-full`) untuk *container* informasi formal.
- **Ikonografi:** Gunakan ikon solid atau *outline* yang konsisten dengan ketebalan garis yang seragam. Ikon harus fungsional dan tidak sekadar dekorasi.
- **Elemen Dekoratif (Anti AI Slop):** JANGAN gunakan elemen teks kecil dengan latar belakang (seperti *Badge / Pill / Eyebrow Text* berlatar warna di atas judul). Elemen semacam ini cenderung berkesan generik (*AI slop*) dan mengurangi tingkat keformalan. Gunakan tipografi murni tanpa pembungkus latar belakang.

---
*Dokumen ini merupakan acuan mutlak bagi seluruh tim *developer* dan desainer saat membuat atau memodifikasi tampilan website.*
