import { renderAppShell } from '../templates/app-shell.js';
import { initApp } from './controllers/app-controller.js';

document.getElementById('app-root').innerHTML = renderAppShell();
initApp();
