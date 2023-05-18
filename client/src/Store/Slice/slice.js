const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
	name: 'slice',
	initialState: {
		user: null,
		token: null,
		message: '',
	},
	reducers: {},
});

export const { setSingup } = slice.actions;

export default slice.reducer;
