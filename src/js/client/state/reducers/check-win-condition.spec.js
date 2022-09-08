import { expect } from 'chai';

import { isPlayerDefender } from '../../components/helper.js';
import { initialState } from '../../data/initial-state.js';
import { checkWinCondition } from './check-win-condition.js';

describe('checkWinCondition', () => {
  it('should return the state when not on level scene', () => {
    // Arrange
    const state = initialState;

    // Act
    const newState = checkWinCondition(state);

    // Assert
    expect(newState).to.equal(initialState);
  });

  describe('when not meeting criteria', () => {
    it('should return a new state without changes', () => {
      // Arrange
      const activeLevel = 0;
      const activeScene = 'level-scene';
      const state = Object.assign({}, initialState, { activeLevel, activeScene });

      // Act
      const newState = checkWinCondition(state);

      // Assert
      expect(newState).not.to.equal(initialState);
      expect(newState.activeScene).to.equal(activeScene);
    });
  });

  describe('when meeting criteria', () => {
    describe('when player is attacking', () => {
      it('should navigate to win scene', () => {
        // Arrange
        const activeLevel = 0;
        const activeScene = 'level-scene';
        const levels = initialState.levels.map((lvl) => {
          const position = lvl.pathway[ lvl.pathway.length - 1 ];

          return {
            ...lvl,
            enemies: /** @type {Array<import('../../data/initial-state.js').Enemy>} */([{
              begin: 1,
              icon: '',
              life: 1,
              position,
              radius: 1,
              speed: 1,
            }])
          };
        });
        const player = {
          ...initialState.player,
          party: 'death',
        };

        const state = Object.assign(
          {},
          initialState,
          { activeLevel, activeScene, levels, player }
        );
  
        // Act
        const newState = checkWinCondition(state);
        const level = newState.levels[ activeLevel ];
        const { enemies: newEnemies } = level;
  
        // Assert
        expect(newState).not.to.equal(initialState);
        expect(isPlayerDefender(newState, level)).to.be.false;
        expect(newEnemies.filter((e) => e.life > 0)).to.have.length.greaterThan(0);
        expect(newState.player.life).to.be.greaterThan(0);
        expect(newState.hasWon).to.be.true;
        expect(newState.activeScene).to.equal('win-scene');
      });
    });

    describe('when player is defending', () => {
      it('should navigate to win scene', () => {
        // Arrange
        const activeLevel = 0;
        const activeScene = 'level-scene';
        const player = {
          ...initialState.player,
          party: 'life',
        };
        const state = Object.assign({}, initialState, { activeLevel, activeScene, player });
  
        // Act
        const newState = checkWinCondition(state);
        const level = newState.levels[ activeLevel ];
        const { enemies } = level;
  
        // Assert
        expect(newState).not.to.equal(initialState);
        expect(isPlayerDefender(newState, level)).to.be.true;
        expect(enemies.filter((e) => e.life > 0)).to.have.length(0);
        expect(newState.player.life).to.be.greaterThan(0);
        expect(newState.hasWon).to.be.true;
        expect(newState.activeScene).to.equal('win-scene');
      });
    });
  });
});
