import { death } from './entities/death.js';
import { life } from './entities/life.js';
import { levelDraft } from './levels/draft.js';

export const initialState = {
  activeLevel: null,
  activeScene: /** @type {import('../components/wrapper.js').Scene} */('title-scene'),
  settings: {
    prefersReducedMotion: false,
  },
  hasWon: false,
  hasLost: false,
  entities: {
    death,
    // Kudos: https://nitter.net/curtastic/status/1558507789118365696#m
    life,
  },
  levelDraft,
  levels: [{
    // TODO: Refactor. Should be set for each added enemy to let them move
    // independently
    begin: null,
    height: 320,
    width: 320,
    mode: /** @type {'life'} */('life'),
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
    // TODO: Add another property to control current sight radius
    towers: [{
      icon: null,
      position: [  28,  44 ],
      radius: 2,
      type: null,
    }, {
      icon: null,
      position: [  36,  52 ],
      radius: 2,
      type: null,
    }],
  }, {
    begin: null,
    height: 320,
    width: 320,
    mode: /** @type {'death'} */('death'),
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
      icon: null,
      position: [  30,  44 ],
      radius: 4,
    }, {
      icon: null,
      position: [  36,  50 ],
      radius: 4,
    }],
  }],
  player: {
    nickname: null,
    party: null,
  },
};
