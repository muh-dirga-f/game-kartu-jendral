import { state } from '../core/state.js';
import { initAudio, sfx } from '../audio/sfx.js';
import { createGameScene } from '../engine/scene-engine.js';
import { qs } from '../utils/dom.js';

export function initApp() {
  const ui = {
    startScreen: qs('#start-screen'),
    startBtn: qs('#start-game-btn'),
    uiPanel: qs('#ui'),
    status: qs('#status'),
    rulesBtn: qs('#rules-btn'),
    rulesModal: qs('#rules-modal'),
    closeRulesBtn: qs('#close-rules-btn')
  };

  ui.rulesBtn.addEventListener('click', () => ui.rulesModal.style.display = 'flex');
  ui.closeRulesBtn.addEventListener('click', () => ui.rulesModal.style.display = 'none');

  ui.startBtn.addEventListener('click', () => {
    initAudio();
    sfx.select();
    ui.startScreen.classList.add('hidden');
    ui.uiPanel.classList.remove('hidden');

    if (!state.sceneReady) {
      createGameScene();
      state.sceneReady = true;
    }

    state.started = true;
    ui.status.textContent = 'Permainan dimulai';
  });
}
