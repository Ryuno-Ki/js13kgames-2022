import { ACTION_NAVIGATE_TO_SCENE } from '../../../shared/constants.js';

export function navigateToScene (scene) {
  return {
    type: ACTION_NAVIGATE_TO_SCENE,
    payload: {
      scene,
    },
  };
}
