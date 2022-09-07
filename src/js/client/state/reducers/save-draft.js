/**
 * Reducer to add a new level
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {import('../../data/initial-state.js').State}
 */
export function saveDraft (state) {
	const activeScene = 'new-game-scene';
	const levels = [
		...state.levels,
		state.levelDraft,
	];
	const levelDraft = Object.assign({}, state.levelDraft);

	return Object.assign({}, state, { activeScene, levelDraft, levels });
}
