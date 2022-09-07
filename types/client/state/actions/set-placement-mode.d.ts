/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_PLACEMENT_MODE} type
 * @property {object} payload
 * @property {'pathway' | 'tower'} payload.mode
 */
/**
 * Action creator to switch the interpretation of clicks in level editor
 *
 * @argument {'pathway' | 'tower'} mode
 * @returns {Action}
 */
export function setPlacementMode(mode: 'pathway' | 'tower'): Action;
export type Action = {
    type: "PLACE";
    payload: {
        mode: 'pathway' | 'tower';
    };
};
