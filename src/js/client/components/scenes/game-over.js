export function gameOverSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'game-over-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = 'Game over scene';
  }

	return element;
}
