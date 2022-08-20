/**
 * Reducer to add an entity to the current level as enemy or tower
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/add-entity.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function addEntity(state: import('./index.js').State, payload: import('../actions/add-entity.js').Action['payload']): import('./index.js').State;
