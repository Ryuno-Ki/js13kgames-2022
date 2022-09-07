/**
 * Reducer to update the state with respect to the maximum enemies in a draft level
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-draft-level-max-enemies.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setDraftLevelMaxEnemies(state: import('../../data/initial-state.js').State, payload: import('../actions/set-draft-level-max-enemies.js').Action['payload']): import('../../data/initial-state.js').State;
