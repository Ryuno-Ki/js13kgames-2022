import { ACTION_SET_DRAFT_LEVEL_MODE } from '../../../shared/constants.js';

export function setDraftLevelMode (mode) {
  return {
    type: ACTION_SET_DRAFT_LEVEL_MODE,
    payload: {
      mode,
    },
  };
}
