import { mapCoordinatesToPath, pickLevel } from './helper.js';

/**
 * Component for rendering the pathway in SVG
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function pathwayComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));
  const stroke = element.dataset.stroke;

  const { pathway } = pickLevel(state);
  const path = mapCoordinatesToPath(pathway);

  element.innerHTML = `
    ${getStartingPoint(pathway)}
    <path d="${path}" stroke="${stroke}" strokeWidth="6" fill="none" />
    ${getEndpoint(pathway)}
  `;

  return element;
}

/**
 * Helper function to render the starting point if there is a pathway
 *
 * @private
 * @argument {import('../state/reducers/index.js').Pathway} pathway
 * @returns {string}
 */
function getStartingPoint (pathway) {
  if (pathway.length === 0) {
    return '';
  }

  // TODO: Depends on level mode!
  const begin = '🪦';
  const [ beginX, beginY ] = pathway[ 0 ];
  return `<text x="${beginX}" y="${beginY}">${begin}</text>`;
}

/**
 * Helper function to render the ending point if there is a pathway
 *
 * @private
 * @argument {import('../state/reducers/index.js').Pathway} pathway
 * @returns {string}
 */
function getEndpoint (pathway) {
  if (pathway.length < 2) {
    return '';
  }

  // TODO: Depends on level mode!
  const fin = '🛐';
  const [ finX, finY ] = pathway[ pathway.length - 1 ];

  return `<text x="${finX}" y="${finY}">${fin}</text>`;
}
