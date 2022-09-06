import { pickLevel } from './helper.js';

/**
 * Component to pick entities for attack
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function attackComponent (targetElement, state) {
  const element = /** @type {HTMLDivElement} */(targetElement.cloneNode(true));
  const level = pickLevel(state);
  const { mode } = /** @type {import('../state/reducers/index.js').Level} */(level);
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
