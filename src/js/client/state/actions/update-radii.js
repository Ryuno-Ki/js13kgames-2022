import { ACTION_UPDATE_RADII } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_UPDATE_RADII} type
 * @property {object} payload
 */

/**
 * Action creator to trigger an update of all radii
 *
 * @returns {Action}
 */
export function updateRadii () {
  return {
    type: ACTION_UPDATE_RADII,
    payload: {},
  };
}
