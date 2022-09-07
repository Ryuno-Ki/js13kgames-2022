/**
 * Reducer to update the state with a chosen level
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/choose-level.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function chooseLevel (state, payload) {
  const { level } = payload;
  /** @type {number | null} */
  let activeLevel = parseInt(level, 10);

  if (isNaN(activeLevel)) {
    activeLevel = null;
  }

  return Object.assign({}, state, { activeLevel });
}
