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
 * @typedef {object} Entity
 * @property {string} icon
 * @property {number} radius
 * @property {number} speed
 */

/**
 * @typedef {object} Enemy
 * @property {number} begin
 * @property {string} icon
 * @property {Array<number>} position
 * @property {number} radius
 * @property {number} speed
 */

/**
 * @typedef {Array<number>} LineSegment
 */

/**
 * @typedef {Array<LineSegment>} Pathway
 */

/**
 * @typedef {object} Tower
 * @property {string | null} icon
 * @property {Array<number>} position
 * @property {number} radius
 */

/**
 * @typedef {object} DraftLevel
 * @property {number | null} begin
 * @property {Array<Enemy>} enemies
 * @property {number} height
 * @property {number | null} maxEnemies
 * @property {'death' | 'life' | null} mode
 * @property {Pathway} pathway
 * @property {'pathway' | 'tower'} place
 * @property {Array<Tower>} towers
 * @property {number} width
 */

/**
 * @typedef {object} Level
 * @property {number | null} begin
 * @property {Array<Enemy>} enemies
 * @property {number} height
 * @property {number} maxEnemies
 * @property {'death' | 'life'} mode
 * @property {Pathway} pathway
 * @property {Array<Tower>} towers
 * @property {number} width
 */

/**
 * @typedef {object} Player
 * @property {number} life
 * @property {string | null} nickname
 * @property {'death' | 'life' | null} party
 */

/**
 * @typedef {object} State
 * @property {number | null} activeLevel
 * @property {import('../../components/wrapper.js').Scene} activeScene
 * @property {object} entities
 * @property {Array<Entity>} entities.death
 * @property {Array<Entity>} entities.life
 * @property {DraftLevel} levelDraft
 * @property {Array<Level>} levels
 * @property {Player} player
 * @property {object} settings
 * @property {boolean} settings.prefersReducedMotion
 */

/**
 * Reducer to compute the new state
 *
 * @argument {State} state
 * @argument {Action} action
 * @returns {State}
 */
export function reducer (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case ACTION_ADD_COORDINATE:
      return addCoordinate(state, action.payload);
    case ACTION_ADD_ENTITY:
      return addEntity(state, action.payload);
    case ACTION_CHECK_COLLISIONS:
      return checkCollisions(state);
    case ACTION_CHECK_LOOSE_CONDITION:
      return checkLooseCondition(state);
    case ACTION_CHECK_WIN_CONDITION:
      return checkWinCondition(state);
    case ACTION_CHOOSE_LEVEL:
      return chooseLevel(state, action.payload);
    case ACTION_CHOOSE_PARTY:
      return chooseParty(state, action.payload);
    case ACTION_NAVIGATE_TO_SCENE:
      return navigateToScene(state, action.payload);
    case ACTION_SAVE_DRAFT:
      return saveDraft(state, action.payload);
    case ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES:
      return setDraftLevelMaxEnemies(state, action.payload);
    case ACTION_SET_DRAFT_LEVEL_MODE:
      return setDraftLevelMode(state, action.payload);
    case ACTION_SET_MOTION_PREFERENCE:
      return setMotionPreference(state, action.payload);
    case ACTION_SET_NICKAME:
      return setNickname(state, action.payload);
    case ACTION_SET_PLACEMENT_MODE:
      return setPlacementMode(state, action.payload);
    case ACTION_UPDATE_POSITIONS:
      return updatePositions(state);
    case ACTION_UPDATE_RADII:
      return updateRadii(state);
    default:
      return state;
  }
}
