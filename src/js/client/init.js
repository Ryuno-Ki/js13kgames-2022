import { aboutSceneComponent } from './components/scenes/about.js';
import { gameOverSceneComponent } from './components/scenes/game-over.js';
import { levelSceneComponent } from './components/scenes/level.js';
import { levelEditorSceneComponent } from './components/scenes/level-editor.js';
import { newGameSceneComponent } from './components/scenes/new-game.js';
import { settingsSceneComponent } from './components/scenes/settings.js';
import { titleSceneComponent } from './components/scenes/title.js';
import { winSceneComponent } from './components/scenes/win.js';

import { attackComponent } from './components/attack.js';
import { canvasComponent } from './components/canvas.js';
import { defendComponent } from './components/defend.js';
import { enemiesComponent } from './components/enemies.js';
import { formComponent } from './components/form.js';
import { levelComponent } from './components/level.js';
import { mastodonShareComponent } from './components/mastodon-share.js';
import { pathwayComponent } from './components/pathway.js';
import { towersComponent } from './components/towers.js';
import { wrapperComponent } from './components/wrapper.js';

import { onChange } from './on-change.js';
import { onClick } from './on-click.js';
// import { onKeydown } from './on-keydown.js';

import { add } from './registry.js';
import { step } from './render.js';

export function init () {
  add('about-scene', aboutSceneComponent);
  add('attack', attackComponent);
  add('canvas', canvasComponent);
  add('defend', defendComponent);
  add('enemies', enemiesComponent);
  add('form', formComponent);
  add('game-over-scene', gameOverSceneComponent);
  add('level', levelComponent);
  add('level-editor-scene', levelEditorSceneComponent);
  add('level-scene', levelSceneComponent);
  add('mastodon-share', mastodonShareComponent);
  add('new-game-scene', newGameSceneComponent);
  add('pathway', pathwayComponent);
  add('settings-scene', settingsSceneComponent);
  add('title-scene', titleSceneComponent);
  add('towers', towersComponent);
  add('win-scene', winSceneComponent);
  add('wrapper', wrapperComponent);

  step();

  document.body.addEventListener('change', onChange);
  document.body.addEventListener('click', onClick);
  //document.body.addEventListener('keydown', onKeydown);
}
