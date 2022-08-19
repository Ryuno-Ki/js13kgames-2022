import { pickLevel } from './helper.js';

export function towersComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const stroke = targetElement.dataset.stroke;
  const textColor = stroke === 'black' ? 'white' : 'black';

  const { towers } = pickLevel(state);

  element.innerHTML = towers.map((tower, index) => {
    const [ x, y ] = tower.position;
    const text = tower.icon === null ? index + 1 : tower.icon;

    return `
      <g>
        <circle cx="${x}" cy="${y}" r="${tower.radius}" fill="${stroke}" />
        <text x="${x - 3}" y="${y + 3}" stroke="${textColor}">${text}</text>
    </g>
  `;
  }).join('');

  return element;
}
