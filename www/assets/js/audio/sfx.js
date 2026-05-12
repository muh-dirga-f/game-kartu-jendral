const CustomAudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

export function initAudio(){ if(!audioCtx) audioCtx = new CustomAudioContext(); }

function playTone(freq, type, duration, vol=0.1){
  if(!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(); osc.stop(audioCtx.currentTime + duration);
}

export const sfx = { select:()=>{playTone(800,'sine',0.05);}, error:()=>{playTone(180,'sawtooth',0.12);} };
