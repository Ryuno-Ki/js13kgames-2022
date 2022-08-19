export function addEntity (state, payload) {
  const levels = state.levels.map((level, index) => {
    if (index === state.activeLevel) {
      return updateLevel(state, level, payload);
    } else {
      return level;
    }
  });

  return Object.assign({}, state, { levels });
}

function updateLevel (state, level, payload) {
  const { entity: entityIcon, index } = payload;
  const { party } = state.player;

  // FIXME: This is a hack. I have some knot in my mind to why I look it up
  // this way right now
  const side = party === 'death' ? 'life' : 'death';
  const entity = state.entities[ party ].find((e) => e.icon === entityIcon)
    || state.entities[ side ].find((e) => e.icon === entityIcon);

  const attackOrDefend = party === level.mode ? 'defend' : 'attack';

  if (attackOrDefend === 'attack') {
    return {
      ...level,
      enemies: updateEnemies(level, entity),
    };
  }

  return {
    ...level,
    towers: updateTowers(level, entity, index),
  };
}

function updateEnemies (level, entity) {
  const [ x, y ] = level.pathway[ 0 ];

  return [
    ...level.enemies,
    {
      ...entity,
      position: [ x, y ],
    }
  ];
}

function updateTowers (level, entity, index) {
  return level.towers.map(function (tower, i) {
    if (i === index) {
      return {
        ...tower,
        type: entity.icon
      };
    }

    return tower;
  });
}
