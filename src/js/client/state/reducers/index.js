import { ACTION_NAVIGATE_TO_SCENE } from '../../../shared/constants.js';
import { navigateToScene } from './navigate-to-scene.js';

const initialState = {
  activeScene: 'title-scene',
};

export function reducer (state, action) {
	if (typeof state === 'undefined') {
		return initialState;
	}

	switch (action.type) {
    case ACTION_NAVIGATE_TO_SCENE:
      return navigateToScene(state, action.payload);
		default:
			return state;
	}
}
