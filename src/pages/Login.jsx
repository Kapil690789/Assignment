// src/pages/Login.jsx
import React from 'react';
import LoginForm from '../components/LoginFrom';
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;