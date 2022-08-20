/**
 * @typedef {'about-scene' | 'game-over-scene' | 'level-scene' | 'level-editor-scene' | 'new-game-scene' | 'settings-scene' | 'title-scene' | 'win-scene'} Scene
 */
/**
 * @typedef {Array<Scene>} Scenes
 */
/**
 * Component to create wrapping element around all others.
 * @argument {HTMLDivElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 */
export function wrapperComponent(targetElement: HTMLDivElement, state: import('../state/reducers/index.js').State): HTMLDivElement;
export type Scene = 'about-scene' | 'game-over-scene' | 'level-scene' | 'level-editor-scene' | 'new-game-scene' | 'settings-scene' | 'title-scene' | 'win-scene';
export type Scenes = Array<Scene>;
