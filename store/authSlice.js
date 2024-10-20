import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'user',
    initialState:{
        userInfo: null,
        users: [],
        isLoggedIn : false,
    },
    reducers:{
        register: (state, action) => {
            state.users.push(action.payload);
            state.isLoggedIn = false
        },
        login:(state, action) => {
            state.userInfo = action.payload;
            state.isLoggedIn = true;
        },
        logout:(state) => {
            state.userInfo = null;
            state.isLoggedIn = false;
        }
    }
})

export const {register, login, logout} = authSlice.actions;
export default authSlice.reducer;

