# Playbook CI/CD GitHub Actions ke Hostinger

Dokumen ini adalah panduan reusable untuk menerapkan pola deployment yang digunakan oleh Klinik Sehat Medika pada project lain.

Referensi implementasi yang sudah berjalan:

- Workflow: `.github/workflows/deploy-frontend-production.yml`
- Operasional project ini: `DEPLOY_HOSTINGER.md`
- Trigger rebuild dari CMS: `AUTOMATION_FRONTEND_DEPLOY.md`

Gunakan workflow project ini sebagai template kanonis. Jangan menyalin domain, username, IP, path server, atau secret milik project ini ke project lain.

## 1. Kapan pola ini cocok

Pola ini cocok jika:

- Hosting menyediakan PHP, Apache/LiteSpeed, SSH, dan file statis.
- Frontend dapat dihasilkan menjadi HTML/CSS/JavaScript statis, misalnya Nuxt `generate`, Vite, Astro, atau Next.js static export.
- Backend Laravel disimpan pada repository yang sama atau dapat di-deploy melalui SSH.
- Build Node.js dilakukan di GitHub Actions, bukan di Hostinger.
- Frontend dan backend memakai document root yang sama, dengan direktori backend publik yang harus dilindungi, misalnya `public_html/api`.
- Perubahan konten CMS perlu membangun ulang frontend statis dan sitemap.

Pola ini tidak langsung cocok untuk frontend yang membutuhkan runtime Node.js, WebSocket, worker permanen, atau SSR dinamis di server.

## 2. Arsitektur target

```text
Developer push ke main
        |
        v
GitHub Actions
  - install dependency
  - test dan type-check
  - build frontend statis
  - validasi output
  - deploy backend jika berubah
  - upload arsip frontend melalui SSH
        |
        v
Hostinger
  source/                 clone Git repository
  public_html/            document root frontend
  public_html/api/        public entry point Laravel, tidak boleh terhapus
  releases/               backup frontend sebelum deployment

Admin publish konten
        |
        v
Laravel observer setelah commit database
        |
        v
GitHub repository_dispatch
        |
        v
Build dan deploy ulang frontend statis
```

## 3. Prinsip keselamatan yang wajib dipertahankan

Jangan menghapus kontrol berikut ketika mengadaptasi workflow:

1. **Least privilege**: workflow hanya memiliki `contents: read`.
2. **Pinned actions**: gunakan commit SHA untuk action pihak ketiga, bukan tag bergerak saja.
3. **Strict host verification**: simpan fingerprint SSH pada secret `HOSTINGER_KNOWN_HOSTS`; jangan menjalankan `ssh-keyscan` di workflow.
4. **Dedicated SSH key**: gunakan key khusus deployment, bukan private key pribadi.
5. **No overlapping deployment**: gunakan `concurrency` dengan `cancel-in-progress: false`.
6. **Fail-fast shell**: setiap script Bash memakai `set -Eeuo pipefail`.
7. **Clean remote tree**: deployment berhenti jika clone di server memiliki perubahan tidak dikenal.
8. **Expected commit verification**: server hanya menerima commit SHA yang memicu workflow.
9. **Fast-forward only**: jangan melakukan merge commit atau reset paksa di server.
10. **Path verification**: validasi `realpath` dan file sentinel sebelum operasi penghapusan.
11. **Protected directory**: frontend tidak boleh membawa atau menghapus direktori backend publik seperti `api`.
12. **Staging before replacement**: ekstrak dan validasi arsip sebelum menyentuh production.
13. **Backup before replacement**: buat backup frontend lama sebelum membersihkan document root.
14. **Automatic frontend rollback**: pulihkan backup jika penyalinan atau smoke test gagal.
15. **Maintenance cleanup trap**: Laravel selalu dikembalikan ke mode aktif ketika proses backend berhenti.

## 4. Batas jaminan rollback

Rollback otomatis pada pola ini hanya melindungi frontend statis.

Deployment backend tidak otomatis membalikkan migration atau source code karena rollback database otomatis berisiko menghilangkan data. Karena itu:

- Gunakan migration yang backward-compatible.
- Tambahkan kolom sebelum mulai membacanya sebagai kebutuhan wajib.
- Jangan menghapus atau mengganti nama kolom dalam release yang sama dengan perubahan aplikasi.
- Pisahkan destructive migration ke release berikutnya setelah kode lama tidak lagi digunakan.
- Siapkan backup database dari Hostinger sebelum migration berisiko tinggi.

## 5. Parameter project yang harus diganti

Buat daftar nilai berikut sebelum menyalin workflow:

| Placeholder | Contoh generik | Keterangan |
|---|---|---|
| `<PROJECT_NAME>` | `company-profile` | Nama untuk workflow dan SSH key |
| `<GITHUB_OWNER/REPO>` | `acme/company-profile` | Repository target `repository_dispatch` |
| `<DEFAULT_BRANCH>` | `main` | Branch production |
| `<FRONTEND_DIR>` | `frontend` | Direktori frontend dalam repository |
| `<BACKEND_DIR>` | `backend` | Direktori Laravel dalam repository |
| `<STATIC_OUTPUT>` | `frontend/.output/public` | Hasil build statis |
| `<SITE_URL>` | `https://example.com` | URL frontend production |
| `<API_URL>` | `https://api.example.com` | URL backend production |
| `<SSH_HOST>` | `203.0.113.10` | IP atau hostname SSH Hostinger |
| `<SSH_PORT>` | `65002` | Port SSH Hostinger |
| `<SSH_USER>` | `u123456789` | User Hostinger |
| `<DOMAIN_ROOT>` | `/home/u123456789/domains/example.com` | Root domain di Hostinger |
| `<SOURCE_ROOT>` | `<DOMAIN_ROOT>/source` | Clone Git production |
| `<MAIN_PUBLIC>` | `<DOMAIN_ROOT>/public_html` | Document root frontend |
| `<PROTECTED_DIR>` | `api` | Direktori yang tidak boleh disentuh frontend |
| `<API_PUBLIC>` | `<MAIN_PUBLIC>/<PROTECTED_DIR>` | Public entry point Laravel |
| `<REQUIRED_BRAND_TEXT>` | `Example Clinic` | Teks sentinel untuk smoke test HTML |
| `<DISPATCH_EVENT>` | `content-published` | Nama event rebuild dari CMS |

Jangan menyimpan password database, token GitHub, private key, atau isi `.env` production di workflow maupun repository.

## 6. Persiapan Hostinger

### 6.1 Struktur direktori

Target akhir yang direkomendasikan:

```text
<DOMAIN_ROOT>/
├── source/                     # clone Git, tidak public
│   ├── backend/
│   └── frontend/
└── public_html/
    ├── api/                    # public Laravel
    │   └── index.php
    ├── index.html              # frontend statis
    ├── sitemap.xml
    └── assets/
```

Jangan meletakkan seluruh source Laravel di `public_html`. Hanya isi `backend/public` dan bootstrap `index.php` yang boleh berada pada document root API.

### 6.2 Clone repository di server

Server Hostinger harus dapat membaca repository secara non-interaktif:

```bash
cd "<DOMAIN_ROOT>"
git clone --branch <DEFAULT_BRANCH> git@github.com:<GITHUB_OWNER/REPO>.git source
cd source
git status --short
```

Gunakan GitHub deploy key read-only atau kredensial repository khusus untuk koneksi **Hostinger ke GitHub**.

Ini berbeda dengan key GitHub Actions yang digunakan untuk koneksi **GitHub Actions ke Hostinger**.

### 6.3 Siapkan Laravel production

```bash
cd "<SOURCE_ROOT>/<BACKEND_DIR>"
cp .env.production.example .env
php artisan key:generate

composer2 install \
  --no-dev \
  --prefer-dist \
  --optimize-autoloader \
  --no-interaction \
  --no-scripts

php artisan package:discover --ansi
php artisan migrate --force
php artisan storage:link
php artisan optimize
```

Sesuaikan `composer2` menjadi `composer` jika itu nama binary yang tersedia pada akun hosting.

### 6.4 Siapkan public entry point Laravel

Salin isi public Laravel ke document root API:

```bash
mkdir -p "<API_PUBLIC>"
cp -a "<SOURCE_ROOT>/<BACKEND_DIR>/public/." "<API_PUBLIC>/"
```

`<API_PUBLIC>/index.php` harus menunjuk ke `vendor/autoload.php` dan `bootstrap/app.php` di `<SOURCE_ROOT>/<BACKEND_DIR>`.

Pada project ini penyesuaian tersebut disimpan sebagai `backend/deploy/hostinger/index.php`. Buat file serupa pada project baru agar perubahan path dapat direproduksi saat deployment.

## 7. Konfigurasi dua arah SSH

### 7.1 GitHub Actions ke Hostinger

Buat key khusus dari komputer lokal:

```powershell
ssh-keygen -t ed25519 `
  -C "github-actions-<PROJECT_NAME>" `
  -f "$HOME\.ssh\<PROJECT_NAME>_hostinger_deploy" `
  -N ""
```

Tambahkan public key ke akun Hostinger:

```powershell
Get-Content "$HOME\.ssh\<PROJECT_NAME>_hostinger_deploy.pub"
```

Simpan private key sebagai GitHub Actions secret:

```powershell
Get-Content "$HOME\.ssh\<PROJECT_NAME>_hostinger_deploy" -Raw |
  gh secret set HOSTINGER_SSH_PRIVATE_KEY
```

Ambil fingerprint Hostinger dari jaringan tepercaya, verifikasi secara manual, lalu simpan sebagai secret:

```powershell
ssh-keyscan -p <SSH_PORT> <SSH_HOST> |
  gh secret set HOSTINGER_KNOWN_HOSTS
```

Secret yang wajib tersedia:

- `HOSTINGER_SSH_PRIVATE_KEY`
- `HOSTINGER_KNOWN_HOSTS`

Jangan menaruh `ssh-keyscan` di dalam workflow. Jika dilakukan saat workflow berjalan, penyerang jaringan dapat memberikan fingerprint palsu pada koneksi pertama.

### 7.2 Hostinger ke GitHub

Clone server membutuhkan kredensial Git sendiri agar perintah berikut tidak meminta input:

```bash
cd "<SOURCE_ROOT>"
git fetch origin <DEFAULT_BRANCH>
```

Gunakan deploy key read-only yang berbeda dari key deployment GitHub Actions.

## 8. Menyalin workflow

Salin workflow kanonis:

```text
.github/workflows/deploy-frontend-production.yml
```

Kemudian ganti seluruh nilai pada tabel placeholder. Jangan hanya mengganti domain; audit juga path build, file wajib, protected directory, perintah framework, dan smoke test.

### 8.1 Trigger workflow

Gunakan kombinasi berikut:

```yaml
on:
  push:
    branches:
      - main
    paths:
      - backend/**
      - frontend/**
      - .github/workflows/deploy-production.yml
  repository_dispatch:
    types: [content-published]
  schedule:
    - cron: '15 17 * * *'
  workflow_dispatch:
    inputs:
      reason:
        description: Reason for this production rebuild
        required: false
        default: manual
```

Fungsi masing-masing trigger:

- `push`: deploy perubahan source.
- `repository_dispatch`: rebuild setelah konten CMS berubah.
- `schedule`: rebuild konten berbasis tanggal, misalnya promo yang mulai atau berakhir tanpa ada commit baru.
- `workflow_dispatch`: recovery dan pengujian manual.

Cron GitHub Actions menggunakan UTC. Contoh `15 17 * * *` berjalan sekitar pukul `00:15` WIB pada hari berikutnya.

### 8.2 Permission dan concurrency

```yaml
permissions:
  contents: read

concurrency:
  group: production-deploy
  cancel-in-progress: false
```

`cancel-in-progress: false` penting karena membatalkan job ketika file production sedang diganti dapat meninggalkan deployment parsial.

### 8.3 Environment build

Simpan konfigurasi non-secret sebagai `env` dan secret sebagai GitHub secret:

```yaml
env:
  PUBLIC_SITE_URL: https://example.com
  PUBLIC_API_BASE: https://api.example.com/api
  SSH_HOST: 203.0.113.10
  SSH_PORT: '65002'
  SSH_USER: u123456789
```

Nama environment frontend harus mengikuti framework. Untuk Nuxt, contohnya `NUXT_PUBLIC_SITE_URL` dan `NUXT_PUBLIC_API_BASE`.

### 8.4 Quality gates sebelum deployment

Minimal jalankan:

```yaml
- run: npm ci
  working-directory: frontend

- run: npm test
  working-directory: frontend

- run: npm run typecheck
  working-directory: frontend

- run: npm run build
  working-directory: frontend
```

Hapus langkah yang memang tidak tersedia pada project baru, tetapi jangan menghapus build dan validasi output.

### 8.5 Validasi hasil build

Contoh Nuxt static output:

```bash
set -Eeuo pipefail

test -f frontend/.output/public/index.html
test -f frontend/.output/public/.htaccess
test -f frontend/.output/public/sitemap.xml
test ! -e frontend/.output/public/api
```

Sesuaikan output framework:

| Framework | Output umum |
|---|---|
| Nuxt generate | `.output/public` |
| Vite | `dist` |
| Astro static | `dist` |
| Next.js export | `out` |

Validasi harus gagal jika direktori protected ikut masuk ke release frontend.

### 8.6 Buat satu artefak immutable

```bash
tar -czf frontend-release.tar.gz -C frontend/.output/public .
sha256sum frontend-release.tar.gz
```

Build satu kali di GitHub Actions, lalu deploy artefak yang sama. Jangan menjalankan build ulang di Hostinger.

## 9. Pola deployment backend

Deploy backend hanya pada event `push` yang benar-benar mengubah backend atau workflow. Event CMS tidak boleh melakukan `git pull`, Composer, atau migration.

### 9.1 Deteksi perubahan backend

Workflow kanonis membandingkan `${{ github.event.before }}` dengan `${{ github.sha }}`. Jika commit awal tidak tersedia, anggap backend berubah agar lebih aman.

### 9.2 Verifikasi commit di server

Sebelum maintenance mode:

```bash
test "$(realpath "$DOMAIN_ROOT")" = "$DOMAIN_ROOT"
test "$(realpath "$SOURCE_ROOT")" = "$SOURCE_ROOT"
test "$(realpath "$MAIN_PUBLIC")" = "$MAIN_PUBLIC"
test -d "$BACKEND_ROOT"
test -f "$API_PUBLIC/index.php"

test -z "$(git status --porcelain --untracked-files=all)"
test "$(git branch --show-current)" = '<DEFAULT_BRANCH>'

git fetch origin <DEFAULT_BRANCH>

REMOTE_SHA="$(git rev-parse origin/<DEFAULT_BRANCH>)"
CURRENT_SHA="$(git rev-parse HEAD)"

test "$REMOTE_SHA" = "$EXPECTED_SHA"
git merge-base --is-ancestor "$CURRENT_SHA" "$EXPECTED_SHA"
```

Pemeriksaan `EXPECTED_SHA` mencegah job lama men-deploy commit yang berbeda apabila branch bergerak ketika workflow masih berjalan.

### 9.3 Maintenance trap

Gunakan trap agar Laravel tidak tertinggal dalam maintenance mode:

```bash
MAINTENANCE_ACTIVE=0

restore_availability() {
  status=$?
  trap - EXIT

  if [ "$MAINTENANCE_ACTIVE" -eq 1 ]; then
    set +e
    cd "$BACKEND_ROOT"
    php artisan up
  fi

  exit "$status"
}

trap restore_availability EXIT
```

### 9.4 Urutan deploy backend

```bash
cd "$BACKEND_ROOT"
MAINTENANCE_ACTIVE=1
php artisan down --retry=60

cd "$SOURCE_ROOT"
git merge --ff-only "$EXPECTED_SHA"
test "$(git rev-parse HEAD)" = "$EXPECTED_SHA"

cd "$BACKEND_ROOT"
composer2 install \
  --no-dev \
  --prefer-dist \
  --optimize-autoloader \
  --no-interaction \
  --no-scripts

php artisan package:discover --ansi
php artisan migrate --force

cp -a "$BACKEND_ROOT/public/." "$API_PUBLIC/"
cp "$BACKEND_ROOT/deploy/hostinger/index.php" "$API_PUBLIC/index.php"

php artisan optimize:clear
php artisan optimize
php artisan up
MAINTENANCE_ACTIVE=0
```

Tambahkan perintah framework/package hanya jika benar-benar digunakan, misalnya `php artisan filament:upgrade` untuk Filament.

### 9.5 Smoke test backend

Minimal periksa:

```bash
curl --fail --silent --show-error --output /dev/null "<API_URL>/"
curl --fail --silent --show-error --output /dev/null "<API_URL>/up"
```

Jika memiliki panel admin atau endpoint publik utama, periksa juga endpoint tersebut.

## 10. Pola deployment frontend dengan rollback

### 10.1 Upload release

```bash
REMOTE_ARCHIVE="frontend-release-${GITHUB_RUN_ID}.tar.gz"

scp \
  -i "$HOME/.ssh/hostinger_deploy" \
  -P "$SSH_PORT" \
  -o BatchMode=yes \
  -o IdentitiesOnly=yes \
  -o StrictHostKeyChecking=yes \
  frontend-release.tar.gz \
  "$SSH_USER@$SSH_HOST:~/$REMOTE_ARCHIVE"
```

### 10.2 Validasi archive sebelum menyentuh production

```bash
ARCHIVE_ENTRIES="$(tar -tzf "$ARCHIVE")"

grep -Fxq './index.html' <<< "$ARCHIVE_ENTRIES"
grep -Fxq './.htaccess' <<< "$ARCHIVE_ENTRIES"
grep -Fxq './sitemap.xml' <<< "$ARCHIVE_ENTRIES"

if grep -Eq '^\./api(/|$)' <<< "$ARCHIVE_ENTRIES"; then
  echo 'Frontend archive contains the protected API directory.' >&2
  exit 1
fi
```

Ganti daftar file wajib dan nama protected directory sesuai project.

### 10.3 Staging dan backup

```bash
RELEASES="$HOME/releases"
STAMP="$(date +%Y%m%d-%H%M%S)"
STAGING="$(mktemp -d "$HOME/frontend-staging.XXXXXX")"
BACKUP="$RELEASES/frontend-before-$STAMP.tar.gz"

mkdir -p "$RELEASES"
tar -xzf "$ARCHIVE" -C "$STAGING"

test -f "$STAGING/index.html"
test ! -e "$STAGING/api"

tar -czf "$BACKUP" \
  --exclude='./api' \
  -C "$MAIN_PUBLIC" .
```

### 10.4 Replace dengan protected directory

Jalankan hanya setelah `MAIN_PUBLIC` diverifikasi menggunakan `realpath` dan sentinel backend tersedia:

```bash
test "$(realpath "$MAIN_PUBLIC")" = "$MAIN_PUBLIC"
test -f "$MAIN_PUBLIC/api/index.php"

find "$MAIN_PUBLIC" -mindepth 1 -maxdepth 1 ! -name api \
  -exec rm -rf -- {} +

cp -a "$STAGING/." "$MAIN_PUBLIC/"

test -f "$MAIN_PUBLIC/index.html"
test -f "$MAIN_PUBLIC/api/index.php"
```

Jangan mengubah perintah penghapusan menjadi wildcard seperti `rm -rf "$MAIN_PUBLIC"/*`; wildcard dapat melewatkan dotfiles dan lebih mudah menghancurkan protected directory.

### 10.5 Rollback trap

```bash
DEPLOY_STARTED=0

rollback_and_cleanup() {
  status=$?
  trap - EXIT

  if [ "$status" -ne 0 ] && [ "$DEPLOY_STARTED" -eq 1 ]; then
    set +e
    find "$MAIN_PUBLIC" -mindepth 1 -maxdepth 1 ! -name api \
      -exec rm -rf -- {} +
    tar -xzf "$BACKUP" -C "$MAIN_PUBLIC"
  fi

  rm -rf -- "$STAGING"
  rm -f -- "$ARCHIVE"
  exit "$status"
}

trap rollback_and_cleanup EXIT
```

Set `DEPLOY_STARTED=1` tepat sebelum production mulai dibersihkan, dan ubah kembali menjadi `0` hanya setelah seluruh smoke test sukses.

## 11. Smoke test frontend

Smoke test sebaiknya berjalan setelah file production diganti dan masih berada di dalam rollback trap.

Minimal:

```bash
curl --fail --silent --show-error --location --output /dev/null \
  "<SITE_URL>/"

curl --fail --silent --show-error --location --output /dev/null \
  "<SITE_URL>/sitemap.xml"

curl --fail --silent --show-error --location --output /dev/null \
  "<API_URL>/"
```

Tambahkan pemeriksaan yang mewakili kontrak production:

- Redirect HTTP ke HTTPS.
- Redirect `www` ke domain kanonis atau sebaliknya.
- Redirect `/index.html` ke `/` jika digunakan.
- Sitemap menghasilkan HTTP `200` dan memiliki URL.
- Setiap URL sitemap utama menghasilkan HTTP `200`.
- Respons untuk user-agent Googlebot memiliki `<h1>` dan nama brand.
- Direktori backend publik tetap tersedia setelah frontend diganti.

Jangan memasukkan halaman yang memang memerlukan login ke smoke test tanpa strategi autentikasi yang aman.

## 12. Trigger rebuild dari Laravel CMS

Bagian ini opsional. Gunakan jika frontend statis harus berubah setelah admin mempublikasikan konten.

### 12.1 Environment production

```dotenv
FRONTEND_DEPLOY_TRIGGER_ENABLED=false
GITHUB_FRONTEND_DEPLOY_TOKEN=
GITHUB_FRONTEND_DEPLOY_REPOSITORY=<GITHUB_OWNER/REPO>
GITHUB_FRONTEND_DEPLOY_EVENT=content-published
GITHUB_API_VERSION=<SUPPORTED_GITHUB_API_VERSION>
```

Aktifkan trigger hanya setelah workflow manual berhasil.

Token harus berupa fine-grained personal access token dengan:

- Akses hanya ke repository target.
- Permission minimum yang dapat mengirim repository dispatch.
- Masa berlaku terbatas.
- Penyimpanan hanya pada `.env` production, bukan repository.

### 12.2 Laravel service configuration

```php
'frontend_deploy' => [
    'enabled' => env('FRONTEND_DEPLOY_TRIGGER_ENABLED', false),
    'github_token' => env('GITHUB_FRONTEND_DEPLOY_TOKEN'),
    'repository' => env('GITHUB_FRONTEND_DEPLOY_REPOSITORY'),
    'event_type' => env('GITHUB_FRONTEND_DEPLOY_EVENT', 'content-published'),
    'api_version' => env('GITHUB_API_VERSION'),
],
```

### 12.3 Dispatch service

Karakteristik wajib:

- Keluar tanpa request jika fitur dinonaktifkan.
- Validasi token, repository, event, dan API version.
- Gunakan connect timeout dan total timeout pendek.
- Gunakan retry terbatas.
- Log kegagalan tanpa mencetak token.
- Jangan menggagalkan penyimpanan konten jika GitHub sedang bermasalah.

Request inti:

```php
Http::acceptJson()
    ->withToken($token)
    ->withHeaders(['X-GitHub-Api-Version' => $apiVersion])
    ->connectTimeout(3)
    ->timeout(8)
    ->retry(2, 250, throw: false)
    ->post("https://api.github.com/repos/{$repository}/dispatches", [
        'event_type' => $eventType,
        'client_payload' => [
            'source' => $source,
            'action' => $action,
            'record_id' => (string) $recordId,
            'triggered_at' => now()->toIso8601String(),
        ],
    ]);
```

### 12.4 Observer setelah commit

Observer harus mengimplementasikan `ShouldHandleEventsAfterCommit`:

```php
final class ArticleObserver implements ShouldHandleEventsAfterCommit
{
    public function __construct(
        private FrontendDeployTrigger $frontendDeployTrigger,
    ) {}

    public function updated(Article $article): void
    {
        if (! $article->is_published && ! $article->wasChanged('is_published')) {
            return;
        }

        $this->frontendDeployTrigger->dispatch(
            'article',
            'updated',
            $article->getKey(),
        );
    }
}
```

Sesuaikan aturan trigger dengan visibilitas publik domain:

- Draft baru tidak perlu rebuild.
- Publish pertama perlu rebuild.
- Edit konten publik perlu rebuild.
- Unpublish perlu rebuild agar halaman lama hilang.
- Hapus konten publik perlu rebuild.
- Perubahan internal yang tidak memengaruhi frontend tidak perlu rebuild.

Jika banyak record berubah dalam satu operasi, pertimbangkan debounce atau queue agar tidak mengirim banyak workflow berurutan.

## 13. Urutan aktivasi project baru

Jangan mengaktifkan seluruh otomatisasi sekaligus.

1. Siapkan domain, SSL, PHP, database, dan struktur direktori.
2. Pastikan clone server dapat `git fetch` tanpa interaksi.
3. Deploy backend secara manual dan periksa API.
4. Tambahkan public entry point Laravel.
5. Tambahkan SSH key GitHub Actions dan known hosts secrets.
6. Salin workflow dengan trigger `workflow_dispatch` terlebih dahulu.
7. Jalankan workflow manual.
8. Verifikasi backup, protected directory, frontend, API, sitemap, dan rollback.
9. Aktifkan trigger `push`.
10. Tambahkan `repository_dispatch` dan Laravel dispatch service.
11. Uji draft, publish, edit, unpublish, dan delete dari CMS.
12. Aktifkan scheduled rebuild jika ada konten berbasis tanggal.

## 14. Pengujian rollback wajib

Jangan menganggap rollback bekerja hanya karena script terlihat benar. Uji sekali pada project baru:

1. Deploy versi valid dan simpan checksum atau teks sentinel homepage.
2. Buat branch pengujian workflow atau sementara tambahkan smoke test yang sengaja gagal.
3. Jalankan deployment manual.
4. Pastikan job gagal setelah replacement dimulai.
5. Pastikan homepage kembali ke versi sebelumnya.
6. Pastikan `<PROTECTED_DIR>/index.php` tetap ada.
7. Pastikan arsip upload dan staging dibersihkan.
8. Kembalikan smoke test ke kondisi normal.

Jangan melakukan uji kegagalan pertama pada jam sibuk.

## 15. Operasional harian

### Jalankan deployment manual

```powershell
gh workflow run deploy-production.yml -f reason=manual-deploy
```

### Pantau workflow

```powershell
gh run list --workflow deploy-production.yml --limit 5
gh run watch --exit-status
```

### Periksa server

```bash
cd "<SOURCE_ROOT>"
git status --short
git rev-parse HEAD

ls -lah "$HOME/releases"
```

### Retensi backup

Workflow membuat backup tetapi tidak seharusnya menyimpan semuanya tanpa batas. Terapkan retensi setelah pola deploy stabil, misalnya menyimpan 10-20 backup terakhir:

```bash
cd "$HOME/releases"
ls -1t frontend-before-*.tar.gz | tail -n +21 | xargs -r rm --
```

Jalankan hanya pada direktori release yang sudah diverifikasi.

## 16. Troubleshooting

### `Host key verification failed`

- Pastikan `HOSTINGER_KNOWN_HOSTS` memakai hostname/IP dan port yang sama dengan workflow.
- Verifikasi perubahan fingerprint melalui hPanel atau kanal Hostinger yang tepercaya sebelum memperbarui secret.

### `Permission denied (publickey)`

- Pastikan public key GitHub Actions terpasang pada akun SSH Hostinger yang benar.
- Pastikan private key secret tidak kehilangan newline.
- Pastikan workflow memakai `IdentitiesOnly=yes` dan key yang tepat.

### Remote working tree tidak bersih

- Jangan langsung menjalankan `git reset --hard`.
- Login ke server, periksa `git status --short`, lalu tentukan pemilik dan tujuan perubahan tersebut.
- Pindahkan konfigurasi runtime ke file ignored seperti `.env`.

### Expected SHA berbeda

- Branch bergerak ketika workflow lama masih berjalan.
- Biarkan job lama gagal; job berikutnya akan membawa commit terbaru.
- Jangan menghapus pemeriksaan SHA untuk "memperbaiki" masalah ini.

### Build gagal mengambil API

- Pastikan API production tersedia dari runner GitHub.
- Pastikan CORS tidak relevan untuk request server-side build, tetapi TLS dan endpoint tetap valid.
- Jika konten dinamis wajib untuk SEO, build harus gagal daripada menerbitkan halaman kosong.

### Frontend berhasil disalin tetapi smoke test gagal

- Rollback harus berjalan otomatis.
- Periksa log smoke test dan backup terbaru di `$HOME/releases`.
- Jangan menjalankan deploy ulang sebelum penyebab kegagalan dipahami.

### Laravel tertinggal dalam maintenance mode

```bash
cd "<SOURCE_ROOT>/<BACKEND_DIR>"
php artisan up
```

Jika ini terjadi meskipun trap tersedia, periksa apakah shell dibunuh paksa atau akun hosting menghentikan proses.

## 17. Checklist reusable

### Repository

- [ ] Frontend memiliki lockfile.
- [ ] Build menghasilkan direktori statis yang konsisten.
- [ ] File wajib output sudah ditentukan.
- [ ] Backend memiliki `.env.production.example` tanpa secret.
- [ ] Public entry point Laravel untuk path Hostinger tersedia.
- [ ] Test dan type-check dapat berjalan non-interaktif.

### GitHub

- [ ] `HOSTINGER_SSH_PRIVATE_KEY` tersedia.
- [ ] `HOSTINGER_KNOWN_HOSTS` telah diverifikasi.
- [ ] Workflow memakai permission minimum.
- [ ] Third-party actions dipin ke commit SHA.
- [ ] Concurrency tidak membatalkan deployment aktif.
- [ ] Manual dispatch berhasil sebelum push trigger diaktifkan.

### Hostinger

- [ ] Source berada di luar document root.
- [ ] Clone server dapat fetch Git tanpa prompt.
- [ ] Path server telah diverifikasi dengan `realpath`.
- [ ] Protected directory memiliki sentinel file.
- [ ] PHP, Composer, extension, database, dan storage siap.
- [ ] Direktori backup memiliki ruang yang cukup.

### Deployment

- [ ] Archive divalidasi sebelum extract.
- [ ] Protected directory dikecualikan dari archive dan penghapusan.
- [ ] Backup dibuat sebelum replacement.
- [ ] Rollback trap pernah diuji dengan kegagalan sengaja.
- [ ] Smoke test memeriksa frontend, API, sitemap, redirect, dan HTML utama.
- [ ] Migration backend bersifat backward-compatible.

### CMS trigger

- [ ] Trigger dinonaktifkan secara default.
- [ ] Token hanya mengakses satu repository.
- [ ] Observer berjalan setelah commit database.
- [ ] Draft tidak memicu build.
- [ ] Publish, unpublish, dan delete publik memicu build.
- [ ] Kegagalan GitHub tidak membatalkan transaksi CMS.

## 18. Artefak yang dibawa ke project berikutnya

Minimal bawa dan adaptasi:

```text
.github/workflows/deploy-frontend-production.yml
HOSTINGER_GITHUB_ACTIONS_PLAYBOOK.md
backend/deploy/hostinger/index.php
```

Jika project memiliki CMS-triggered rebuild, bawa juga pola berikut:

```text
backend/app/Services/FrontendDeployTrigger.php
backend/app/Observers/*Observer.php
backend/config/services.php
backend/tests/Feature/FrontendDeployTriggerTest.php
```

Jangan menyalin file `.env`, private key, GitHub token, database credential, domain, IP, username, atau path akun hosting dari project lama.

