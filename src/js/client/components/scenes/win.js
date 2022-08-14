export function winSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'win-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = 'Win scene';
  }

	return element;
}
