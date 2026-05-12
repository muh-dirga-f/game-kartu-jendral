#!/usr/bin/env bash
set -euo pipefail

TARGET="www/vendor/three/three.min.js"
if [[ ! -s "$TARGET" ]]; then
  echo "ERROR: $TARGET belum ada atau kosong"
  exit 1
fi

if rg -n "Placeholder three.min.js" "$TARGET" >/dev/null 2>&1; then
  echo "ERROR: $TARGET masih placeholder"
  exit 1
fi

echo "OK: Three.js lokal siap dipakai offline"
