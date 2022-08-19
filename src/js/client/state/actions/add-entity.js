import { ACTION_ADD_ENTITY } from '../../../shared/constants.js';

export function addEntity (entity, index) {
  return {
    type: ACTION_ADD_ENTITY,
    payload: {
      entity,
      index: parseInt(index, 10),
    },
  };
}
