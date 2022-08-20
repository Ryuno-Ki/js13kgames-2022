/**
 * Component to render win scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function winSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'win-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = 'Win scene';
  }

	return element;
}
