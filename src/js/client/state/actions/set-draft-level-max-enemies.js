import { ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES } from '../../../shared/constants.js';

export function setDraftLevelMaxEnemies (maxEnemies) {
  return {
    type: ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES,
    payload: {
      maxEnemies,
    },
  };
}
