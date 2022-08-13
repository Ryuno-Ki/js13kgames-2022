export function aboutSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);
	element.innerHTML = 'About scene';
	return element;
}
