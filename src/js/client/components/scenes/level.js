export function newGameSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'new-game-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <section data-component="form"></section>
      <section data-component="canvas"></section>
    `;
  }

	return element;
}
