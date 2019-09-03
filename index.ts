// STYLES
import './style.css';

// DEPENDENCIES
import 'phaser';

// PATCHES
import { preload_patch } from './src/PreloadPatch';

// RUN MAIN
import { game } from './src/PhaserExample';

game.config.sceneConfig.preload = preload_patch;

window.focus();