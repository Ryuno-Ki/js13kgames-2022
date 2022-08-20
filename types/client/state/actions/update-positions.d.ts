/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_UPDATE_POSITIONS} type
 * @property {object} payload
 */
/**
 * Action creator to trigger an update of all positions
 *
 * @returns {Action}
 */
export function updatePositions(): Action;
export type Action = {
    type: "POS";
    payload: object;
};
