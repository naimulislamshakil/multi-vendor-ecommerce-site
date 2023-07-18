import React, { lazy } from 'react';

const Home = lazy(() => import('../../components/Home/index.jsx'));

const index = () => {
	return <Home />;
};

export default index;
