import React, { lazy } from 'react';

const Login = lazy(() => import('../../components/Login/index.jsx'));

const index = () => {
	return <Login />;
};

export default index;
