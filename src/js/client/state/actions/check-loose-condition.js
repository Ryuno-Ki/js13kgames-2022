import { ACTION_CHECK_LOOSE_CONDITION } from '../../../shared/constants.js';

export function checkLooseCondition () {
  return {
    type: ACTION_CHECK_LOOSE_CONDITION,
    payload: {},
  };
}
