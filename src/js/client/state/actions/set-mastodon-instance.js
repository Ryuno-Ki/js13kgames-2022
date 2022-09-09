import { ACTION_SET_MASTODON_INSTANCE } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_MASTODON_INSTANCE} type
 * @property {object} payload
 * @property {string} payload.instance
 */

/**
 * Action creator to define another mastodon instance
 *
 * @argument {string} instance
 * @returns {Action}
 */
export function setMastodonInstance (instance) {
  return {
    type: ACTION_SET_MASTODON_INSTANCE,
    payload: {
      instance,
    },
  };
}
