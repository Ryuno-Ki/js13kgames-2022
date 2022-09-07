/**
 * Reducer to update the state with respect to the maximum enemies in a draft level
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-draft-level-max-enemies.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setDraftLevelMaxEnemies (state, payload) {
  const { maxEnemies } = payload;

  const levelDraft = {
    ...state.levelDraft,
    maxEnemies,
  };

  return Object.assign({}, state, { levelDraft });
}
