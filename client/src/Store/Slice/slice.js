const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
	name: 'slice',
	initialState: {
		user: null,
		token: null,
		message: '',
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user;
		},
	},
});

export const { setUser } = slice.actions;

export default slice.reducer;
