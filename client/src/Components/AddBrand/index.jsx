/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
	Box,
	Button,
	CssBaseline,
	MenuItem,
	TextField,
	Typography,
	useMediaQuery,
} from '@mui/material';

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
];

const index = () => {
	const isMobile = useMediaQuery('(max-width:800px)');

	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<CssBaseline />
			<Box width={isMobile ? '90%' : '50%'}>
				<Typography variant="h3" fontWeight="bold" textAlign="center">
					Add Brand
				</Typography>

				<Box marginTop="10px">
					<TextField
						fullWidth
						type="text"
						required
						variant="outlined"
						label="Brand Name"
					/>
				</Box>

				<Box marginTop="10px">
					<TextField
						fullWidth
						type="email"
						required
						variant="outlined"
						label="Brand Email"
					/>
				</Box>
				<Box marginTop="10px">
					<TextField
						fullWidth
						type="text"
						variant="outlined"
						label="Brand Website"
					/>
				</Box>
				<Box marginTop="10px" display="flex" justifyContent="center">
					<TextField
						fullWidth
						type="tel"
						required
						variant="outlined"
						label="Brand Phone Number"
						style={{ marginRight: '5px' }}
					/>
					<TextField
						fullWidth
						type="tel"
						required
						variant="outlined"
						label="Brand HelpLine Number"
					/>
				</Box>

				<Box marginTop="10px">
					<TextField
						fullWidth
						required
						type="text"
						variant="outlined"
						label="Address 1"
					/>
					<TextField
						fullWidth
						type="text"
						variant="outlined"
						label="Address 2"
						style={{ marginTop: '10px' }}
					/>

					<Box marginTop="10px" display="flex" justifyContent="center">
						<TextField
							id="outlined-select-currency"
							select
							required
							fullWidth
							label="Country"
							helperText="Please select your Country"
							style={{ marginRight: '5px' }}
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							id="outlined-select-currency"
							select
							required
							fullWidth
							label="City"
							helperText="Please select your City"
							style={{ marginRight: '5px' }}
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>

						<TextField
							fullWidth
							type="number"
							variant="outlined"
							label="Zip Code"
						/>
					</Box>
				</Box>

				<Box marginTop="10px">
					<TextField
						fullWidth
						required
						multiline
						type="text"
						maxRows={4}
						variant="outlined"
						label="Brand Description"
					/>
				</Box>

				<Box
					marginTop="10px"
					display="flex"
					justifyContent="center"
					marginBottom="10px"
				>
					<Button
						style={{
							color: '#fff',
							background: '#4cceac',
						}}
						variant="contained"
					>
						Add Brand
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default index;
