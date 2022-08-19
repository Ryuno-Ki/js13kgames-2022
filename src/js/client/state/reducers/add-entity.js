export function addEntity (state, payload) {
  const { entity } = payload;

  const levels = state.levels.map((level, index) => {
    if (index === state.activeLevel) {
      const [ x, y ] = level.pathway[ 0 ];

      return {
        ...level,
        enemies: [
          ...level.enemies,
          {
            icon: entity,
            position: [ x, y ],
            // TODO: Right now, it refers to the time in seconds it takes to
            // move along the whole pathway. I might need to change the
            // meaning in the future.
            speed: 10,
          }
        ],
      };
    } else {
      return level;
    }
  });

  return Object.assign({}, state, { levels });
}
