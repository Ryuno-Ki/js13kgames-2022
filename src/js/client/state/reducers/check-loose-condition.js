export function checkLooseCondition (state) {
  const hasLost = false;

  return Object.assign({}, state, { hasLost });
}
