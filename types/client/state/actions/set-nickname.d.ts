/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_SET_NICKAME} type
 * @property {object} payload
 * @property {string} payload.nickname
 */
/**
 * Action creator for setting a nickname
 *
 * @argument {string} nickname
 * @returns {Action}
 */
export function setNickname(nickname: string): Action;
export type Action = {
    type: "NICKNAME";
    payload: {
        nickname: string;
    };
};
