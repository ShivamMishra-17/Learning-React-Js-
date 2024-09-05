import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  addUser,
  removeUser,
  setStatus,
  setError,
  setUserById
} from "../features/users/userSlice";
import axios from "axios";

function UserLists() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const userById = useSelector((state) => state.users.userById);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch(setStatus("loading"));
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(setUser(response.data));
        dispatch(setStatus("Succeeded"));
      } catch (err) {
        dispatch(setStatus("Failed"));
        dispatch(setError(err.message));
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleAddUser = async (userId) => {
    if (userById[userId]) {
      dispatch(addUser(userById[userId]));
      return;
    }
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    dispatch(addUser(response.data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const handleRemoveUser = async (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <>
      <div>
        <h1>User Profiles</h1>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
            </li>
          ))}
        </ul>
        
      </div>
    </>
  );
}
export default UserLists;
