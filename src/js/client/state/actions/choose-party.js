import { ACTION_CHOOSE_PARTY } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHOOSE_PARTY} type
 * @property {object} payload
 * @property {'death' | 'life'} payload.party
 */

/**
 * Action creator to choose a party.
 *
 * @argument {'death' | 'life'} party
 * @returns {Action}
 */
export function chooseParty (party) {
  return {
    type: ACTION_CHOOSE_PARTY,
    payload: {
      party,
    },
  };
}
