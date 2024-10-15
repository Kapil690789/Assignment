// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-200">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {/* Add your dashboard content here */}
        <p className="mt-4">Welcome to your dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;
