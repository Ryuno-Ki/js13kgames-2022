/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_MOTION_PREFERENCE} type
 * @property {object} payload
 * @property {boolean} payload.prefered
 */
/**
 * Action creator for setting the motion preference
 *
 * @argument {boolean} prefered
 * @returns {Action}
 */
export function setMotionPreference(prefered: boolean): Action;
export type Action = {
    type: "MOTION";
    payload: {
        prefered: boolean;
    };
};
