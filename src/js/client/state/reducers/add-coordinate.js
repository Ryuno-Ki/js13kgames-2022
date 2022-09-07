import { pickLevel } from '../../components/helper.js';

/**
 * Reducer to update the state with a new pathway coordinate
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/add-coordinate.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function addCoordinate (state, payload) {
	const { maxEnemies, place, towers } = state.levelDraft;

  const levelDraft = {
    ...state.levelDraft,
    pathway: place === 'pathway' ? updatePathway(state, payload) : state.levelDraft.pathway,
		place: maxEnemies !== null && towers.length < maxEnemies ? state.levelDraft.place : 'pathway',
		towers: place === 'tower' ? updateTowers(state, payload) : state.levelDraft.towers,
  };

  return Object.assign({}, state, { levelDraft });
}

/**
 * Helper function to update the pathway
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/add-coordinate.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').Pathway}
 */		
function updatePathway (state, payload) {
  const level = pickLevel(state);

  const { coordinate } = payload;
  const [ x, y ] = coordinate;

	return [
    ...state.levelDraft.pathway,
    [ scaleX(x, level.width), scaleY(y, level.height) ],
  ];
}

/**
 * Helper function to update the towers
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/add-coordinate.js').Action['payload']} payload
 * @returns {Array<import('../../data/initial-state.js').Tower>}
 */		
function updateTowers (state, payload) {
  const level = pickLevel(state);

  const { coordinate } = payload;
  const [ x, y ] = coordinate;

	return state.levelDraft.towers.concat({
		icon: null,
    position: [ scaleX(x, level.width), scaleY(y, level.height) ],
		radius: 4
	});
}

/**
 * Helper function to scale x to the SVG coordinate system
 *
 * @private
 * @argument {number} x
 * @argument {number} width
 * @returns {number}
 */
function scaleX (x, width) {
  return Math.round(100 * x / width);
}

/**
 * Helper function to scale y to the SVG coordinate system
 *
 * @private
 * @argument {number} y
 * @argument {number} height
 * @returns {number}
 */
function scaleY (y, height) {
  return Math.round(100 * y / height);
}
