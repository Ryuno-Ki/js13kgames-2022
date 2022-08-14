export function newGameSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'new-game-scene') {
    element.innerHTML = '';
  } else {
	  element.innerHTML = 'New game scene';
  }

	return element;
}
