import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIsLogged : false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn: (state) => {
            state.userIsLogged = true
        },
        logOut: (state) => {
            state.userIsLogged = false
        }
    }
})

export const {logIn,logOut} = authSlice.actions
export default authSlice.reducer

