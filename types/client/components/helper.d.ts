/**
 * Helper function to pick the current or a draft level from state
 *
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {import('../state/reducers/index.js').DraftLevel | import('../state/reducers/index.js').Level}
 */
export function pickLevel(state: import('../state/reducers/index.js').State): import('../state/reducers/index.js').DraftLevel | import('../state/reducers/index.js').Level;
/**
 * Map pathway coordinates to a SVG path string
 *
 * @argument {import('../state/reducers/index.js').Pathway} coordinates
 * @returns {string}
 */
export function mapCoordinatesToPath(coordinates: import('../state/reducers/index.js').Pathway): string;
export function detectCircleCollision(): void;
