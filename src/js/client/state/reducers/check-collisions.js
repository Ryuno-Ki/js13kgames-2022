import{ detectCircleCollision, pickLevel } from '../../components/helper.js';

/**
 * Reducer to check for collisions between enemies and towers and end of pathway.
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {import('../../data/initial-state.js').State}
 */
export function checkCollisions (state) {
  // FIXME: Figure out why this guard is needed
  // Console reports, that lastSegment is undefined, but it starts in win scene
  if (state.activeScene !== 'level-scene') {
    return Object.assign({}, state);
  }

  // This is checking for collisions with the pathway end right now
  // Next is a check with towers
  const lvl = pickLevel(state);
  const { pathway } = lvl;
  const lastSegment = pathway[ pathway.length - 1 ];
  const circle2 = {
    radius: 2,
    x: lastSegment[ 0 ],
    y: lastSegment[ 1 ],
  };

  const enemies = lvl.enemies
    .map(function (enemy) {
      return {
        radius: enemy.radius,
        x: enemy.position[ 0 ],
        y: enemy.position[ 1 ],
      };
    })
    .some(function (circle1) {
      return detectCircleCollision(circle1, circle2);
    });

  const level = {
    ...lvl,
    enemies,
  };

  return Object.assign({}, state, { level });
}
