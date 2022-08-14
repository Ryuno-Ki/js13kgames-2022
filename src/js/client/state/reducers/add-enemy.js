export function addEnemy (state, payload) {
  const { enemy } = payload;

  const levels = state.levels.map((level, index) => {
    if (index === state.activeLevel) {
      return {
        ...level,
        enemies: [
          ...level.enemies,
          enemy
        ],
      };
    } else {
      return level;
    }
  });

  return Object.assign({}, state, { levels });
}
