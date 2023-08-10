import { createSlice } from "@reduxjs/toolkit";

export const sliceUser = createSlice({
    name: 'user',
    //State
    initialState: {
      user: {}
    },
    reducers: {
      addPurchases: (state, action) => {
        return {
          ...state,
          user: {...state.user, purchases: [...state.user.purchases, action.payload]}
        }
      },
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      logout: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }

    }
});

export const { login, logout, addPurchases } = sliceUser.actions;
export const getUser = (state) => state.user;
export default sliceUser.reducer;