export function renderAppShell() {
  return `
<div id="start-screen" class="screen">
  <h1>♠ JENDRAL DELUXE</h1>
  <p>Siapkan Diri Anda, Jendral.</p>
  <button id="start-game-btn" class="btn btn-primary">MASUK KE KASINO</button>
  <button id="rules-btn" class="btn btn-info">📖 ATURAN MAIN</button>
</div>

<div id="rules-modal" class="modal-overlay">
  <div class="panel modal-content">
    <h2>📖 Aturan Main Jendral</h2>
    <p>Tujuan: habiskan semua kartu di tangan.</p>
    <button id="close-rules-btn" class="btn btn-secondary">Tutup</button>
  </div>
</div>

<div id="ui" class="hidden">
  <section id="top-left" class="panel">
    <h2>♠ JENDRAL DELUXE</h2>
    <div id="status">Menghubungkan Matrix...</div>
    <div id="stats"></div>
  </section>
  <section id="log-panel" class="panel"></section>
  <section id="tip"></section>
  <section id="controls">
    <button id="playBtn" class="btn btn-primary">MAIN</button>
    <button id="passBtn" class="btn btn-secondary">PASS</button>
    <button id="sortBtn" class="btn btn-info">SUSUN</button>
  </section>
  <section id="hand"></section>
</div>`;
}
