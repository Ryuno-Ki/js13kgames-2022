/**
 * Component to render the about scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function aboutSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'about-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = `
      <h2>About</h2>
      <p>This game is released under AGPL v3 or newer license.</p>
      <p>
        You can find the source code and more at
        <a href="https://jaenis.ch/hobbies/coding/repos/ryuno-ki/js13kgames-2022">
          my Gitea instance
        </a>.
      </p>
      <nav class="actions">
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

	return element;
}
