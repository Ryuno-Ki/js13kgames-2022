/**
 * Reducer to update the state with respect to the mode in a draft level.
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-draft-level-mode.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setDraftLevelMode(state: import('../../data/initial-state.js').State, payload: import('../actions/set-draft-level-mode.js').Action['payload']): import('../../data/initial-state.js').State;
