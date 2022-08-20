/**
 * Update all radii on the current level.
 *
 * @argument {import('./index.js').State} state
 * return {import('./index.js').State} the new State
 */
export function updateRadii(state: import('./index.js').State): import("./index.js").State & {
    levels: import("./index.js").Level[];
};
