import { ACTION_CHECK_LOOSE_CONDITION } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHECK_LOOSE_CONDITION} type
 * @property {object} payload
 */

/**
 * Action creator to check on loose condition
 *
 * @returns {Action}
 */
export function checkLooseCondition () {
  return {
    type: ACTION_CHECK_LOOSE_CONDITION,
    payload: {},
  };
}
