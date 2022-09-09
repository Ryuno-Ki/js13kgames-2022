/**
 * Component to share on Mastodon
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function mastodonShareComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  element.innerHTML = `
    <label for="mastodon-instance">
      Configure your Mastodon instance
    </label>
    <input id="mastodon-instance" type="url" value="${state.mastodon}" />
    <p>(Click away to confirm)</p>

    <button type="button" data-share="I played Life Death Tower Defense">
      Share on Mastodon
    </button>
    <p>Login required. This will open a popup.</p>
  `;

  return element;
}
