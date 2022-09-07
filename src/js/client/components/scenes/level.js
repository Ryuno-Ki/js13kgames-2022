/**
 * Component to render level scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function levelSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'level-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <section data-component="form"></section>
      <section data-component="canvas"></section>
    `;
  }

	return element;
}
