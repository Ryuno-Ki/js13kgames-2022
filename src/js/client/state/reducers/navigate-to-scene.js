/**
 * Reducer to update the state with the active scene.
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/navigate-to-scene.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function navigateToScene (state, payload) {
  const { scene } = payload;
  const levels = state.levels.map(function (level) {
    if (scene === 'level-scene') {
      return {
        ...level,
        begin: Date.now().valueOf(),
      };
    }

    return level;
  });

  return Object.assign({}, state, { activeScene: scene, levels });
}
