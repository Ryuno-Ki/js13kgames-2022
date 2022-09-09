/**
 * Component to render win scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function winSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'win-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <p>You won!</p>
      <div data-component="mastodon-share"></div>
      <nav class="actions">
        <button type="button" data-navigate="title-scene">
          Play another time
        </button>
      </nav>
    `;
  }

  return element;
}
