#!/usr/bin/env bash
set -euo pipefail

echo '[1/4] Installing dependencies'
npm install

echo '[2/4] Initializing Android platform'
npx cap add android || true

echo '[3/4] Downloading local Three.js'
bash ./scripts/download-three.sh r128

echo '[4/4] Syncing web assets to native platform'
npx cap sync android

echo 'Setup selesai. Lanjut buka Android Studio dengan: npx cap open android'
