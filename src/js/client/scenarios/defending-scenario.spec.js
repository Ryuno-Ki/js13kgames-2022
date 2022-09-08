import { expect } from 'chai';

import { initialState } from '../data/initial-state.js';
import { addEntity } from '../state/actions/add-entity.js';
import { checkWinCondition } from '../state/actions/check-win-condition.js';
import { chooseLevel } from '../state/actions/choose-level.js';
import { chooseParty } from '../state/actions/choose-party.js';
import { navigateToScene } from '../state/actions/navigate-to-scene.js';
import { setNickname } from '../state/actions/set-nickname.js';
import store from '../state/store.js';

function resetState () {
  store.state = Object.assign({}, initialState);;
}

describe('Defending scenario', () => {
  beforeEach(() => {
    resetState();
  });

  it('should move to level as defender', async () => {
    // Arrange
    expect(store.getState()).to.deep.equal(initialState);

    // Act
    await store.dispatch(navigateToScene('new-game-scene'));
    await store.dispatch(setNickname('Johnny'));
    await store.dispatch(chooseParty('life'));
    await store.dispatch(chooseLevel('0'));
    await store.dispatch(navigateToScene('level-scene'));

    const state = store.getState();
    const [ level ] = state.levels;

    // Assert
    expect(state.activeScene).to.equal('level-scene');
    expect(state.player.nickname).to.equal('Johnny');
    expect(state.player.party).to.equal('life');
    expect(state.activeLevel).to.equal(0);
    expect(level.mode).to.equal('life');
    expect(level.enemies).to.have.lengthOf(level.maxEnemies);
  });

  it('should select a tower', async () => {
    // Arrange
    expect(store.getState()).to.deep.equal(initialState);
    const tower = initialState.entities.life[ 0 ];

    // Act
    await store.dispatch(navigateToScene('new-game-scene'));
    await store.dispatch(setNickname('Johnny'));
    await store.dispatch(chooseParty('life'));
    await store.dispatch(chooseLevel('0'));
    await store.dispatch(navigateToScene('level-scene'));
    await store.dispatch(addEntity(tower.icon, '0'));
    await store.dispatch(addEntity(tower.icon, '1'));

    const state = store.getState();
    const [ level ] = state.levels;
    const towers = level.towers.filter((tower) => tower.icon !== null);

    // Assert
    expect(level.enemies).to.have.lengthOf(level.maxEnemies);
    expect(level.towers).to.have.lengthOf(2);
    expect(towers).to.have.length(level.towers.length);
  });

  it('should not automatically win', async () => {
    // Arrange
    expect(store.getState()).to.deep.equal(initialState);
    const tower = initialState.entities.life[ 0 ];

    // Act
    await store.dispatch(navigateToScene('new-game-scene'));
    await store.dispatch(setNickname('Johnny'));
    await store.dispatch(chooseParty('life'));
    await store.dispatch(chooseLevel('0'));
    await store.dispatch(navigateToScene('level-scene'));
    await store.dispatch(addEntity(tower.icon, '0'));
    await store.dispatch(addEntity(tower.icon, '1'));
    await store.dispatch(checkWinCondition());

    const state = store.getState();

    // Assert
    expect(state.activeScene).to.equal('level-scene');
  });
});
