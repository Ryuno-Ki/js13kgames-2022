import {
  ACTION_ADD_ENTITY,
  ACTION_ADD_PATHWAY_COORDINATE,
  ACTION_CHOOSE_LEVEL,
  ACTION_CHOOSE_PARTY,
  ACTION_NAVIGATE_TO_SCENE,
  ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES,
  ACTION_SET_DRAFT_LEVEL_MODE,
  ACTION_SET_NICKAME,
  ACTION_UPDATE_POSITIONS
} from '../../../shared/constants.js';
import { addEntity } from './add-entity.js';
import { addPathwayCoordinate } from './add-pathway-coordinate.js';
import { chooseLevel } from './choose-level.js';
import { chooseParty } from './choose-party.js';
import { navigateToScene } from './navigate-to-scene.js';
import { setDraftLevelMaxEnemies } from './set-draft-level-max-enemies.js';
import { setDraftLevelMode } from './set-draft-level-mode.js';
import { setNickname } from './set-nickname.js';
import { updatePositions } from './update-positions.js';

const initialState = {
  activeLevel: null,
  activeScene: 'title-scene',
  enemies: {
    death: [ '🪔', '🕯️', '📿','👼', '😇', '🎋' ],
    // Kudos: https://nitter.net/curtastic/status/1558507789118365696#m
    life: [ '🦇', '🕷️', '💀', '👺', '👹', '👻'],
  },
  levelDraft: {
    height: 320,
    width: 320,
    mode: null,
    maxEnemies: null,
    enemies: [],
    pathway: [],
    towers: []
  },
  levels: [{
    begin: null,
    height: 320,
    width: 320,
    mode: 'life',
    maxEnemies: 3,
    enemies: [],
    pathway: [
      [   0,  50 ],
      [  30,  50 ],
      [  30,  70 ],
      [  70,  70 ],
      [  70,  50 ],
      [ 100,  50 ]
    ],
    towers: [{
      position: [  28,  44 ],
      type: null,
    }, {
      position: [  36,  52 ],
      type: null,
    }],
  }, {
    begin: null,
    height: 320,
    width: 320,
    mode: 'death',
    maxEnemies: 5,
    enemies: [],
    pathway: [
      [   0,  50 ],
      [  30,  50 ],
      [  30,  70 ],
      [  70,  70 ],
      [  70,  50 ],
      [ 100,  50 ]
    ],
    towers: [{
      position: [  30,  44 ],
      type: null,
    }, {
      position: [  36,  50 ],
      type: null,
    }],
  }],
  player: {
    nickname: null,
    party: null,
  },
};

export function reducer (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case ACTION_ADD_ENTITY:
      return addEntity(state, action.payload);
    case ACTION_ADD_PATHWAY_COORDINATE:
      return addPathwayCoordinate(state, action.payload);
    case ACTION_CHOOSE_LEVEL:
      return chooseLevel(state, action.payload);
    case ACTION_CHOOSE_PARTY:
      return chooseParty(state, action.payload);
    case ACTION_NAVIGATE_TO_SCENE:
      return navigateToScene(state, action.payload);
    case ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES:
      return setDraftLevelMaxEnemies(state, action.payload);
    case ACTION_SET_DRAFT_LEVEL_MODE:
      return setDraftLevelMode(state, action.payload);
    case ACTION_SET_NICKAME:
      return setNickname(state, action.payload);
    case ACTION_UPDATE_POSITIONS:
      return updatePositions(state, action.payload);
    default:
      return state;
  }
}
