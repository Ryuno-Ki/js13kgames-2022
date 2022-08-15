import { pickLevel } from '../../components/helper.js';

export function addPathwayCoordinate (state, payload) {
  const level = pickLevel(state);

  const { coordinate } = payload;
  const [ x, y ] = coordinate;

  const pathway = [
    ...state.levelDraft.pathway,
    [ scaleX(x, level.width), scaleY(y, level.height) ],
  ];

  const levelDraft = {
    ...state.levelDraft,
    pathway,
  };

  console.log('New coordinate', coordinate, pathway, levelDraft);
  return Object.assign({}, state, { levelDraft });
}

function scaleX (x, width) {
  return Math.round(100 * x / width);
}

function scaleY (y, height) {
  return Math.round(100 * y / height);
}
