import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Item = ({ item }) => {
	return (
		<Box
			style={{
				height: '100vh',
				width: '100%',
				backgroundImage: `url(${item.img})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			<Box
				display="flex"
				flexDirection="column"
				height="100vh"
				justifyContent="center"
				alignItems="start"
				paddingLeft="70px"
			>
				<Typography
					style={{
						backgroundColor: 'black',
						color: 'white',
						width: '140px',
						textAlign: 'center',
						borderRadius: '5px',
						padding: '4px',
						fontWeight: 'bold',
					}}
					variant="body1"
				>
					{item.subTitle}
				</Typography>
				<Typography marginTop="15px" variant="h4">
					{item.title}
				</Typography>
				<Typography fontWeight="bold" color="#333333" variant="h3">
					{item.boldTitle}
				</Typography>
				<Button variant="contained" color="error">
					{item.button}
				</Button>
			</Box>
		</Box>
	);
};

export default Item;
