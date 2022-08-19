import { pickLevel } from './helper.js';

export function attackComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { mode } = pickLevel(state);
  const partyEnemies = state.enemies[ mode ];

  element.innerHTML = `
    <div class="actions">
      ${partyEnemies.map((enemy) => {
        return `
          <button type="button" data-add-entity="${enemy}">${enemy}</button>
          `
      }).join('')}
  `;

  return element;
}
