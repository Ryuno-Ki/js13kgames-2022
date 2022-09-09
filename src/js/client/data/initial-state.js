import death from './entities/death.json' assert {type: 'json'};
import life from './entities/life.json' assert {type: 'json'};
import levelDraft from './levels/draft.json' assert {type: 'json'};
import levels from './levels/index.json' assert {type: 'json'};

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
 * @property {number} life
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
 * @property {import('../components/wrapper.js').Scene} activeScene
 * @property {object} entities
 * @property {Array<Entity>} entities.death
 * @property {Array<Entity>} entities.life
 * @property {boolean} hasLost
 * @property {boolean} hasWon
 * @property {DraftLevel} levelDraft
 * @property {Array<Level>} levels
 * @property {string} mastodon
 * @property {Player} player
 * @property {object} settings
 * @property {boolean} settings.prefersReducedMotion
 */

/** @type {State} */
export const initialState = {
  activeLevel: null,
  activeScene: /** @type {import('../components/wrapper.js').Scene} */('title-scene'),
  settings: {
    prefersReducedMotion: false,
  },
  hasLost: false,
  hasWon: false,
  entities: {
    // Kudos: https://nitter.net/curtastic/status/1558507789118365696#m
    death: /** @type {Array<Entity>} */(death),
    life: /** @type {Array<Entity>} */(life),
  },
  levelDraft: /** @type {DraftLevel} */(levelDraft),
  levels: /** @type {Array<Level>} */(levels),
  mastodon: 'https://layer8.space',
  player: {
    life: 1,
    nickname: null,
    party: null,
  },
};
