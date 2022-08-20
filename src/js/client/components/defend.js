import { pickLevel } from './helper.js';

/**
 * Component to render the buttons to assign entities for towers
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function defendComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));
  const { mode, towers } = pickLevel(state);
  const side = mode === 'death' ? 'life' : 'death';
  const choices = state.entities[ side ];

  element.innerHTML = `
    <div class="actions">
      ${towers.map((_, index) => {
        return `Tower ${index}: ${showChoices(choices, index)}`
      }).join('')}
    </div>
  `;

  return element;
}

/**
 * Helper function to render all buttons for choosing a tower entity
 *
 * @private
 * @argument {Array<import('../state/reducers/index.js').Entity>} choices
 * @argument {number} index
 * @returns {string}
 */
function showChoices (choices, index) {
  return choices.map((choice) => {
    return `
      <button type="button" data-add-entity="${choice.icon}" data-index="${index}">
        ${choice.icon}
      </button>
    `
  }).join('');
}
