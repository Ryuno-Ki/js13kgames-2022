const registry = new Map();

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
export function add (name, component) {
	registry.set(name, renderWrapper(component));
}

/**
 * Renders a component
 *
 * @argument {HTMLElement} root
 * @argument {import('./data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function render (root, state) {
  /**
   * Helper function to operate on a copy of the root component
   *
   * @private
   * @argument {HTMLElement} root
   */
  function cloneComponent (root) {
    return /** @type {HTMLElement} */(root.cloneNode(true));
  }

  return renderWrapper(cloneComponent)(root, state);
}

/**
 * Helper function to wrap a component for recursion
 *
 * @private
 * @argument {Component} component
 * @returns {Component}
 */
function renderWrapper (component) {
  /**
   * Helper function that acts as a factory for components
   *
   * @private
   * @argument {HTMLElement} targetElement
   * @argument {import('./data/initial-state.js').State} state
   * @returns {HTMLElement}
   */
  return function (targetElement, state) {
    const element = component(targetElement, state);

    const childComponents = Array.from(element.querySelectorAll('[data-component]'));

    childComponents.forEach(function (target) {
      const name = target.dataset.component;

      const child = registry.get(name);

      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  }
}
