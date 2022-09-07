/**
 * Reducer to add an entity to the current level as enemy or tower
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/add-entity.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function addEntity(state: import('../../data/initial-state.js').State, payload: import('../actions/add-entity.js').Action['payload']): import('../../data/initial-state.js').State;
