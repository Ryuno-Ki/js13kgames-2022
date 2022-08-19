export function setMotionPreference (state, payload) {
  const { prefered } = payload;

  const settings = {
    ...state.settings,
    prefersReducedMotion: prefered,
  };

  return Object.assign({}, state, { settings });
}
