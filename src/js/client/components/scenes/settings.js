export function settingsSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);
	element.innerHTML = 'Settings scene';
	return element;
}
