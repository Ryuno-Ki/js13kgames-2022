import { pickLevel } from './helper.js';

export function defendComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { mode, towers } = pickLevel(state);
  const side = mode === 'death' ? 'life' : 'death';
  const choices = state.enemies[ side ];

  element.innerHTML = `
    <div class="actions">
      ${towers.map((_, index) => {
        return `Tower ${index}: ${showChoices(choices, index)}`
      }).join('')}
    </div>
  `;

  return element;
}

function showChoices (choices, index) {
  return choices.map((choice) => {
    return `
      <button type="button" data-add-entity="${choice}" data-index="${index}">
        ${choice}
      </button>
    `
  }).join('');
}
