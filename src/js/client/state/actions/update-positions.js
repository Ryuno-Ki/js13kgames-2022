import { ACTION_UPDATE_POSITIONS } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_UPDATE_POSITIONS} type
 * @property {object} payload
 */

/**
 * Action creator to trigger an update of all positions
 *
 * @returns {Action}
 */
export function updatePositions () {
  return {
    type: ACTION_UPDATE_POSITIONS,
    payload: {},
  };
}
