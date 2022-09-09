import { isPlayerDefender, pickLevel } from '../../components/helper.js';
import { initialState } from '../../data/initial-state.js';

/**
 * Reducer to update the state with the active scene.
 *
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/navigate-to-scene.js').Action['payload']} payload
 * @returns {import('../../data/initial-state.js').State}
 */
export function navigateToScene (state, payload) {
  const { scene } = payload;
  const levels = updateLevels(state, scene);
  const player = updatePlayer(state, scene);

  return Object.assign({}, state, { activeScene: scene, levels, player });
}

/**
 * Helper function to update all levels
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/navigate-to-scene.js').Action['payload']['scene']} scene
 * @returns {Array<import('../../data/initial-state.js').Level>}
 */
function updateLevels (state, scene) {
  const levels = state.levels.map(function (level, index) {
    if (scene === 'title-scene') {
      // Reset level
      return Object.assign({}, initialState.levels[ index ]);
    }

    if (scene === 'level-scene') {
      return updateLevel(state, level);
    }

    return level;
  });

  return levels;
}

/**
 * Helper function to update a single level
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level} level
 * @returns {import('../../data/initial-state.js').Level}
 */
function updateLevel (state, level) {
  return {
    ...level,
    begin: Date.now().valueOf(),
    enemies: updateEnemies(state, level),
    towers: updateTowers(state, level),
  };
}

/**
 * Helper function to update all enemies for the level
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level} level
 * @returns {Array<import('../../data/initial-state.js').Enemy>}
 */
function updateEnemies (state, level) {
  return level.enemies.map((enemy) => {
    return updateEnemy(state, level, enemy);
  });
}

/**
 * Helper function to update a single enemy of the level
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level} level
 * @argument {import('../../data/initial-state.js').Enemy} enemy
 * @returns {import('../../data/initial-state.js').Enemy}
 */
function updateEnemy (state, level, enemy) {
  if (isPlayerDefender(state, level)) {
    return {
      ...enemy,
      ...pickRandomEntity(state, level.mode),
    }
  }

  // Controlled by player, so don't touch it
  return enemy;
}

/**
 * Helper function to update all towers for the level
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level} level
 * @returns {Array<import('../../data/initial-state.js').Tower>}
 */
function updateTowers (state, level) {
  return level.towers.map((tower) => {
    return updateTower(state, level, tower);
  });
}

/**
 * Helper function to update a single tower of the level
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level} level
 * @argument {import('../../data/initial-state.js').Tower} tower
 * @returns {import('../../data/initial-state.js').Tower}
 */
function updateTower (state, level, tower) {
  if (isPlayerDefender(state, level)) {
    // Controlled by player, so don't touch it
    return tower;
  }

  return {
    ...tower,
    ...pickRandomEntity(state, level.mode),
  };
}

/**
 * Helper function to pick a random icon for a tower
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../../data/initial-state.js').Level['mode']} mode
 * @returns {import('../../data/initial-state.js').Entity}
 */
function pickRandomEntity (state, mode) {
  if (mode === 'life') {
    return pickRandomFromArray(state.entities.death);
  }

  return pickRandomFromArray(state.entities.life);
}

/**
 * Helper function to pick a random element from an array
 *
 * @private
 * @argument {Array<*>} array
 * @returns {*}
 */
function pickRandomFromArray (array) {
  return array[ Math.floor(Math.random() * array.length) ];
}

/**
 * Helper function to update the player
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @argument {import('../actions/navigate-to-scene.js').Action['payload']['scene']} scene
 * @returns {import('../../data/initial-state.js').Player}
 */
function updatePlayer (state, scene) {
  if (scene === 'title-scene') {
    return Object.assign({}, initialState.player);
  }

  if (scene !== 'level-scene') {
    return state.player;
  }

  if (isPlayerDefender(state)) {
    return updateDefendingPlayer(state);
  } else {
    return updateAttackingPlayer(state);
  }
}

/**
 * Helper function to update the player if defending
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {import('../../data/initial-state.js').Player}
 */
function updateDefendingPlayer (state) {
  return {
    ...state.player,
    life: 1,
  };
}

/**
 * Helper function to update the player if attacking
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {import('../../data/initial-state.js').Player}
 */
function updateAttackingPlayer (state) {
  return {
    ...state.player,
    life: pickLevel(state).maxEnemies || 0,
  };
}
