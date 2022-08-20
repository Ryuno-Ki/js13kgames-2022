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
export function addEntity(entity: string, index: string): Action;
export type Action = {
    type: "ADD_ENTITY";
    payload: {
        entity: string;
        index: number;
    };
};
