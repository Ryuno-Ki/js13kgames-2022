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
     * @returns {import('../data/initial-state.js').State}
     */
    getState(): import('../data/initial-state.js').State;
    /**
     * Depending on the action apply side effects if it makes sense.
     *
     * @private
   * @argument {import('./reducers/index.js').Action} action
     */
    private _applySideEffects;
    /**
     * Restore saved state if possible
     *
     * @private
     */
    private _hydrateFromWebStorage;
    /**
     * Save current state to localStorage if possible
     *
     * @private
     */
    private _saveStateToWebStorage;
}
