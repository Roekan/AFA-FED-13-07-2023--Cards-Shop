import { createSlice } from "@reduxjs/toolkit";

export const sliceFavorites = createSlice({
    name: 'favorites',
    //State
    initialState: {
      favorites: []
    },
    reducers: {
      addFavorites: (state, action) => {
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      },
      deleteFavorites: (state, action) => {
        const stateFilter = state.favorites.filter(element => element.id!=action.payload.id)
        return {
          ...state,
          favorites: stateFilter
        }
      },
      deleteAllFavorites: (state) => {
        return {
          ...state,
          favorites: []
        }
      }

    }
});

export const { addFavorites, deleteFavorites, deleteAllFavorites } = sliceFavorites.actions;
export const getFavorites = (state) => state.favorites;
export default sliceFavorites.reducer;