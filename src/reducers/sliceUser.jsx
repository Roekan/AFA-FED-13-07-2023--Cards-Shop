import { createSlice } from "@reduxjs/toolkit";

export const sliceUser = createSlice({
    name: 'user',
    //State
    initialState: {
      user: {}
    },
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      userout: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }

    }
});

export const { login, userout } = sliceUser.actions;
export const getUser = (state) => state.user;
export default sliceUser.reducer;