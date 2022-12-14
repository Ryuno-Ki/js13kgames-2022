/**
 * Reducer to update the state with respect to the mode in a draft level.
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-draft-level-mode.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setDraftLevelMode (state, payload) {
  const { mode } = payload;

  const levelDraft = {
    ...state.levelDraft,
    mode,
  };

  return Object.assign({}, state, { levelDraft });
}
