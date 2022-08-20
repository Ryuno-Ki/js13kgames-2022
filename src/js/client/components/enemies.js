import { pickLevel } from './helper.js';

/**
 * Component for rendering enemies on SVG
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function enemiesComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));
  const { enemies, mode } = pickLevel(state);
  const fill = mode === 'death' ? 'white' : 'black';

  element.innerHTML = `
    ${enemies.map((enemy) => {
      const [ x, y ] = enemy.position;

      return `
        <circle cx="${x}" cy="${y}" r="${enemy.radius}" fill="${fill}" />
        <text x="${x}" y="${y}">${enemy.icon}</text>
    `;
    }).join('')}
  `;

  return element;
}
