import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../api/api';

// action
export const login = createAsyncThunk(
	'auth/login',
	async (info, { rejectWithValue, fulfillWithValue }) => {
		try {
			const { data } = await axios.post(`${baseUrl}/login`, info);
			localStorage.setItem('accessToken', data.token);
			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const register = createAsyncThunk(
	'auth/register',
	async (info, { rejectWithValue, fulfillWithValue }) => {
		try {
			const { data } = await axios.post(`${baseUrl}/register`, info);
			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

// call
const authReducer = createSlice({
	name: 'slice',
	initialState: {
		user: {},
		error: null,
		loading: false,
		message: '',
		token: '',
	},
	reducers: {
		messageClear: (state, _) => {
			state.error = '';
			state.message = '';
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.loading = true;
		},
		[login.rejected]: (state, { payload }) => {
			state.error = payload.message;
			state.loading = false;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.error = null;
			state.loading = false;
			state.message = payload.message;
		},

		// register
		[register.pending]: (state) => {
			state.loading = true;
		},
		[register.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload.message;
		},
		[register.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.message = payload.message;
		},
	},
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
