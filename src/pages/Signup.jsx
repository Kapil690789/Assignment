// src/pages/Signup.jsx
import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
