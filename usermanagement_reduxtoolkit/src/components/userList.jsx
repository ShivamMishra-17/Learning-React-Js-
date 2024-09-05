import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/users/userSlice';


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const handleSelectUser = (user) => {
    dispatch(selectUser(user));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition"
              onClick={() => handleSelectUser(user)}
            >
              View Profile
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
