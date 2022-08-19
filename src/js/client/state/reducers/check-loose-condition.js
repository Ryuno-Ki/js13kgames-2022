export function checkLooseCondition (state) {
  const hasLost = false;
  let activeScene = state.activeScene;

  if (hasLost) {
    activeScene = 'game-over-scene';
  }

  return Object.assign({}, state, { activeScene, hasLost });
}
