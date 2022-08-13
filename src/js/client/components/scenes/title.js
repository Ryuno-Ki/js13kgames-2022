export function titleSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);
	element.innerHTML = 'Title scene';
	return element;
}
