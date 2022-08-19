import { ACTION_ADD_ENTITY } from '../../../shared/constants.js';

export function addEntity (entity) {
  return {
    type: ACTION_ADD_ENTITY,
    payload: {
      entity,
    },
  };
}
