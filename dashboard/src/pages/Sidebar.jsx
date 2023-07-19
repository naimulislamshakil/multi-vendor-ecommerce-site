import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../theme';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link, Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import { adminNavigation } from '../constants/navigation';

const Item = ({ title, to, selected,icon, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebars = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, SetSelected] = useState('Dashboard');

	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Box
			className="app"
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<Box>
				<ProSidebar collapsed={isCollapsed}>
					<Menu iconShape="square">
						{/* LOGO AND MENU ICON */}
						<MenuItem
							onClick={() => setIsCollapsed(!isCollapsed)}
							icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
							style={{
								margin: '10px 0 20px 0',
								color: colors.grey[100],
							}}
						>
							{!isCollapsed && (
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									ml="15px"
								>
									<Typography variant="h3" color={colors.grey[100]}>
										ADMINIS
									</Typography>
									<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							)}
						</MenuItem>

						{user?.role === 'Admin' &&
							adminNavigation.map((nav, i) => (
								<Item
									key={i}
									title={nav.title}
									to={nav.path}
									icon={nav.icon}
									selected={selected}
									setSelected={SetSelected}
								/>
							))}
					</Menu>
				</ProSidebar>
			</Box>

			<Box className="content">
				<Topbar />
				<Outlet></Outlet>
			</Box>
		</Box>
	);
};

export default Sidebars;
