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
 * @property {Player} player
 * @property {object} settings
 * @property {boolean} settings.prefersReducedMotion
 */
/** @type {State} */
export const initialState: State;
export type Entity = {
    icon: string;
    radius: number;
    speed: number;
};
export type Enemy = {
    begin: number;
    icon: string;
    life: number;
    position: Array<number>;
    radius: number;
    speed: number;
};
export type LineSegment = Array<number>;
export type Pathway = Array<number[]>;
export type Tower = {
    icon: string | null;
    position: Array<number>;
    radius: number;
};
export type DraftLevel = {
    begin: number | null;
    enemies: Array<Enemy>;
    height: number;
    maxEnemies: number | null;
    mode: 'death' | 'life' | null;
    pathway: Pathway;
    place: 'pathway' | 'tower';
    towers: Array<Tower>;
    width: number;
};
export type Level = {
    begin: number | null;
    enemies: Array<Enemy>;
    height: number;
    maxEnemies: number;
    mode: 'death' | 'life';
    pathway: Pathway;
    towers: Array<Tower>;
    width: number;
};
export type Player = {
    life: number;
    nickname: string | null;
    party: 'death' | 'life' | null;
};
export type State = {
    activeLevel: number | null;
    activeScene: import('../components/wrapper.js').Scene;
    entities: {
        death: Array<Entity>;
        life: Array<Entity>;
    };
    hasLost: boolean;
    hasWon: boolean;
    levelDraft: DraftLevel;
    levels: Array<Level>;
    player: Player;
    settings: {
        prefersReducedMotion: boolean;
    };
};
