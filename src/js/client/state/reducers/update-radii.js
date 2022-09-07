/**
 * Update all radii on the current level.
 *
 * @argument {import('../../data/initial-state.js').State} state
 * return {import('../../data/initial-state.js').State} the new State
 */
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

/**
 * Helper function to update a single level
 *
 * @private
 * @argument {import('../../data/initial-state.js').Level} level
 * @returns {import('../../data/initial-state.js').Level}
 */
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
    towers: level.towers.map((tower) => {
      if (tower.icon) {
        return {
          ...tower,
          radius: baseRadius + (tower.radius + growthRate) % 4,
        };
      }

      return tower;
    }),
  };
}
