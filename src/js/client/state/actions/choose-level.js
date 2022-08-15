import { ACTION_CHOOSE_LEVEL } from '../../../shared/constants.js';

export function chooseLevel (level) {
  return {
    type: ACTION_CHOOSE_LEVEL,
    payload: {
      level,
    },
  };
}
