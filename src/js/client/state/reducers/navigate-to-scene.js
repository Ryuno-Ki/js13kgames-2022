export function navigateToScene (state, payload) {
  const { scene } = payload;
  const levels = state.levels.map(function (level) {
    if (scene === 'level-scene') {
      return {
        ...level,
        begin: new Date() - 0
      };
    }

    return level;
  });

  return Object.assign({}, state, { activeScene: scene, levels });
}
