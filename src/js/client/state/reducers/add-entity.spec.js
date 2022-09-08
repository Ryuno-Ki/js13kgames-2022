import { expect } from 'chai';

import { initialState } from '../../data/initial-state.js';
import * as creator from '../actions/add-entity.js';
import { addEntity } from './add-entity.js';

describe('addEntity', () => {
  describe('when attacking', () => {
    it('should update the enemies', () => {
      // Arrange
      const player = {
        ...initialState.player,
        party: 'death',
      };
      const state = Object.assign({}, initialState, { activeLevel: 0, player });
      const [ entity ] = initialState.entities.death;
      const index = '0';
      const action = creator.addEntity(entity.icon, index);

      // Act
      const newState = addEntity(state, action.payload);
      const [ level ] = newState.levels;

      // Assert
      expect(newState).not.to.equal(initialState);
      expect(level.towers).to.deep.equal(initialState.levels[ 0 ].towers);
      expect(level.enemies.slice(1)).to.deep.equal(initialState.levels[ 0 ].enemies.slice(1));
      expect(level.enemies[ 0 ].begin).not.to.be.null;
      expect(level.enemies[ 0 ].icon).to.equal(entity.icon);
      expect(level.enemies[ 0 ].position).to.deep.equal(level.pathway[ 0 ]);
    });
  });

  describe('when defending', () => {
    it('should update the towers', () => {
      // Arrange
      const player = {
        ...initialState.player,
        party: 'life',
      };
      const state = Object.assign({}, initialState, { activeLevel: 0, player });
      const [ entity ] = initialState.entities.death;
      const index = '0';
      const action = creator.addEntity(entity.icon, index);

      // Act
      const newState = addEntity(state, action.payload);
      const [ level ] = newState.levels;

      // Assert
      expect(newState).not.to.equal(initialState);
      expect(level.enemies).to.deep.equal(initialState.levels[ 0 ].enemies);
      expect(level.towers.slice(1)).to.deep.equal(initialState.levels[ 0 ].towers.slice(1));
      expect(level.towers[ 0 ].icon).to.equal(entity.icon);
    });
  });
});
