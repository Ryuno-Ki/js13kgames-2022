import { expect } from 'chai';

import { ACTION_SAVE_DRAFT } from '../../shared/constants.js';
import { initialState } from '../data/initial-state.js';
import store from './store.js';

describe('Store', () => {
	it('should instantiate', () => {
		// Arrange
		// Nothing to prepare here

		// Act
		// Nothing to do here

		// Assert
		expect(store).to.not.be.undefined;
	});

	it('should return the current state', () => {
		// Arrange
		// Nothing to prepare here

		// Act
		const state = store.getState();

		// Assert
		expect(state).not.to.deep.equal({});
	});

	it('should dispatch an action', async () => {
		// Arrange
		// Any action, actually
		const action = /** @type {import('./actions/save-draft.js').Action} */({
			type: ACTION_SAVE_DRAFT,
			payload: {},
		});

		// Act
		await store.dispatch(action);

		// Assert
		expect(store.getState()).not.to.equal(initialState);
	});
});
