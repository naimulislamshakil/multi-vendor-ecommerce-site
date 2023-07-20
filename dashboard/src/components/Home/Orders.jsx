import React from 'react';
import { Box } from '@mui/material';
import Header from '../Header';
import OrderTable from '../OrderTable';

const Orders = () => {
	return (
		<Box m="20px">
			<Header title="ORDERS" subtitle="See All Orders" />

			<OrderTable />
		</Box>
	);
};

export default Orders;
