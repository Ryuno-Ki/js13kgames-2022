import '../../../css/main.css';

/**
 * @typedef {'about-scene' | 'game-over-scene' | 'level-scene' | 'level-editor-scene' | 'new-game-scene' | 'settings-scene' | 'title-scene' | 'win-scene'} Scene
 */

/**
 * @typedef {Array<Scene>} Scenes
 */

/**
 * Component to create wrapping element around all others.
 * @argument {HTMLDivElement} targetElement
 * @argument {import('../data/initial-state.js').State} state
 */
export function wrapperComponent (targetElement, state) {
  const element = /** @type {HTMLDivElement} */(targetElement.cloneNode(true));

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
