import { isPlayerDefender, pickLevel } from './helper.js';

/**
 * Component for rendering a form to allow player to choose entities
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function formComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));
  const activeLevel = /** @type {number} */(state.activeLevel);
  const { nickname, party } = state.player;
  const { enemies, mode } = pickLevel(state);
  const attackOrDefend = isPlayerDefender(state) ? 'defend' : 'attack';

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
 * @argument {import('../data/initial-state.js').State} state
 * @returns {string}
 */
function showAttackOrDefendFormElements (state) {
  if (!isPlayerDefender(state)) {
		return showAttackFormElements(state);
  }

	return showDefendFormElements(state);
}

/**
 * Helper function to show attack component
 *
 * @argument {import('../data/initial-state.js').State} state
 * @returns {string}
 */
function showAttackFormElements (state) {
  const level = pickLevel(state);
  const { enemies, maxEnemies } = /** @type {import('../data/initial-state.js').Level} */(level);

  if (enemies.length >= maxEnemies) {
    return '';
  }

  return '<div class="actions" data-component="attack"></div>';
}

/**
 * Helper function to show defend component
 *
 * @argument {import('../data/initial-state.js').State} state
 * @returns {string}
 */
function showDefendFormElements (state) {
  const level = pickLevel(state);
  const { enemies, towers } = /** @type {import('../data/initial-state.js').Level} */(level);

  if (enemies.length >= towers.length) {
    return '';
  }

  return '<div class="actions" data-component="defend"></div>';
}
