export function aboutSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'about-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = `
      <h2>About</h2>
      <nav class="actions">
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

	return element;
}
