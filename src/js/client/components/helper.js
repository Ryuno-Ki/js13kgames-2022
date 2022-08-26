/**
 * @typedef {object} Circle
 * @property {number} radius
 * @property {number} x
 * @property {number} y
 */

/**
 * Helper function to pick the current or a draft level from state
 *
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {import('../state/reducers/index.js').DraftLevel | import('../state/reducers/index.js').Level}
 */
export function pickLevel (state) {
  if (state.activeLevel === null) {
    return state.levelDraft;
  }

  return state.levels[ state.activeLevel ];
}

/**
 * Map pathway coordinates to a SVG path string
 *
 * @argument {import('../state/reducers/index.js').Pathway} coordinates
 * @returns {string}
 */
export function mapCoordinatesToPath (coordinates) {
  if (coordinates.length === 0) {
    return '';
  }

  return [
      `M${coordinates[0].join(',')}`,
      coordinates.slice(1).map((segment) => `L${segment.join(',')}`).join(''),
    ].join('');
}

// Kudos: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#circle_collision
/**
 * Detect intersection of two circles
 *
 * @argument {Circle} circle1
 * @argument {Circle} circle2
 * @returns {boolean}
 */
export function detectCircleCollision (circle1, circle2) {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    // collision detected!
		return true;
  } else {
    // no collision
		return false;
  }
}
