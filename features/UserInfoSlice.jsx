import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const usersInfoSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = usersInfoSlice.actions;
export default usersInfoSlice.reducer;
