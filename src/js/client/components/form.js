import { pickLevel } from './helper.js';

export function formComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { nickname, party } = state.player;
  const { enemies, maxEnemies, mode } = pickLevel(state);
  const partyEnemies = state.enemies[ mode ];

  element.innerHTML = `
    <h2>Level ${state.activeLevel + 1}</h2>
    <p>${nickname} plays for ${party}.</p>

    ${enemies.length >= maxEnemies ? '' : `
      <div class="actions">
        ${partyEnemies.map((enemy) => {
          return `<button type="button" data-add-enemy="${enemy}">${enemy}</button>`
        }).join('')}
      </div>
    `}

    ${enemies.length === 0 ? '' : `
      <p>Current choices: ${enemies.map((e) => e.icon).join(', ')}</p>
    `}
  `;

  return element;
}
