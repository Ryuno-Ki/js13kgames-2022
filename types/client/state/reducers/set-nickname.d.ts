/**
 * Reducer to compute the new state with the chosen nickname
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-nickname.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setNickname(state: import('../../data/initial-state.js').State, payload: import('../actions/set-nickname.js').Action['payload']): import('../../data/initial-state.js').State;
