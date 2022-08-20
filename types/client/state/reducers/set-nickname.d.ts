/**
 * Reducer to compute the new state with the chosen nickname
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/set-nickname.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function setNickname(state: import('./index.js').State, payload: import('../actions/set-nickname.js').Action['payload']): import('./index.js').State;
