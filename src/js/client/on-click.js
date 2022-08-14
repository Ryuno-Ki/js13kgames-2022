import { navigateToScene } from './state/actions/navigate-to-scene.js';
import store from './state/store.js';

export function onClick (event) {
	const { target } = event;

  if (target && target.dataset) {
    if (target.dataset.navigate) {
      store.dispatch(navigateToScene(target.dataset.navigate));
    }
  }
}
