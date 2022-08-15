import { addEnemy } from './state/actions/add-enemy.js';
import { addPathwayCoordinate } from './state/actions/add-pathway-coordinate.js';
import { navigateToScene } from './state/actions/navigate-to-scene.js';
import store from './state/store.js';

export function onClick (event) {
	const { target } = event;

  if (target && target.dataset) {
    if (target.dataset.addEnemy) {
      return store.dispatch(addEnemy(target.dataset.addEnemy));
    }

    if (target.dataset.navigate) {
      return store.dispatch(navigateToScene(target.dataset.navigate));
    }

    maybeHandleDraftLevel(event);
  }
}

function maybeHandleDraftLevel (event) {
  const el = document.querySelector('[data-component="level-editor-scene"] [data-component="canvas"] svg');

  if (!el) {
    return;
  }

  const { pageX, pageY } = event;
  const boundingRect = el.getBoundingClientRect();

  if (isWithinBoundaries(event, boundingRect)) {
    const { left, top } = boundingRect;
    store.dispatch(addPathwayCoordinate({ pageX, pageY }, { left, top }));
  }
}

function isWithinBoundaries (event, boundingRect) {
  const { pageX, pageY } = event;
  const { bottom, left, right, top } = boundingRect;

  if (pageY < top) {
    return false;
  }

  if (pageY > bottom) {
    return false;
  }

  if (pageX < left) {
    return false;
  }

  if (pageX > right) {
    return false;
  }

  return true;
}
