import { configureStore } from "@reduxjs/toolkit";
import usersInfoReducer from "../features/UserInfoSlice";
export const store = configureStore({
    reducer: {
        usersInfo: usersInfoReducer,
    }
})