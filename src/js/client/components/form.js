import { pickLevel } from './helper.js';

export function formComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { nickname, party } = state.player;
  const { enemies, mode } = pickLevel(state);
  const attackOrDefend = party === mode ? 'defend' : 'attack';

  element.innerHTML = `
    <h2>Level ${state.activeLevel + 1} (${mode})</h2>
    <p>${nickname} plays for ${party}.</p>
    <p>Therefore it is about ${attackOrDefend}ing here.</p>
    ${showAttackOrDefendFormElements(state)}
    ${enemies.length === 0 ? '' : `
      <p>Current choices: ${enemies.map((e) => e.icon).join(', ')}</p>
    `}
  `;

  return element;
}

function showAttackOrDefendFormElements (state) {
  const { party } = state.player;
  const { enemies, maxEnemies, mode, towers } = pickLevel(state);
  const attackOrDefend = party === mode ? 'defend' : 'attack';

  if (attackOrDefend === 'attack') {
    if (enemies.length >= maxEnemies) {
      return '';
    }

    return '<div class="actions" data-component="attack"></div>';
  }

  if (enemies.length >= towers.length) {
    return '';
  }

  return '<div class="actions" data-component="defend"></div>';
}
