import{ detectCircleCollision, isPlayerDefender, pickLevel } from '../../components/helper.js';

/**
 * Reducer to update the state on meeting a win condition
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {import('../../data/initial-state.js').State}
 */
export function checkWinCondition (state) {
  // Guard against unprepared levels
  if (state.activeScene !== 'level-scene') {
    return state;
  }

  const level = pickLevel(state);
  const hasWon = isPlayerDefender(state, level)
    ? checkWinConditionForDefender(state)
    : checkWinConditionForAttacker(state);

  let activeScene = /** @type {'level-scene' | 'win-scene'} */(state.activeScene);

  if (hasWon) {
    activeScene = 'win-scene';
  }

  return Object.assign({}, state, { activeScene, hasWon });
}

/**
 * Helper function to check win condition for defender role
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {boolean}
 */
function checkWinConditionForDefender (state) {
  const { player } = state;
  const level = pickLevel(state);

  const survivingEnemies = level.enemies
    .map(function (enemy) { return enemy.life; })
    .filter(function (life) { return life > 0; })

  return survivingEnemies.length === 0 && player.life > 0
}

/**
 * Helper function to check win condition for attacker role
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {boolean}
 */
function checkWinConditionForAttacker (state) {
  const { player } = state;
  const level = pickLevel(state);

  const target = level.pathway[ level.pathway.length - 1 ];
  const circle2 = /** @type {import('../../components/helper.js').Circle} */({
    x: target[ 0 ],
    y: target[ 1 ],
    radius: 2,
  });

  const survivingEnemies = level.enemies.filter((enemy) => enemy.life > 0);
  const winningEnemies = survivingEnemies
    .map(function (enemy) {
      const circle1 = /** @type {import('../../components/helper.js').Circle} */({
        x: enemy.position[ 0 ],
        y: enemy.position[ 1 ],
        radius: enemy.radius,
      });

      return detectCircleCollision(circle1, circle2);
    })

  return winningEnemies.length > 0 && player.life > 0;
}
