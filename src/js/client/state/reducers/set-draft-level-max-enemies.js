export function setDraftLevelMaxEnemies (state, payload) {
  const { maxEnemies } = payload;

  const levelDraft = {
    ...state.levelDraft,
    maxEnemies,
  };

  return Object.assign({}, state, { levelDraft });
}
