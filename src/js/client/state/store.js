import { reducer } from './reducers/index.js';

class Store {
  constructor (reducer) {
    this.reducer = reducer;
    this.state = reducer(undefined, { type: '' });
  }

  async dispatch (action) {
    this.state = this.reducer(this.state, action);
  }

  getState () {
		return this.state;
  }
}

const store = new Store(reducer);

// Export as Singleton
export default store;
