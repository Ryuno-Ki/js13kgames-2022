import { ACTION_NAVIGATE_TO_SCENE } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_NAVIGATE_TO_SCENE} type
 * @property {object} payload
 * @property {import('../../components/wrapper.js').Scene} payload.scene
 */

/**
 * Action creator to navigate to another scene
 *
 * @argument {import('../../components/wrapper.js').Scene} scene
 * @returns {Action}
 */
export function navigateToScene (scene) {
  return {
    type: ACTION_NAVIGATE_TO_SCENE,
    payload: {
      scene,
    },
  };
}
