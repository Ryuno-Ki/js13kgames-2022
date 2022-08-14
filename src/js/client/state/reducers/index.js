import { ACTION_NAVIGATE_TO_SCENE } from '../../../shared/constants.js';
import { navigateToScene } from './navigate-to-scene.js';

const initialState = {
  activeLevel: 0,
  activeScene: 'title-scene',
  levels: [{
    mode: 'death',
    enemies: '💀👺👹👻',
    pathway: [
      [   0,  50 ],
      [  30,  50 ],
      [  30,  70 ],
      [  70,  70 ],
      [  70,  50 ],
      [ 100,  50 ]
    ],
    towers: [{
      position: [  30,  44 ],
      type: null,
    }, {
      position: [  36,  50 ],
      type: null,
    }],
  }],
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
