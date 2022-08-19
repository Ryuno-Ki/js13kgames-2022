import { ACTION_CHECK_WIN_CONDITION } from '../../../shared/constants.js';

export function checkWinCondition () {
  return {
    type: ACTION_CHECK_WIN_CONDITION,
    payload: {},
  };
}
