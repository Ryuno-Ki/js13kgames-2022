/**
 * Reducer to compute the new state
 *
 * @argument {State} state
 * @argument {Action} action
 * @returns {State}
 */
export function reducer(state: State, action: Action): State;
export type Action = import('../actions/add-entity.js').Action | import('../actions/add-pathway-coordinate.js').Action | import('../actions/check-loose-condition.js').Action | import('../actions/check-win-condition.js').Action | import('../actions/choose-level.js').Action | import('../actions/choose-party.js').Action | import('../actions/navigate-to-scene.js').Action | import('../actions/set-draft-level-max-enemies.js').Action | import('../actions/set-draft-level-mode.js').Action | import('../actions/set-motion-preference.js').Action | import('../actions/set-nickname.js').Action | import('../actions/update-positions.js').Action | import('../actions/update-radii.js').Action;
export type Entity = {
    icon: string;
    radius: number;
    speed: number;
};
export type Enemy = {
    begin: number;
    icon: string;
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
    nickname: string | null;
    party: 'death' | 'life' | null;
};
export type State = {
    activeLevel: number | null;
    activeScene: import('../../components/wrapper.js').Scene;
    entities: {
        death: Array<Entity>;
        life: Array<Entity>;
    };
    levelDraft: DraftLevel;
    levels: Array<Level>;
    player: Player;
    settings: {
        prefersReducedMotion: boolean;
    };
};
