import { ACTION_UPDATE_POSITIONS } from '../../../shared/constants.js';

export function updatePositions () {
  return {
    type: ACTION_UPDATE_POSITIONS,
    payload: {},
  };
}
