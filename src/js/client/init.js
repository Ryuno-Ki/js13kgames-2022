import { aboutSceneComponent } from './components/scenes/about.js';
import { gameOverSceneComponent } from './components/scenes/game-over.js';
import { newGameSceneComponent } from './components/scenes/new-game.js';
import { settingsSceneComponent } from './components/scenes/settings.js';
import { titleSceneComponent } from './components/scenes/title.js';
import { winSceneComponent } from './components/scenes/win.js';
import { wrapperComponent } from './components/wrapper.js';

import { enemiesComponent } from './components/enemies.js';
import { levelComponent } from './components/level.js';
import { pathwayComponent } from './components/pathway.js';
import { towersComponent } from './components/towers.js';

import { onChange } from './on-change';
import { onClick } from './on-click';
import { onKeydown } from './on-keydown';

import { add } from './registry.js';
import { step } from './render.js';

export function init () {
  add('about-scene', aboutSceneComponent);
  add('enemies', enemiesComponent);
  add('game-over-scene', gameOverSceneComponent);
  add('level', levelComponent);
  add('pathway', pathwayComponent);
  add('new-game-scene', newGameSceneComponent);
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
