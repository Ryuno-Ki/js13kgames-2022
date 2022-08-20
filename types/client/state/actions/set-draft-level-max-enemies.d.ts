/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_DRAFT_LEVEL_MAX_ENEMIES} type
 * @property {object} payload
 * @property {number} payload.maxEnemies
 */
/**
 * Action creator for setting the maximum number of enemies in a draft level
 *
 * @argument {number} maxEnemies
 * @returns {Action}
 */
export function setDraftLevelMaxEnemies(maxEnemies: number): Action;
export type Action = {
    type: "DRAFT_MAX_ENEMIES";
    payload: {
        maxEnemies: number;
    };
};
