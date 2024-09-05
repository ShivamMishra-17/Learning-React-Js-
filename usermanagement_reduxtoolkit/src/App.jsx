import React from 'react';
import UserList from './components/userList';
import UserProfile from './components/userProfile';
import UserActions from './components/userActions';
import './App.css'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold text-white mb-8">User Profile Manager</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-4">
            <UserList />
          </div>
          <div className="glass p-4">
            <UserProfile />
          </div>
          <div className="glass p-4">
            <UserActions />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
