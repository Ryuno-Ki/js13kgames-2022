import { pickLevel } from './helper.js';

/**
 * Component to render a level in SVG
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function levelComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));
  const { enemies, height, mode, width } = pickLevel(state);

  const fill = mode === 'death' ? 'black' : 'white';
  const stroke = mode === 'death' ? 'white' : 'black';

  element.innerHTML = `
    <rect x="0" y="0" height="${height}" width="${width}" fill="${fill}" />
    <g id="pathway" data-component="pathway" data-stroke="${stroke}"></g>
    <g id="enemies" data-component="enemies" data-enemies="${enemies.length}"></g>
    <g id="towers" data-component="towers" data-stroke="${stroke}"></g>
  `;

  return element;
}
