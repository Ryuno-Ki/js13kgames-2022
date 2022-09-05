/**
 * Reducer to update the state on meeting the game over condition
 *
 * @argument {import('./index.js').State} state
 * @returns {import('./index.js').State}
 */
export function checkLooseCondition (state) {
  const hasLost = player.life === 0;
  let activeScene = state.activeScene;

  if (hasLost) {
    activeScene = 'game-over-scene';
  }

  return Object.assign({}, state, { activeScene, hasLost });
}
