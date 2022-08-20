import { ACTION_SET_MOTION_PREFERENCE } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_MOTION_PREFERENCE} type
 * @property {object} payload
 * @property {boolean} payload.prefered
 */

/**
 * Action creator for setting the motion preference
 *
 * @argument {boolean} prefered
 * @returns {Action}
 */
export function setMotionPreference (prefered) {
  return {
    type: ACTION_SET_MOTION_PREFERENCE,
    payload: {
      prefered,
    },
  };
}
