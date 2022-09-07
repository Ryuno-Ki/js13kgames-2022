/**
 * Reducer to update the state with the chosen party
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/choose-party.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function chooseParty (state, payload) {
  const { party } = payload;

  const player = {
    ...state.player,
    party,
  };

  return Object.assign({}, state, { player });
}
