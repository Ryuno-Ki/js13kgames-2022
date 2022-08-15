import { ACTION_SET_NICKAME } from '../../../shared/constants.js';

export function setNickname (nickname) {
  return {
    type: ACTION_SET_NICKAME,
    payload: {
      nickname,
    },
  };
}
