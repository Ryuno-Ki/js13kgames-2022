import { applyToDOM } from './apply-to-dom.js';
import { APP_SELECTOR } from './constants.js';
import * as componentRegistry from './registry.js';
import store from './state/store.js';

export function step () {
  const main = document.querySelector(APP_SELECTOR);

  if (!main) {
    return console.error('Could not find #app');
  }

	const newMain = componentRegistry.render(main, store.getState());
  applyToDOM(document.body, main, newMain);
	console.log('DOM', newMain.outerHTML);
	requestAnimationFrame(step);
}
