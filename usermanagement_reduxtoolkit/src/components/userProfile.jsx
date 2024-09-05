import React from 'react';
import { useSelector } from 'react-redux';


const UserProfile = () => {
  const selectedUser = useSelector(state => state.users.selectedUser);

  if (!selectedUser) {
    return <p className="text-gray-200">Please select a user to view their profile.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="text-lg"><strong>Name:</strong> {selectedUser.name}</p>
      <p className="text-lg"><strong>Email:</strong> {selectedUser.email}</p>
    </div>
  );
};

export default UserProfile;
