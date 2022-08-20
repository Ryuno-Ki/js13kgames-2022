/**
 * Reducer to update the state with the chosen party
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/choose-party.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function chooseParty(state: import('./index.js').State, payload: import('../actions/choose-party.js').Action['payload']): import('./index.js').State;
