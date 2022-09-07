/**
 * Component to render game over scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function gameOverSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'game-over-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = 'Game over scene';
  }

	return element;
}
