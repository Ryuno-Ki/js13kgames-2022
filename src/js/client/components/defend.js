import { pickLevel } from './helper.js';

export function defendComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { mode } = pickLevel(state);
  const side = mode === 'death' ? 'life' : 'death';
  const towers = state.enemies[ side ];

  element.innerHTML = `
    <div class="actions">
      ${towers.map((tower) => {
        return `
          <button type="button" data-add-entity="${tower}">${tower}</button>
          `
      }).join('')}
    </div>
  `;

  return element;
}
