import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../api/api';

// export const addCategoryforAdmin = createAsyncThunk(
// 	'category/add',
// 	async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
// 		try {
// 			const formData = new FormData();
			
// 			formData.append('image', image);
// 			const token = localStorage.getItem('accessToken');
// 			console.log({ image, name });

// 			const { data } = await axios.post(`${baseUrl}/file-uplode`, {
// 				method: 'POST',
// 				body: formData,
// 				headers: {
// 					// 'Content-Type': 'multipart/form-data',
// 					Authorization: `Basic ${token}`,
// 				},
// 			});
// 			return fulfillWithValue(data);
// 		} catch (error) {
// 			return rejectWithValue(error);
// 		}
// 	}
// );

const categoryReducer = createSlice({
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

	extraReducers: {},
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
