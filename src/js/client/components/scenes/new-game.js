export function newGameSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);
	element.innerHTML = 'New game scene';
	return element;
}
