import { isPlayerDefender } from '../../components/helper.js';

/**
 * Reducer to add an entity to the current level as enemy or tower
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/add-entity.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
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

/**
 * Helper function to update a single level
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level} level
 * @argument {import('../actions/add-entity.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').Level}
 */
function updateLevel (state, level, payload) {
  const { entity: entityIcon, index } = payload;
  const party = /** @type {'death' | 'life'} */(state.player.party);

  // FIXME: This is a hack. I have some knot in my mind to why I look it up
  // this way right now
  const side = party === 'death' ? 'life' : 'death';
  const entity = state.entities[ party ].find((e) => e.icon === entityIcon)
    || state.entities[ side ].find((e) => e.icon === entityIcon);

  const attackOrDefend = isPlayerDefender(state, level) ? 'defend' : 'attack';

  if (attackOrDefend === 'attack') {
    return {
      ...level,
      // TODO: From the perspective of tsc, entity could be undefined
      // @ts-ignore
      enemies: updateEnemies(level, entity),
    };
  }

  return {
    ...level,
    // TODO: From the perspective of tsc, entity could be undefined
    // @ts-ignore
    towers: updateTowers(level, entity, index),
  };
}

/**
 * Helper function to update all enemies
 *
 * @private
 * @argument {import('../../data/initial-state.js').Level} level
 * @argument {import('../../data/initial-state.js').Enemy} entity
 * @returns {Array<import('../../data/initial-state.js').Enemy>}
 */
function updateEnemies (level, entity) {
  const [ x, y ] = level.pathway[ 0 ];

  return [
    ...level.enemies,
    {
      ...entity,
      begin: Date.now().valueOf(),
      position: [ x, y ],
    }
  ];
}

/**
 * Helper function to update all towers.
 *
 * @private
 * @argument {import('../../data/initial-state.js').Level} level
 * @argument {import('../../data/initial-state.js').Enemy} entity
 * @argument {number} index
 * @returns {Array<import('../../data/initial-state.js').Tower>}
 */
function updateTowers (level, entity, index) {
  return level.towers.map(function (tower, i) {
    if (i === index) {
      return {
        ...tower,
        ...entity,
      };
    }

    return tower;
  });
}
