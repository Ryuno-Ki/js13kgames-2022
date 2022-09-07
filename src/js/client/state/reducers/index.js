import { initialState } from '../../data/initial-state.js';
import {
  ACTION_ADD_COORDINATE,
  ACTION_ADD_ENTITY,
  ACTION_CHECK_COLLISIONS,
  ACTION_CHECK_LOOSE_CONDITION,
  ACTION_CHECK_WIN_CONDITION,
  ACTION_CHOOSE_LEVEL,
  ACTION_CHOOSE_PARTY,
  ACTION_NAVIGATE_TO_SCENE,
  ACTION_SAVE_DRAFT,
  ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES,
  ACTION_SET_DRAFT_LEVEL_MODE,
  ACTION_SET_MOTION_PREFERENCE,
  ACTION_SET_NICKAME,
  ACTION_SET_PLACEMENT_MODE,
  ACTION_UPDATE_POSITIONS,
  ACTION_UPDATE_RADII
} from '../../../shared/constants.js';
import { addEntity } from './add-entity.js';
import { addCoordinate } from './add-coordinate.js';
import { checkCollisions } from './check-collisions.js';
import { checkLooseCondition } from './check-loose-condition.js';
import { checkWinCondition } from './check-win-condition.js';
import { chooseLevel } from './choose-level.js';
import { chooseParty } from './choose-party.js';
import { navigateToScene } from './navigate-to-scene.js';
import { saveDraft } from './save-draft.js';
import { setDraftLevelMaxEnemies } from './set-draft-level-max-enemies.js';
import { setDraftLevelMode } from './set-draft-level-mode.js';
import { setMotionPreference } from './set-motion-preference.js';
import { setNickname } from './set-nickname.js';
import { setPlacementMode } from './set-placement-mode.js';
import { updatePositions } from './update-positions.js';
import { updateRadii } from './update-radii.js';

/**
 * @typedef {import('../actions/add-entity.js').Action | import('../actions/add-coordinate.js').Action | import('../actions/check-collisions.js').Action | import('../actions/check-loose-condition.js').Action | import('../actions/check-win-condition.js').Action | import('../actions/choose-level.js').Action | import('../actions/choose-party.js').Action | import('../actions/navigate-to-scene.js').Action | import('../actions/save-draft.js').Action | import('../actions/set-draft-level-max-enemies.js').Action | import('../actions/set-draft-level-mode.js').Action | import('../actions/set-motion-preference.js').Action | import('../actions/set-nickname.js').Action | import('../actions/set-placement-mode.js').Action | import('../actions/update-positions.js').Action | import('../actions/update-radii.js').Action} Action
 */

/**
 * Reducer to compute the new state
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {Action} action
 * @returns {import('../../data/initial-state.js').State}
 */
export function reducer (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ACTION_ADD_COORDINATE:
      return addCoordinate(state, payload);
    case ACTION_ADD_ENTITY:
      return addEntity(state, payload);
    case ACTION_CHECK_COLLISIONS:
      return checkCollisions(state);
    case ACTION_CHECK_LOOSE_CONDITION:
      return checkLooseCondition(state);
    case ACTION_CHECK_WIN_CONDITION:
      return checkWinCondition(state);
    case ACTION_CHOOSE_LEVEL:
      return chooseLevel(state, payload);
    case ACTION_CHOOSE_PARTY:
      return chooseParty(state, payload);
    case ACTION_NAVIGATE_TO_SCENE:
      return navigateToScene(state, payload);
    case ACTION_SAVE_DRAFT:
      return saveDraft(state);
    case ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES:
      return setDraftLevelMaxEnemies(state, payload);
    case ACTION_SET_DRAFT_LEVEL_MODE:
      return setDraftLevelMode(state, payload);
    case ACTION_SET_MOTION_PREFERENCE:
      return setMotionPreference(state, payload);
    case ACTION_SET_NICKAME:
      return setNickname(state, payload);
    case ACTION_SET_PLACEMENT_MODE:
      return setPlacementMode(state, payload);
    case ACTION_UPDATE_POSITIONS:
      return updatePositions(state);
    case ACTION_UPDATE_RADII:
      return updateRadii(state);
    default:
      return state;
  }
}
