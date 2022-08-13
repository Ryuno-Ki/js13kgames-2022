import { aboutSceneComponent } from './components/scenes/about.js';
import { gameOverSceneComponent } from './components/scenes/game-over.js';
import { newGameSceneComponent } from './components/scenes/new-game.js';
import { settingsSceneComponent } from './components/scenes/settings.js';
import { titleSceneComponent } from './components/scenes/title.js';
import { winSceneComponent } from './components/scenes/win.js';
import { wrapperComponent } from './components/wrapper.js';

import { onChange } from './on-change';
import { onClick } from './on-click';
import { onKeydown } from './on-keydown';

import { add } from './registry.js';
import { step } from './render.js';

export function init () {
  add('about-scene', aboutSceneComponent);
  add('game-over-scene', gameOverSceneComponent);
  add('new-game-scene', newGameSceneComponent);
  add('settings-scene', settingsSceneComponent);
  add('title-scene', titleSceneComponent);
  add('win-scene', winSceneComponent);
	add('wrapper', wrapperComponent);

  step();

  document.body.addEventListener('change', onChange);
  document.body.addEventListener('click', onClick);
  document.body.addEventListener('keydown', onKeydown);
}
