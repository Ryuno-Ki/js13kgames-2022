import '../../../css/main.css';

export function wrapperComponent (targetElement, state) {
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

  if (state.settings.prefersReducedMotion) {
    element.classList.add('no-motion');
  } else {
    element.classList.remove('no-motion');
  }

  element.innerHTML = `
    ${scenes.map(function (scene) {
      return `<section data-component="${scene}-scene">${scene}</section>`
    }).join('')}
  `;

  return element;
}
