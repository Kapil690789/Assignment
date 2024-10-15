// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 text-center border-b">
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link to="/dashboard" className="block p-4 text-gray-700 hover:bg-gray-200">Dashboard</Link>
          </li>
          <li>
            <Link to="/login" className="block p-4 text-gray-700 hover:bg-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="block p-4 text-gray-700 hover:bg-gray-200">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
