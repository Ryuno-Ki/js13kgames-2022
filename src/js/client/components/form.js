import { pickLevel } from './helper.js';

/**
 * Component for rendering a form to allow player to choose entities
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function formComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));
  const activeLevel = /** @type {number} */(state.activeLevel);
  const { nickname, party } = state.player;
  const { enemies, mode } = pickLevel(state);
  const attackOrDefend = party === mode ? 'defend' : 'attack';

  element.innerHTML = `
    <h2>Level ${activeLevel + 1} (${mode})</h2>
    <p>${nickname} plays for ${party}.</p>
    <p>Therefore it is about ${attackOrDefend}ing here.</p>
    ${showAttackOrDefendFormElements(state)}
    ${enemies.length === 0 ? '' : `
      <p>Current choices: ${enemies.map((e) => e.icon).join(', ')}</p>
    `}
  `;

  return element;
}

/**
 * Helper function to show either attack or defend component
 *
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {string}
 */
function showAttackOrDefendFormElements (state) {
  const { party } = state.player;
  const level = pickLevel(state);
  const { enemies, maxEnemies, mode, towers } = /** @type {import('../state/reducers/index.js').Level} */(level);
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
