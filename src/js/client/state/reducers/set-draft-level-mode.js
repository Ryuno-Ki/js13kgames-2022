export function setDraftLevelMode (state, payload) {
  const { mode } = payload;

  const levelDraft = {
    ...state.levelDraft,
    mode,
  };

  return Object.assign({}, state, { levelDraft });
}
