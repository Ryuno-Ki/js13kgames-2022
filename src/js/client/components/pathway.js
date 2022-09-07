import { mapCoordinatesToPath, pickLevel } from './helper.js';

/**
 * Component for rendering the pathway in SVG
 *
 * @argument {SVGGElement} targetElement
 * @argument {import('../data/initial-state.js').State} state
 * @returns {SVGGElement}
 */
export function pathwayComponent (targetElement, state) {
  const element = /** @type {SVGGElement} */(targetElement.cloneNode(true));
  const stroke = element.dataset.stroke;

  const { mode, pathway } = pickLevel(state);
  const path = mapCoordinatesToPath(pathway);

  element.innerHTML = `
    ${getStartingPoint(mode, pathway)}
    <path d="${path}" stroke="${stroke}" strokeWidth="6" fill="none" />
    ${getEndpoint(mode, pathway)}
  `;

  return element;
}

/**
 * Helper function to render the starting point if there is a pathway
 *
 * @private
 * @argument {import('../data/initial-state.js').Level['mode'] | null} mode
 * @argument {import('../data/initial-state.js').Pathway} pathway
 * @returns {string}
 */
function getStartingPoint (mode, pathway) {
  if (pathway.length === 0) {
    return '';
  }

  const begin = mode === 'life' ? '🛐' : '🪦';
  const [ beginX, beginY ] = pathway[ 0 ];
  return `<text x="${beginX}" y="${beginY}">${begin}</text>`;
}

/**
 * Helper function to render the ending point if there is a pathway
 *
 * @private
 * @argument {import('../data/initial-state.js').Level['mode'] | null} mode
 * @argument {import('../data/initial-state.js').Pathway} pathway
 * @returns {string}
 */
function getEndpoint (mode, pathway) {
  if (pathway.length < 2) {
    return '';
  }

  const fin = mode === 'death' ? '🛐' : '🪦';
  const [ finX, finY ] = pathway[ pathway.length - 1 ];

  return `<text x="${finX}" y="${finY}">${fin}</text>`;
}
