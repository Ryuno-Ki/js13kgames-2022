import { ACTION_NAVIGATE_TO_SCENE } from '../../shared/constants.js';
import { STORAGE_KEY } from '../constants.js';
import { reducer } from './reducers/index.js';

class Store {
  /**
   * Create a new store. State depends on reducer.
   *
   * @argument {function} reducer
   */
  constructor (reducer) {
    this.reducer = reducer;
    this.state = reducer(undefined, { type: '' });
		this._hydrateFromWebStorage();
  }

  /**
   * Dispatch an action to update the state.
   *
   * @argument {import('./reducers/index.js').Action} action
   */
  async dispatch (action) {
    this.state = this.reducer(this.state, action);
    this._applySideEffects(action);
  }

  /**
   * Return the current state.
   *
   * @returns {import('../data/initial-state.js').State}
   */
  getState () {
    return this.state;
  }

	/**
	 * Depending on the action apply side effects if it makes sense.
	 *
	 * @private
   * @argument {import('./reducers/index.js').Action} action
	 */
	_applySideEffects (action) {
		switch (action.type) {
			case ACTION_NAVIGATE_TO_SCENE:
				document.title = `${action.payload.scene} | Life Death Tower Defense | js13kgames-2022 - DEATH`;
			default:
				this._saveStateToWebStorage();
		}
	}

	/**
	 * Restore saved state if possible
	 *
	 * @private
	 */
	_hydrateFromWebStorage () {
		try {
			const state = window.localStorage.getItem(STORAGE_KEY);
			if (state !== null) {
				this.state = JSON.parse(state);
			}
		} catch (exc) {
			console.error('Could not restore state because', exc);
		}
	}

	/**
	 * Save current state to localStorage if possible
	 *
	 * @private
	 */
	_saveStateToWebStorage () {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.getState()));
		} catch (exc) {
			console.error('Could not save state because', exc);
		}
	}
}

const store = new Store(reducer);

// Export as Singleton
export default store;
