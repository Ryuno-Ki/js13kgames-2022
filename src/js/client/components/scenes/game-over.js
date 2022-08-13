export function gameOverSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);
	element.innerHTML = 'Game over scene';
	return element;
}
