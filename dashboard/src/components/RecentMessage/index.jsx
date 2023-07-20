/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import UserImg from '../../images/admin.jpg';

const index = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const user = JSON.parse(localStorage.getItem('user'));
	const array = [1, 2, 3, 4];
	return (
		<Box>
			{array.map((i) => (
				<Box key={i} p={2} display="flex">
					<Avatar alt="Remy Sharp" src={UserImg} />

					<Box bgcolor={colors.primary[500]} p={1} ml={1} width="100%">
						<Box display="flex" justifyContent="space-between">
							<Typography variant="h6">
								{user?.first} {user.last}
							</Typography>
							<Typography variant="h6">4 days ago</Typography>
						</Box>

						<Typography
							variant="h6"
							bgcolor={colors.primary[400]}
							p={2}
							mt={1}
							borderRadius="5px"
						>
							How are you?
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default index;
