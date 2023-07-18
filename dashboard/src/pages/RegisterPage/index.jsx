import React, { lazy } from 'react';

const Register = lazy(() => import('../../components/Register/index.jsx'));

const index = () => {
	return <Register />;
};

export default index;
