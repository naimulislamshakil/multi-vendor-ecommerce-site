import React from 'react';
import '../../Styles/styles.css';
import { Box, IconButton, InputBase, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const SecondNav = () => {
	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* LOGO */}
			<Box>
				<Typography variant="h4">Gift Shop</Typography>
			</Box>

			{/* SEARCH BAR */}
			<Box
				display="flex"
				borderRadius="5px"
				bgcolor="#F0F1F3"
				border="1px solid black"
			>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="I am Shopping for..." />
				<IconButton type="button" sx={{ p: 1 }} className="searchButton">
					<SearchIcon />
				</IconButton>
			</Box>

			{/* ICONS */}
			<Box display="flex">
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default SecondNav;
