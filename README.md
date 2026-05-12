# Jendral Deluxe (Capacitor-ready)

Benar: alur terbaik memang **install + init Capacitor dulu**, lalu pecah file HTML lama ke modul kecil.

## Urutan kerja yang direkomendasikan
1. `bash ./scripts/setup-capacitor.sh`
   - install dependency
   - `cap add android`
   - unduh Three.js lokal
   - `cap sync android`
2. Setelah platform native siap, lanjut pecah logic game dari file HTML lama ke folder modular `www/assets/js/*`.

## Struktur modular yang sudah disiapkan
- `www/index.html` : entry web
- `www/assets/templates/app-shell.js` : markup shell UI
- `www/assets/js/bootstrap.js` : bootstrap aplikasi
- `www/assets/js/controllers/app-controller.js` : kontrol event UI
- `www/assets/js/engine/scene-engine.js` : inisialisasi Three.js
- `www/assets/js/audio/sfx.js` : audio
- `www/assets/js/core/state.js` : state
- `www/assets/js/utils/dom.js` : util DOM

## Offline Three.js
- Lokasi target: `www/vendor/three/three.min.js`
- Download: `bash ./scripts/download-three.sh r128`
- Validasi offline asset: `bash ./scripts/check-offline-assets.sh`

## Menjalankan manual (tanpa script setup)
1. `npm install`
2. `npx cap add android`
3. `bash ./scripts/download-three.sh r128`
4. `npx cap sync android`
5. `npx cap open android`

## Catatan penting
Di environment CI/sandbox tertentu, akses ke `registry.npmjs.org` atau CDN bisa diblokir. Jika itu terjadi,
jalankan langkah install/download di mesin lokal Anda lalu commit hasilnya.
