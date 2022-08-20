import { ACTION_ADD_ENTITY } from '../../../shared/constants.js';

/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_ADD_ENTITY} type
 * @property {object} payload
 * @property {string} payload.entity
 * @property {number} payload.index
 */

/**
 * Action creator to add a new entity to a level.
 *
 * @argument {string} entity
 * @argument {string} index
 * @returns {Action}
 */
export function addEntity (entity, index) {
  return {
    type: ACTION_ADD_ENTITY,
    payload: {
      entity,
      index: parseInt(index, 10),
    },
  };
}
