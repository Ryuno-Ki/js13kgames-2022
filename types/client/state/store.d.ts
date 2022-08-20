export default store;
declare const store: Store;
declare class Store {
    /**
     * Create a new store. State depends on reducer.
     *
     * @argument {function} reducer
     */
    constructor(reducer: Function);
    reducer: Function;
    state: any;
    /**
     * Dispatch an action to update the state.
     *
     * @argument {import('./reducers/index.js').Action} action
     */
    dispatch(action: import('./reducers/index.js').Action): Promise<void>;
    /**
     * Return the current state.
     *
     * @returns {import('./reducers/index.js').State}
     */
    getState(): import('./reducers/index.js').State;
}
