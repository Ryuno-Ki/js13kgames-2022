import{ detectCircleCollision, pickLevel } from '../../components/helper.js';

/**
 * Reducer to update the state on meeting a win condition
 *
 * @argument {import('./index.js').State} state
 * @returns {import('./index.js').State}
 */
export function checkWinCondition (state) {
	// TODO: Move into separate reducer similar to updare* and check lives here instead
  const hasWon = hasCollided(state);
  let activeScene = state.activeScene;

  if (hasWon) {
    activeScene = 'win-scene';
  }

  return Object.assign({}, state, { activeScene, hasWon });
}

// Right now this is an attackers perspective
/**
 * Helper function to compare every enemy with homebase
 *
 * @private
 * @argument {import('./index.js').State} state
 * @returns {boolean}
 */
function hasCollided (state) {
	const level = pickLevel(state);
	const { enemies, pathway } = level;
	const lastSegment = pathway[ pathway.length - 1 ];
	const circle2 = {
		radius: 2,
		x: lastSegment[ 0 ],
		y: lastSegment[ 1 ],
	};

	return enemies
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
}
