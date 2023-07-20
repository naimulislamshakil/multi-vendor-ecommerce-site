/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import OrderTable from '../OrderTable';

const index = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box
			gridColumn="span 12"
			gridRow="span 4"
			backgroundColor={colors.primary[400]}
			overflow="auto"
		>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				borderBottom={`4px solid ${colors.primary[500]}`}
				colors={colors.grey[100]}
				p="15px"
			>
				<Typography color={colors.grey[100]} variant="h5" fontWeight="600">
					Recent Orders
				</Typography>

				<Link
					style={{
						textDecoration: 'none',
						color: '#e0e0e0',
						fontWeight: '600',
						fontSize: '16px',
					}}
					to="/dashboard/orders"
				>
					View All
				</Link>
			</Box>

			<OrderTable />
		</Box>
	);
};

export default index;
