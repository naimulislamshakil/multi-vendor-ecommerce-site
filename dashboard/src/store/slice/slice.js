import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'slice',
	initialState: {
		user: {},
		token: '',
	},
	reducers: {
		setLogin: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
	},
});

export const { setLogin } = slice.actions;

export default slice.reducer;
