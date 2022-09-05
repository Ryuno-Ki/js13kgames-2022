import { isPlayerDefender, pickLevel } from '../../components/helper.js';

/**
 * Reducer to update the state with the active scene.
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/navigate-to-scene.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function navigateToScene (state, payload) {
  const { scene } = payload;
  const levels = state.levels.map(function (level) {
    if (scene === 'level-scene') {
      return {
        ...level,
        begin: Date.now().valueOf(),
      };
    }

    return level;
  });

  let player = state.player;

	if (scene === 'level-scene') {
		if (isPlayerDefender(state)) {
  		player = {
    		...state.player,
    		life: 1,
    	};
		} else {
  		player = {
    		...state.player,
    		life: pickLevel(state).maxEnemies || 0,
    	};
		}
	}

  return Object.assign({}, state, { activeScene: scene, levels, player });
}
