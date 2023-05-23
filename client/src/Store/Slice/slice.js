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
		setLogin: (state, action) => {
			state.token = action.payload.token;
		},
		setLogout: (state, action) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setUser, setLogin, setLogout } = slice.actions;

export default slice.reducer;
