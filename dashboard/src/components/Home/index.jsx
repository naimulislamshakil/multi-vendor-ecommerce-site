import { Box } from '@mui/material';
import React from 'react';
import { Sidebars, Topbar } from '../../Route';

const index = () => {
	return (
		<Box className="app">
			<Sidebars />
			<main className="content">
				<Topbar />
			</main>
		</Box>
	);
};

export default index;
