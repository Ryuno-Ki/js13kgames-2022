import{ detectCircleCollision, pickLevel } from '../../components/helper.js';

export function checkCollisions (state) {
	// This is checking for collisions with the pathway end right now
	// Next is a check with towers
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

	return Object.assign({}, state);
}
