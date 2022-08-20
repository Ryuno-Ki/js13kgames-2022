/**
 * Reducer to update position of all enemies on the active level
 *
 * @argument {import('./index.js').State} state
 * @returns {import('./index.js').State}
 */
export function updatePositions (state) {
  const levels = state.levels.map(function (level) {

    if (level.begin !== null) {
      const { pathway } = level;

      return {
        ...level,
        enemies: level.enemies.map(function (enemy) {
          return {
            ...enemy,
            position: computeNewPosition({ enemy, pathway }),
          };
        }),
      };
    }

    return level;
  });

  return Object.assign({}, state, { levels });
}

/**
 * Helper function to compute the new position of an enemy
 *
 * @private
 * @argument {object} config
 * @argument {import('./index.js').Enemy} config.enemy
 * @argument {import('./index.js').Pathway} config.pathway
 * @returns {Array<number>}
 */
function computeNewPosition ({ enemy, pathway }) {
  const [ start, end, t ] = getLineSegment(enemy, pathway);
  const [ x0, y0 ] = /** @type {import('./index.js').LineSegment} */(start);
  const [ x1, y1 ] = /** @type {import('./index.js').LineSegment} */(end);

  // @ts-ignore
  const x = clamp((1 - t) * x0 + t * x1, x0, x1);
  // @ts-ignore
  const y = clamp((1 - t) * y0 + t * y1, y0, y1);

  return [ x, y ];
}

/**
 * Helper function to determine a single line segment
 *
 * @private
 * @argument {import('./index.js').Enemy} enemy
 * @argument {import('./index.js').Pathway} pathway
 * @returns {Array<import('./index.js').LineSegment | number>}
 */
function getLineSegment (enemy, pathway) {
  const now = Date.now().valueOf();
  const progressInTime = getProgressInTime(now, enemy);
  const progressInSpace = getProgressInSpace(pathway);

  const i = clamp(
    getLineSegmentIndex(progressInTime, progressInSpace),
    0,
    pathway.length - 2
  );

  const startIndex = i;
  const endIndex = i + 1;
  const start = pathway[ startIndex ];
  const end = pathway[ endIndex ];

  const [ x0, y0 ] = start;
  const [ x1, y1 ] = end;

  return [
    [ x0, y0 ],
    [ x1, y1 ],
    progressInTime,
  ];
}

/**
 * Helper function to ensure a number is between two others.
 *
 * @private
 * @argument {number} current
 * @argument {number} lower
 * @argument {number} upper
 * @returns {number}
 */
function clamp (current, lower, upper) {
  if (current < lower) {
    return lower;
  }

  if (current > upper) {
    return upper;
  }

  return current;
}

/**
 * Helper function to compute the progress in time.
 *
 * @private
 * @argument {number} now
 * @argument {import('./index.js').Enemy} enemy
 * @returns {number}
 */
function getProgressInTime (now, enemy) {
  const { begin, speed } = enemy;
  const dur = speed * 1000; // in ms

  const t = clamp(now - begin, 0, dur);

  return t / dur;
}

/**
 * Helper function to compute the progress in space.
 *
 * @private
 * @argument {import('./index.js').Pathway} pathway
 * @returns {Array<number>}
 */
function getProgressInSpace (pathway) {
  const progressInSpace = [];
  const totalPathwayLength = getTotalPathwayLength(pathway);
  let sum = 0;

  for (let i = 0; i < pathway.length - 1; i++) {
    const [ x, y ] = pathway[ i ];
    const lineSegmentLength = Math.sqrt(x * x + y * y);

    progressInSpace.push(sum + lineSegmentLength / totalPathwayLength);
    sum = progressInSpace[ progressInSpace.length - 1 ];
  }

  return [ 0 ].concat(progressInSpace);
}

/**
 * Helper function to compute the total Euclidean length of the pathway
 *
 * @private
 * @argument {import('./index.js').Pathway} pathway
 * @returns {number}
 */
function getTotalPathwayLength (pathway) {
  const lengths = pathway.map((point, index, arr) => {
    if (index === arr.length - 1) {
      return null;
    }

    const [ x, y ] = point;
    return Math.sqrt(x * x + y * y);
  }).filter(Boolean);

  return /** @type {Array<number>} */(lengths).reduce((sum, len) => sum + len, 0);
}

/**
 * Helper function to find the line segment with respect to the time
 *
 * @private
 * @argument {number} time
 * @argument {Array<number>} space
 * @returns {number}
 */
function getLineSegmentIndex (time, space) {
  let index = 0;

  for (let i = space.length - 1; i >= 0; i--) {
    const treshold = space[ i ];

    if (time > treshold) {
      index = i;
      break;
    }
  }

  return index;
}
