import {
  ACTION_ADD_ENEMY,
  ACTION_CHOOSE_PARTY,
  ACTION_NAVIGATE_TO_SCENE,
  ACTION_SET_NICKAME
} from '../../../shared/constants.js';
import { addEnemy } from './add-enemy.js';
import {chooseParty} from './choose-party.js';
import { navigateToScene } from './navigate-to-scene.js';
import {setNickname} from './set-nickname.js';

const initialState = {
  activeLevel: 0,
  activeScene: 'title-scene',
  enemies: {
    death: [ '🪔', '🕯️', '📿','👼', '😇', '🎋' ],
    // Kudos: https://nitter.net/curtastic/status/1558507789118365696#m
    life: [ '🦇', '🕷️', '💀', '👺', '👹', '👻'],
  },
  levels: [{
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
    case ACTION_ADD_ENEMY:
      return addEnemy(state, action.payload);
    case ACTION_CHOOSE_PARTY:
      return chooseParty(state, action.payload);
    case ACTION_NAVIGATE_TO_SCENE:
      return navigateToScene(state, action.payload);
    case ACTION_SET_NICKAME:
      return setNickname(state, action.payload);
    default:
      return state;
  }
}
