import { applyToDOM } from './apply-to-dom.js';
import { APP_SELECTOR } from './constants.js';
import * as componentRegistry from './registry.js';
import { checkCollisions } from './state/actions/check-collisions.js';
import { checkLooseCondition } from './state/actions/check-loose-condition.js';
import { checkWinCondition } from './state/actions/check-win-condition.js';
import { updatePositions } from './state/actions/update-positions.js';
import { updateRadii } from './state/actions/update-radii.js';
import store from './state/store.js';

/**
 * A single step that calls itself via requestAnimationFrame
 */
export async function step () {
  const main = /** @type {HTMLElement} */(document.querySelector(APP_SELECTOR));

  if (!main) {
    return console.error('Could not find #app');
  }

  const newMain = componentRegistry.render(main, store.getState());
  applyToDOM(document.body, main, newMain);

  await store.dispatch(updatePositions());
  await store.dispatch(updateRadii());
	await store.dispatch(checkCollisions());
  await store.dispatch(checkLooseCondition());
  await store.dispatch(checkWinCondition());

  requestAnimationFrame(step);
}
