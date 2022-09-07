/**
 * Reducer to control what gets changed on click on a level in level editor
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-placement-mode.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setPlacementMode (state, payload) {
	const { mode } = payload;

	const levelDraft = {
		...state.levelDraft,
		place: mode,
	};

	return Object.assign({}, state, { levelDraft });
}
