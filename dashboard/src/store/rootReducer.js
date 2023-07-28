import authReducer from './Reducer/authReducer';
import catrgoryReducer from './Reducer/catrgoryReducer';

const rootReducer = {
	auth: authReducer,
	category: catrgoryReducer,
};

export default rootReducer;
