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
  }

  /**
   * Dispatch an action to update the state.
   *
   * @argument {import('./reducers/index.js').Action} action
   */
  async dispatch (action) {
    this.state = this.reducer(this.state, action);
  }

  /**
   * Return the current state.
   *
   * @returns {import('./reducers/index.js').State}
   */
  getState () {
    return this.state;
  }
}

const store = new Store(reducer);

// Export as Singleton
export default store;
