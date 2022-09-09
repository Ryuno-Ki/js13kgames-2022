/**
 * Reducer to set another mastodon instance
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/set-mastodon-instance.js').Action['payload']}  payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function setMastodonInstance (state, payload) {
  const { instance: mastodon } = payload;

  return Object.assign({}, state, { mastodon });
}
