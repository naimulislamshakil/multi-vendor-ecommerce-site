/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import Header from '../Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { data } from '../../constants/data';

const index = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.5 },
		{ field: 'orderId', headerName: 'ORDER ID' },
		{
			field: 'price',
			headerName: 'PRICE',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'paymentStatus',
			headerName: 'PAYMENT STATUS',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
			flex: 0.5,
		},
		{
			field: 'orderStatus',
			headerName: 'ORDER STATUS',
			flex: 0.5,
		},

		{
			field: 'active',
			headerName: 'ACTIVE',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Button
						style={{
							backgroundColor: '#3da58a',
							display: 'flex',
							justifyContent: 'center',
							borderRadius: '4px',
							width: '60%',
							margin: '0 auto',
							padding: '5px',
						}}
					>
						View
					</Button>
				);
			},
		},
	];
	return (
		<Box m="20px">
			<Header
				title="CONTACTS"
				subtitle="List of Contacts for Future Reference"
			/>
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.grey[100]} !important`,
					},
				}}
			>
				<DataGrid
					rows={data}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default index;
