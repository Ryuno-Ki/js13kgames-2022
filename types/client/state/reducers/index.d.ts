/**
 * @typedef {import('../actions/add-entity.js').Action | import('../actions/add-coordinate.js').Action | import('../actions/check-collisions.js').Action | import('../actions/check-loose-condition.js').Action | import('../actions/check-win-condition.js').Action | import('../actions/choose-level.js').Action | import('../actions/choose-party.js').Action | import('../actions/navigate-to-scene.js').Action | import('../actions/save-draft.js').Action | import('../actions/set-draft-level-max-enemies.js').Action | import('../actions/set-draft-level-mode.js').Action | import('../actions/set-motion-preference.js').Action | import('../actions/set-nickname.js').Action | import('../actions/set-placement-mode.js').Action | import('../actions/update-positions.js').Action | import('../actions/update-radii.js').Action} Action
 */
/**
 * Reducer to compute the new state
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {Action} action
 * @returns {import('../../data/initial-state.js').State}
 */
export function reducer(state: import("../../data/initial-state.js").State | undefined, action: Action): import('../../data/initial-state.js').State;
export type Action = import('../actions/add-entity.js').Action | import('../actions/add-coordinate.js').Action | import('../actions/check-collisions.js').Action | import('../actions/check-loose-condition.js').Action | import('../actions/check-win-condition.js').Action | import('../actions/choose-level.js').Action | import('../actions/choose-party.js').Action | import('../actions/navigate-to-scene.js').Action | import('../actions/save-draft.js').Action | import('../actions/set-draft-level-max-enemies.js').Action | import('../actions/set-draft-level-mode.js').Action | import('../actions/set-motion-preference.js').Action | import('../actions/set-nickname.js').Action | import('../actions/set-placement-mode.js').Action | import('../actions/update-positions.js').Action | import('../actions/update-radii.js').Action;
