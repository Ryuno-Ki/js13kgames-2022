import { ACTION_CHECK_COLLISIONS } from '../.../../shared/constants.js';

export function checkCollisions () {
	return {
		type: ACTION_CHECK_COLLISIONS,
		payload: {},
	};
}
