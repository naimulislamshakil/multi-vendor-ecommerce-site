import { lazy } from 'react';

import Topbar from './pages/Topbar';
import Sidebars from './pages/Sidebar';

const AdminLoginPage = lazy(() => import('./pages/Admin/Login.jsx'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/index.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/index.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/index.jsx'));

export { Topbar, Sidebars, LoginPage, HomePage, RegisterPage, AdminLoginPage };
