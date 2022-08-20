/**
 * @typedef {object} Action
 * @property {import('../../../shared/constants.js').ACTION_ADD_PATHWAY_COORDINATE} type
 * @property {object} payload
 * @property {Array<number>} payload.coordinate
 */
/**
 * Action creator to add a new coordinate to the pathway
 *
 * @argument {object} page
 * @argument {number} page.pageX
 * @argument {number} page.pageY
 * @argument {object} boundingRect
 * @argument {number} boundingRect.left
 * @argument {number} boundingRect.top
 * @returns {Action}
 */
export function addPathwayCoordinate({ pageX, pageY }: {
    pageX: number;
    pageY: number;
}, { left, top }: {
    left: number;
    top: number;
}): Action;
export type Action = {
    type: "ADD_COORD";
    payload: {
        coordinate: Array<number>;
    };
};
