import { ACTION_CHECK_COLLISIONS } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHECK_COLLISIONS} type
 * @property {object} payload
 */

/**
 * Action creator to check for collisions
 *
 * @returns {Action}
 */
export function checkCollisions () {
  return {
    type: ACTION_CHECK_COLLISIONS,
    payload: {},
  };
}
