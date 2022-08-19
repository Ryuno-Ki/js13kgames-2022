export function updateRadii (state) {
  let levels = state.levels;

  if (state.activeScene === 'level-scene') {
    levels = state.levels.map((level, index) => {
      if (index === state.activeLevel) {
        return updateLevel(level);
      }

      return level;
    });
  }

  return Object.assign({}, state, { levels });
}

function updateLevel (level) {
  const baseRadius = 2;
  const growthRate = 0.01;

  return {
    ...level,
    enemies: level.enemies.map((enemy) => {
      return {
        ...enemy,
        radius: baseRadius + (enemy.radius + growthRate) % 4,
      };
    }),
  };
}
