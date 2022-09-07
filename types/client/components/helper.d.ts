/**
 * @typedef {object} Circle
 * @property {number} radius
 * @property {number} x
 * @property {number} y
 */
/**
 * Helper function to pick the current or a draft level from state
 *
 * @argument {import('../data/initial-state.js').State} state
 * @returns {import('../data/initial-state.js').DraftLevel | import('../data/initial-state.js').Level}
 */
export function pickLevel(state: import('../data/initial-state.js').State): import('../data/initial-state.js').DraftLevel | import('../data/initial-state.js').Level;
/**
 * Map pathway coordinates to a SVG path string
 *
 * @argument {import('../data/initial-state.js').Pathway} coordinates
 * @returns {string}
 */
export function mapCoordinatesToPath(coordinates: import('../data/initial-state.js').Pathway): string;
/**
 * Compare the player's party with the level mode to determine the role.
 *
 * @argument {import('../data/initial-state.js').State} state
 * @argument {import('../data/initial-state.js').Level | import('../data/initial-state.js').DraftLevel} [level]
 * @returns {boolean}
 */
export function isPlayerDefender(state: import('../data/initial-state.js').State, level?: import("../data/initial-state.js").DraftLevel | import("../data/initial-state.js").Level | undefined): boolean;
/**
 * Detect intersection of two circles
 *
 * @argument {Circle} circle1
 * @argument {Circle} circle2
 * @returns {boolean}
 */
export function detectCircleCollision(circle1: Circle, circle2: Circle): boolean;
export type Circle = {
    radius: number;
    x: number;
    y: number;
};
