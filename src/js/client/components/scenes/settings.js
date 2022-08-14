export function settingsSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'settings-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <h2>Settings</h2>
      <nav class="actions">
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

	return element;
}
