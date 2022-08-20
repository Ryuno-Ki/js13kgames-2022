/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_CHOOSE_LEVEL} type
 * @property {object} payload
 * @property {string} payload.level
 */
/**
 * Action creator to choose a level
 *
 * @argument {string} level
 * @returns {Action}
 */
export function chooseLevel(level: string): Action;
export type Action = {
    type: "LEVEL";
    payload: {
        level: string;
    };
};
