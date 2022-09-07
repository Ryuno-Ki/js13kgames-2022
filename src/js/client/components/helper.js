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
export function pickLevel (state) {
  if (state.activeLevel === null) {
    return state.levelDraft;
  }

  return state.levels[ state.activeLevel ];
}

/**
 * Map pathway coordinates to a SVG path string
 *
 * @argument {import('../data/initial-state.js').Pathway} coordinates
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

/**
 * Compare the player's party with the level mode to determine the role.
 *
 * @argument {import('../data/initial-state.js').State} state
 * @argument {import('../data/initial-state.js').Level | import('../data/initial-state.js').DraftLevel} [level]
 * @returns {boolean}
 */
export function isPlayerDefender (state, level) {
  const { party } = state.player;
  const lvl = level || pickLevel(state);
  const { mode } = lvl;

  return party === mode;
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
