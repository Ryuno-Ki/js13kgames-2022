import { pickLevel } from './helper.js';

export function enemiesComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
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
