/**
 * @typedef {function} Component
 * @argument {HTMLElement} targetElement
 * @argument {import('./state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
/**
 * Registers a new component by name
 *
 * @argument {string} name
 * @argument {Component} component
 */
export function add(name: string, component: Component): void;
/**
 * Renders a component
 *
 * @argument {HTMLElement} root
 * @argument {import('./state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function render(root: HTMLElement, state: import('./state/reducers/index.js').State): HTMLElement;
export type Component = Function;
