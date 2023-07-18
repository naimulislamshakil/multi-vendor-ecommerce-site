import storage from 'redux-persist/lib/storage';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistReducer,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import slice from './slice/slice';

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
};

const persistedReducer = persistReducer(persistConfig, slice);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;
