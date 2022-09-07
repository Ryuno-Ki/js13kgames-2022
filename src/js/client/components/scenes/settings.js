/**
 * Component to render settings scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function settingsSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'settings-scene') {
    element.innerHTML = '';
  } else {
    const { prefersReducedMotion } = state.settings;

    element.innerHTML = `
      <h2>Settings</h2>
      <fieldset>
        <legend>
          Shall animations be shown?
        </legend>
        <input
          id="prefers-reduced-motion-no"
          type="radio"
          name="prefers-reduced-motion"
          value="no"
          ${prefersReducedMotion === false ? 'checked="checked"' : ''}
        />
        <label for="prefers-reduced-motion-no">
          Yes
        </label>
        <input
          id="prefers-reduced-motion-yes"
          type="radio"
          name="prefers-reduced-motion"
          value="yes"
          ${prefersReducedMotion === true ? 'checked="checked"' : ''}
        />
        <label for="prefers-reduced-motion-yes">
          No
        </label>
      </fieldset>
      <nav class="actions">
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

	return element;
}
