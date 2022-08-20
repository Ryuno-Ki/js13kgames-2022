import { ACTION_SET_NICKAME } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_NICKAME} type
 * @property {object} payload
 * @property {string} payload.nickname
 */

/**
 * Action creator for setting a nickname
 *
 * @argument {string} nickname
 * @returns {Action}
 */
export function setNickname (nickname) {
  return {
    type: ACTION_SET_NICKAME,
    payload: {
      nickname,
    },
  };
}
