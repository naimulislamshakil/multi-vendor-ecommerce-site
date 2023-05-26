/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const index = () => {
	const { name } = useParams();
	return <Box>{name}</Box>;
};

export default index;
