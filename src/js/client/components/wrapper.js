import '../../../css/main.css';

export function wrapperComponent (targetElement) {
  const element = targetElement.cloneNode(true);

  const scenes = [
    'about',
    'game-over',
    'level',
    'level-editor',
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
