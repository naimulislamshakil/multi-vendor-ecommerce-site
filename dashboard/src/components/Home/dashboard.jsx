import {
	Avatar,
	Box,
	Button,
	Grid,
	IconButton,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import { Link } from 'react-router-dom';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Header from '../Header';
import BarChart from '../BarChart';
import StatBox from '../StatBox';
import RecentMessage from '../RecentMessage';

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: '14px',
							fontWeight: 'bold',
							padding: '10px 20px',
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: '10px' }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* ROW 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="$12,361"
						subtitle="Total Sales"
						progress="0.75"
						increase="+14%"
						icon={
							<CurrencyExchangeOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="16"
						subtitle="Products"
						progress="0.50"
						increase="+21%"
						icon={
							<CurrencyRubleOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="3"
						subtitle="Sellers"
						progress="0.30"
						increase="+5%"
						icon={
							<Diversity3OutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="6"
						subtitle="Orders"
						progress="0.80"
						increase="+43%"
						icon={
							<ShoppingCartOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>

				{/* row 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box height="250px" m="-20px 0 0 0">
						<BarChart />
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
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
							Recent Message
						</Typography>

						<Link
							style={{
								textDecoration: 'none',
								color: '#e0e0e0',
								fontWeight: '600',
								fontSize: '16px',
							}}
							to="/dashboard/chat-sellers"
						>
							View All
						</Link>
					</Box>

					{/* message */}
					<RecentMessage />

					<RecentOrders/>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
