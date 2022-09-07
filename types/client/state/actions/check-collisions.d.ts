/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHECK_COLLISIONS} type
 * @property {object} payload
 */
/**
 * Action creator to check for collisions
 *
 * @returns {Action}
 */
export function checkCollisions(): Action;
export type Action = {
    type: "HITS";
    payload: object;
};
