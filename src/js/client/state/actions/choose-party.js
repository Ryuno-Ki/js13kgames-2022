import { ACTION_CHOOSE_PARTY } from '../../../shared/constants.js';

export function chooseParty (party) {
  return {
    type: ACTION_CHOOSE_PARTY,
    payload: {
      party,
    },
  };
}
