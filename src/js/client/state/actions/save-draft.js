import { ACTION_SAVE_DRAFT } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SAVE_DRAFT} type
 * @property {object} payload
 */

/**
 * Action creator to save a level draft
 *
 * @returns {Action}
 */
export function saveDraft () {
	return {
		type: ACTION_SAVE_DRAFT,
		payload: {},
	};
}
