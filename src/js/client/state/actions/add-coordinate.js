import { ACTION_ADD_COORDINATE } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_ADD_COORDINATE} type
 * @property {object} payload
 * @property {Array<number>} payload.coordinate
 */

/**
 * Action creator to add a new coordinate to the pathway
 *
 * @argument {object} page
 * @argument {number} page.pageX
 * @argument {number} page.pageY
 * @argument {object} boundingRect
 * @argument {number} boundingRect.left
 * @argument {number} boundingRect.top
 * @returns {Action}
 */
export function addCoordinate ({ pageX, pageY }, { left, top }) {
  const x = Math.round(pageX - left);
  const y = Math.round(pageY - top);

  return {
    type: ACTION_ADD_COORDINATE,
    payload: {
      coordinate: [ x, y ],
    },
  };
}
