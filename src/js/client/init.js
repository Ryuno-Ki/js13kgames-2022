import { aboutSceneComponent } from './components/scenes/about.js';
import { gameOverSceneComponent } from './components/scenes/game-over.js';
import { levelSceneComponent } from './components/scenes/level.js';
import { settingsSceneComponent } from './components/scenes/settings.js';
import { titleSceneComponent } from './components/scenes/title.js';
import { winSceneComponent } from './components/scenes/win.js';

import { canvasComponent } from './components/canvas.js';
import { enemiesComponent } from './components/enemies.js';
import { formComponent } from './components/form.js';
import { levelComponent } from './components/level.js';
import { pathwayComponent } from './components/pathway.js';
import { towersComponent } from './components/towers.js';
import { wrapperComponent } from './components/wrapper.js';

import { onChange } from './on-change';
import { onClick } from './on-click';
import { onKeydown } from './on-keydown';

import { add } from './registry.js';
import { step } from './render.js';

export function init () {
  add('about-scene', aboutSceneComponent);
  add('canvas', canvasComponent);
  add('enemies', enemiesComponent);
  add('form', formComponent);
  add('game-over-scene', gameOverSceneComponent);
  add('level', levelComponent);
  add('level-scene', levelSceneComponent);
  add('pathway', pathwayComponent);
  add('settings-scene', settingsSceneComponent);
  add('title-scene', titleSceneComponent);
  add('towers', towersComponent);
  add('win-scene', winSceneComponent);
  add('wrapper', wrapperComponent);

  step();

  document.body.addEventListener('change', onChange);
  document.body.addEventListener('click', onClick);
  document.body.addEventListener('keydown', onKeydown);
}
