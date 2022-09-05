import{ isPlayerDefending, pickLevel } from '../../components/helper.js';

/**
 * Reducer to update the state on meeting a win condition
 *
 * @argument {import('./index.js').State} state
 * @returns {import('./index.js').State}
 */
export function checkWinCondition (state) {
	const { player } = state;
	const level = pickLevel(state);

  const hasWon = isPlayerDefending(state, level)
		? level.enemies.filter(function (enemy) {
		  return enemy.life > 0;
	  }).length === 0 && player.life > 0
	  // TODO: Check for an entity colliding with pathway end
		: false;
  let activeScene = state.activeScene;

  if (hasWon) {
    activeScene = 'win-scene';
  }

  return Object.assign({}, state, { activeScene, hasWon });
}
