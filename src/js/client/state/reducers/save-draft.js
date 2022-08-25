/**
 * Reducer to add a new level
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/save-draft.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function saveDraft (state, payload) {
	const activeScene = 'new-game-scene';
	const levels = [
		...state.levels,
		state.levelDraft,
	];
	const levelDraft = Object.assign({}, state.levelDraft);

	return Object.assign({}, state, { activeScene, levelDraft, levels });
}
