export function navigateToScene (state, payload) {
  const { scene } = payload;

  return Object.assign({}, state, { activeScene: scene });
}
