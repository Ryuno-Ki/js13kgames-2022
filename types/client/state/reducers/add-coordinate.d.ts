/**
 * Reducer to update the state with a new pathway coordinate
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/add-coordinate.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function addCoordinate(state: import('../../data/initial-state.js').State, payload: import('../actions/add-coordinate.js').Action['payload']): import('../../data/initial-state.js').State;
