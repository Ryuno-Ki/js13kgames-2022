/**
 * Reducer to update the state on meeting a win condition
 *
 * @argument {import('./index.js').State} state
 * @returns {import('./index.js').State}
 */
export function checkWinCondition (state) {
  const hasWon = false;
  let activeScene = state.activeScene;

  if (hasWon) {
    activeScene = 'win-scene';
  }

  return Object.assign({}, state, { activeScene, hasWon });
}
