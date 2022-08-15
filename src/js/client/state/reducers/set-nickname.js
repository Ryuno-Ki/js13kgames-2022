export function setNickname (state, payload) {
  const { nickname } = payload;
  const player = {
    ...state.player,
    nickname,
  };

  return Object.assign({}, state, { player });
}
