/**
 * @typedef {function} Component
 * @argument {HTMLElement} targetElement
 * @argument {import('./data/initial-state.js').State} state
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
 * @argument {import('./data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function render(root: HTMLElement, state: import('./data/initial-state.js').State): HTMLElement;
export type Component = Function;
