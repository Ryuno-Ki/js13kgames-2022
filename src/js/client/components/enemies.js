import { pickLevel } from './helper.js';

export function enemiesComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { enemies } = pickLevel(state);

  element.innerHTML = `
    ${enemies.map((enemy) => {
      const [ x, y ] = enemy.position;

      return `<text x="${x}" y="${y}">${enemy.icon}</text>`;
    }).join('')}
  `;

  return element;
}
