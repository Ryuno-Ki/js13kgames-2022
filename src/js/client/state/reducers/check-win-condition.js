export function checkWinCondition (state) {
  const hasWon = false;
  let activeScene = state.activeScene;

  if (hasWon) {
    activeScene = 'win-scene';
  }

  return Object.assign({}, state, { activeScene, hasWon });
}
