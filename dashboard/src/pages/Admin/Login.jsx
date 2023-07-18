import React, { lazy } from 'react'

const AdminLogin=lazy(()=>import("../../components/Admin/Login.jsx"))

const Login = () => {
  return <AdminLogin />;
}

export default Login