export function wrapperComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);

  const scenes = [
    'about',
    'game-over',
    'level',
    'new-game',
    'settings',
    'title',
    'win'
  ];

  element.innerHTML = `
    ${scenes.map(function (scene) {
      return `<section data-component="${scene}-scene">${scene}</section>`
    }).join('')}
  `;

  return element;
}
