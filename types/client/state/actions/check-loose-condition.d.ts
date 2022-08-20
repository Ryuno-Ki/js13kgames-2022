/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHECK_LOOSE_CONDITION} type
 * @property {object} payload
 */
/**
 * Action creator to check on loose condition
 *
 * @returns {Action}
 */
export function checkLooseCondition(): Action;
export type Action = {
    type: "LOOSE";
    payload: object;
};
