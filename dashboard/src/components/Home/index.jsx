import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebars, Topbar } from '../../Route';

const index = () => {
	return (
		<Box>
			<Sidebars />
		</Box>
	);
};

export default index;
