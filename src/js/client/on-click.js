import { addEnemy } from './state/actions/add-enemy.js';
import { navigateToScene } from './state/actions/navigate-to-scene.js';
import store from './state/store.js';

export function onClick (event) {
	const { target } = event;

  if (target && target.dataset) {
    if (target.dataset.addEnemy) {
      store.dispatch(addEnemy(target.dataset.addEnemy));
    }

    if (target.dataset.navigate) {
      store.dispatch(navigateToScene(target.dataset.navigate));
    }
  }
}
