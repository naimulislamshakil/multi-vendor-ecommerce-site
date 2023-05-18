import { configureStore } from '@reduxjs/toolkit';
import slice from './Slice/slice';

const store = configureStore({
	reducer: slice,
});

export default store;
