import { ACTION_SET_MOTION_PREFERENCE } from '../../../shared/constants.js';

export function setMotionPreference (prefered) {
  return {
    type: ACTION_SET_MOTION_PREFERENCE,
    payload: {
      prefered,
    },
  };
}
