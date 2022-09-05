import { death } from './entities/death.js';
import { life } from './entities/life.js';
import { levelDraft } from './levels/draft.js';
import { levels } from './levels/index.js';

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
    life,
  },
  levelDraft,
  levels,
  player: {
		life: 1,
    nickname: null,
    party: null,
  },
};
