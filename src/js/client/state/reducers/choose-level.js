export function chooseLevel (state, payload) {
  const { level } = payload;
  let activeLevel = parseInt(level, 10);

  if (isNaN(activeLevel)) {
    activeLevel = null;
  }

  return Object.assign({}, state, { activeLevel });
}
