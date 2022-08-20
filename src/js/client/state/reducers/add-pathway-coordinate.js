import { pickLevel } from '../../components/helper.js';

/**
 * Reducer to update the state with a new pathway coordinate
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/add-pathway-coordinate.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function addPathwayCoordinate (state, payload) {
  const level = pickLevel(state);

  const { coordinate } = payload;
  const [ x, y ] = coordinate;

  const pathway = [
    ...state.levelDraft.pathway,
    [ scaleX(x, level.width), scaleY(y, level.height) ],
  ];

  const levelDraft = {
    ...state.levelDraft,
    pathway,
  };

  return Object.assign({}, state, { levelDraft });
}

/**
 * Helper function to scale x to the SVG coordinate system
 *
 * @private
 * @argument {number} x
 * @argument {number} width
 * @returns {number}
 */
function scaleX (x, width) {
  return Math.round(100 * x / width);
}

/**
 * Helper function to scale y to the SVG coordinate system
 *
 * @private
 * @argument {number} y
 * @argument {number} height
 * @returns {number}
 */
function scaleY (y, height) {
  return Math.round(100 * y / height);
}
