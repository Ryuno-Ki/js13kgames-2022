export function chooseParty (state, payload) {
  const { party } = payload;

  const player = {
    ...state.player,
    party,
  };

  return Object.assign({}, state, { player });
}
