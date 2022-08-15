export function levelSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

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
