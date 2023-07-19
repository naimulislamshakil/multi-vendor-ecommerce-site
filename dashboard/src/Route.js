import { lazy } from 'react';

import Topbar from './pages/Topbar';
import Sidebars from './pages/Sidebar';
import Category from './components/Home/Category';
import Sellers from './components/Home/Sellers';
import PaymentRequest from './components/Home/PaymentRequest';
import DeactiveSellers from './components/Home/DeactiveSellers';
import SellersRequest from './components/Home/SellersRequest';
import ChatSellers from './components/Home/ChatSeller';

const RegisterPage = lazy(() => import('./pages/RegisterPage/index.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/index.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/index.jsx'));

export {
	Topbar,
	Sidebars,
	LoginPage,
	HomePage,
	RegisterPage,
	Category,
	Sellers,
	PaymentRequest,
	DeactiveSellers,
	SellersRequest,
	ChatSellers,
};
