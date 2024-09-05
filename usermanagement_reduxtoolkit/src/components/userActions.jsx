import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/users/userSlice";

const UserActions = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      dispatch(addUser({ id: Date.now(), ...newUser }));
      setNewUser({ id: "", name: "", email: "" });
    }
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Actions</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-4 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-4 w-full"
      />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        onClick={handleAddUser}
      >
        Add User
      </button>
    </div>
  );
};

export default UserActions;
