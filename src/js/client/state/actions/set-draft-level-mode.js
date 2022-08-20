import { ACTION_SET_DRAFT_LEVEL_MODE } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_DRAFT_LEVEL_MODE} type
 * @property {object} payload
 * @property {'death' | 'life'} payload.mode
 */

/**
 * Action creator to set the mode in a draft level
 *
 * @argument {'death' | 'life'} mode
 * @returns {Action}
 */
export function setDraftLevelMode (mode) {
  return {
    type: ACTION_SET_DRAFT_LEVEL_MODE,
    payload: {
      mode,
    },
  };
}
