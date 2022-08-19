export function addEntity (state, payload) {
  const { entity } = payload;

  const levels = state.levels.map((level, index) => {
    if (index === state.activeLevel) {
      return updateLevel(state, level, entity);
    } else {
      return level;
    }
  });

  return Object.assign({}, state, { levels });
}

function updateLevel (state, level, entity) {
  const attackOrDefend = state.player.party === level.mode ? 'defend' : 'attack';

  if (attackOrDefend === 'attack') {
    return {
      ...level,
      enemies: updateEnemies(level, entity),
    };
  }

  return {
    ...level,
    towers: updateTowers(level, entity),
  };
}

function updateEnemies (level, entity) {
  const [ x, y ] = level.pathway[ 0 ];

  return [
    ...level.enemies,
    {
      icon: entity,
      position: [ x, y ],
      // TODO: Right now, it refers to the time in seconds it takes to
      // move along the whole pathway. I might need to change the
      // meaning in the future.
      speed: 10,
    }
  ];
}

function updateTowers (level, entity) {
  return level.towers.map(function (tower) {
    return {
      ...tower,
      type: entity,
    };
  });
}
