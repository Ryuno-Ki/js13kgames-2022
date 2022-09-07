/**
 * Update all radii on the current level.
 *
 * @argument {import('../../data/initial-state.js').State} state
 * return {import('../../data/initial-state.js').State} the new State
 */
export function updateRadii(state: import('../../data/initial-state.js').State): import("../../data/initial-state.js").State & {
    levels: import("../../data/initial-state.js").Level[];
};
