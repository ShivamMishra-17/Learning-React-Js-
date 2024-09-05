import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//user Slice 
const initialState = {
    users:[],
    status: 'idle',
    error: null,
    userById:{}
}
const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.users=action.payload;
        },
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        removeUser:(state,action)=>{
            state.users = state.users.filter(user=>user.id !== action.payload)
        },
        setStatus:(state,action) =>{
            state.status = action.payload
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        setUserById: (state, action) => {
            state.userById[action.payload.id] = action.payload;
          },
    }
});

export const {setUser,addUser,removeUser,setStatus,setError, setUserById} = userSlice.actions;

export default userSlice.reducer;