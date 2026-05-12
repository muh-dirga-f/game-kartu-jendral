#!/usr/bin/env bash
set -euo pipefail
VERSION="${1:-r128}"
URL="https://cdnjs.cloudflare.com/ajax/libs/three.js/${VERSION}/three.min.js"
OUT="www/vendor/three/three.min.js"
echo "Downloading ${URL}"
curl -fL "$URL" -o "$OUT"
echo "Saved to $OUT"
