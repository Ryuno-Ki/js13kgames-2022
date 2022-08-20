import { ACTION_CHECK_WIN_CONDITION } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHECK_WIN_CONDITION} type
 * @property {object} payload
 */

/**
 * Action creator to check on win condition
 *
 * @returns {Action}
 */
export function checkWinCondition () {
  return {
    type: ACTION_CHECK_WIN_CONDITION,
    payload: {},
  };
}
