import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { styled } from '@mui/material/styles';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#4cceac',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: '#fff',
	display: 'flex',
	justifyContent: 'center',
}));

const Tags = ({ data, handleDelete }) => {
	return (
		<Box
			sx={{
				height: '100%',
				display: 'flex',
				padding: '0.4rem',
				margin: '0 0.5rem 0 0',
				justifyContent: 'center',
				alignContent: 'center',
			}}
		>
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={1}
			>
				<Item>
					{data}
					<CloseOutlinedIcon
						sx={{ cursor: 'pointer' }}
						onClick={() => {
							handleDelete(data);
						}}
					/>
				</Item>
			</Stack>
		</Box>
	);
};

export default Tags;
