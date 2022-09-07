/**
 * Reducer to update the state with the chosen party
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/choose-party.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function chooseParty(state: import('../../data/initial-state.js').State, payload: import('../actions/choose-party.js').Action['payload']): import('../../data/initial-state.js').State;
