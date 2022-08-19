import { ACTION_ADD_ENEMY } from '../../../shared/constants.js';

export function addEnemy (enemy) {
  return {
    type: ACTION_ADD_ENEMY,
    payload: {
      enemy,
    },
  };
}
