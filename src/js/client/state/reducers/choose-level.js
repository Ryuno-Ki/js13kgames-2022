export function chooseLevel (state, payload) {
  const { level: activeLevel } = payload;

  return Object.assign({}, state, { activeLevel });
}
