/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHECK_WIN_CONDITION} type
 * @property {object} payload
 */
/**
 * Action creator to check on win condition
 *
 * @returns {Action}
 */
export function checkWinCondition(): Action;
export type Action = {
    type: "WIN";
    payload: object;
};
