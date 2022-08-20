/**
 * Update all radii on the current level.
 *
 * @argument {import('./index.js').State} state
 * return {import('./index.js').State} the new State
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
 * @argument {import('./index.js').Level} level
 * @returns {import('./index.js').Level}
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
