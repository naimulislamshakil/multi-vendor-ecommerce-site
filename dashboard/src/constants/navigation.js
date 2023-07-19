import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const sellerNavigation = [{}];

export const adminNavigation = [
	{
		id: 1,
		title: 'Dashboard',
		icon: <SpeedOutlinedIcon />,
		path: '/dashboard',
	},
	{
		id: 2,
		title: 'Orders',
		icon: <ShoppingCartOutlinedIcon />,
		path: '/dashboard/orders',
	},
	{
		id: 3,
		title: 'Category',
		icon: <DashboardOutlinedIcon />,
		path: '/dashboard/category',
	},
	{
		id: 4,
		title: 'Sellers',
		icon: <Diversity3OutlinedIcon />,
		path: '/dashboard/sellers',
	},
	{
		id: 5,
		title: 'Payment Request',
		icon: <PaidOutlinedIcon />,
		path: '/dashboard/payment-request',
	},
	{
		id: 6,
		title: 'Deactive Sellers',
		icon: <GroupRemoveOutlinedIcon />,
		path: '/dashboard/deactive-sellers',
	},
	{
		id: 7,
		title: 'Sellers Request',
		icon: <EngineeringOutlinedIcon />,
		path: '/dashboard/sellers-request',
	},
	{
		id: 8,
		title: 'Chat Seller',
		icon: <ChatBubbleOutlineOutlinedIcon />,
		path: '/dashboard/chat-sellers',
	},
];
