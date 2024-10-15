const DashboardLayout = ({ children }) => {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white">
          <div className="p-6">
            <h1 className="text-2xl font-bold">App Name</h1>
          </div>
          <nav>
            <ul>
              <li className="p-4 hover:bg-gray-700">
                <a href="#">Dashboard</a>
              </li>
              <li className="p-4 hover:bg-gray-700">
                <a href="#">Profile</a>
              </li>
              <li className="p-4 hover:bg-gray-700">
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    );
  };
  
  export default DashboardLayout;
  