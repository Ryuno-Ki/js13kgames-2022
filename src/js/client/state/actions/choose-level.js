import { ACTION_CHOOSE_LEVEL } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHOOSE_LEVEL} type
 * @property {object} payload
 * @property {string} payload.level
 */

/**
 * Action creator to choose a level
 *
 * @argument {string} level
 * @returns {Action}
 */
export function chooseLevel (level) {
  return {
    type: ACTION_CHOOSE_LEVEL,
    payload: {
      level,
    },
  };
}
