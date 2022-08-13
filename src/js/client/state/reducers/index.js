const initialState = {
};

export function reducer (state, action) {
	if (typeof state === 'undefined') {
		return initialState;
	}

	switch (action.type) {
		default:
			return state;
	}
}
