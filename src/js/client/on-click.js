import { addEntity } from './state/actions/add-entity.js';
import { addCoordinate } from './state/actions/add-pathway-coordinate.js';
import { navigateToScene } from './state/actions/navigate-to-scene.js';
import store from './state/store.js';

/**
 * Event handler for click events
 *
 * @argument {MouseEvent} event
 */
export function onClick (event) {
  const target = /** @type {HTMLElement} */(event.target);

  if (target && target.dataset) {
    if (target.dataset.addEntity) {
      return store.dispatch(
        addEntity(target.dataset.addEntity, target.dataset.index || '')
      );
    }

    if (target.dataset.navigate) {
      return store.dispatch(
        navigateToScene(
          /** @type {import('./components/wrapper.js').Scene} */(target.dataset.navigate)
        )
      );
    }

    maybeHandleDraftLevel(event);
  }
}

/**
 * Helper function to handle click events on draft level scene
 *
 * @private
 * @argument {MouseEvent} event
 */
function maybeHandleDraftLevel (event) {
  const el = document.querySelector('[data-component="level-editor-scene"] [data-component="canvas"] svg');

  if (!el) {
    return;
  }

  const { pageX, pageY } = event;
  const boundingRect = el.getBoundingClientRect();

  if (isWithinBoundaries(event, boundingRect)) {
    const { left, top } = boundingRect;
    store.dispatch(addCoordinate({ pageX, pageY }, { left, top }));
  }
}

/**
 * Helper function to check whether a click happened within a rectangle
 *
 * @private
 * @argument {MouseEvent} event
 * @argument {DOMRect} boundingRect
 * @returns {boolean}
 */
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
