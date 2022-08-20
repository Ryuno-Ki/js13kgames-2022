/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_UPDATE_RADII} type
 * @property {object} payload
 */
/**
 * Action creator to trigger an update of all radii
 *
 * @returns {Action}
 */
export function updateRadii(): Action;
export type Action = {
    type: "RADII";
    payload: object;
};
