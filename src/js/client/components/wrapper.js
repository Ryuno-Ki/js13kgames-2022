export function wrapperComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

	const scenes = [
		'about',
		'game-over',
		'new-game',
		'settings',
		'title',
		'win'
	];

	element.innerHTML = `
	  ${scenes.map(function (scene) {
			return `<section data-component="${scene}-component">${scene}</section>`
		}).join('')}
	`;

	return element;
}
