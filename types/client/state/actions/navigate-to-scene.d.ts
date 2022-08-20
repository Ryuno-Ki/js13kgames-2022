/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_NAVIGATE_TO_SCENE} type
 * @property {object} payload
 * @property {import('../../components/wrapper.js').Scene} payload.scene
 */
/**
 * Action creator to navigate to another scene
 *
 * @argument {import('../../components/wrapper.js').Scene} scene
 * @returns {Action}
 */
export function navigateToScene(scene: import('../../components/wrapper.js').Scene): Action;
export type Action = {
    type: "NAV";
    payload: {
        scene: import('../../components/wrapper.js').Scene;
    };
};
