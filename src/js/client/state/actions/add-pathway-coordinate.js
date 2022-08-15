import { ACTION_ADD_PATHWAY_COORDINATE } from '../../../shared/constants.js';

export function addPathwayCoordinate ({ pageX, pageY }, { left, top }) {
  const x = Math.round(pageX - left);
  const y = Math.round(pageY - top);

  return {
    type: ACTION_ADD_PATHWAY_COORDINATE,
    payload: {
      coordinate: [ x, y ],
    },
  };
}
