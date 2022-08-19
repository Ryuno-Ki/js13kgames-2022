import { pickLevel } from './helper.js';

export function attackComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { mode } = pickLevel(state);
  const partyEntities = state.entities[ mode ];

  element.innerHTML = `
    <div class="actions">
      ${partyEntities.map((entity) => {
        return `
          <button type="button" data-add-entity="${entity.icon}">${entity.icon}</button>
          `
      }).join('')}
    </div>
  `;

  return element;
}
