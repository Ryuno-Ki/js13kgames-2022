/**
 * Reducer to update the state with respect to the motion preference
 *
 * @argument {import('./index.js').State} state
 * @argument {import('../actions/set-motion-preference.js').Action['payload']} payload
 * @returns {import('./index.js').State}
 */
export function setMotionPreference (state, payload) {
  const { prefered } = payload;

  const settings = {
    ...state.settings,
    prefersReducedMotion: prefered,
  };

  return Object.assign({}, state, { settings });
}
