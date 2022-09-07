/**
 * Reducer to update the state on meeting the game over condition
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {import('../../data/initial-state.js').State}
 */
export function checkLooseCondition (state) {
  const hasLost = state.player.life === 0;
  let activeScene = state.activeScene;

  if (hasLost) {
    activeScene = 'game-over-scene';
  }

  return Object.assign({}, state, { activeScene, hasLost });
}
