import { createSlice } from "@reduxjs/toolkit";

export const sliceCart = createSlice({
    name: 'productsCart',
    //State
    initialState: {
      productsCart: []
    },
    reducers: {
      addProducts: (state, action) => {
        return {
          ...state,
          productsCart: [...state.favorites, action.payload]
        }
      },
      deleteProducts: (state, action) => {
        const stateFilter = state.favorites.filter(element => element.id!=action.payload.id)
        return {
          ...state,
          productsCart: stateFilter
        }
      },
      deleteAllProducs: (state) => {
        return {
          ...state,
          productsCart: []
        }
      }

    }
});

export const { addProducts, deleteProducts, deleteAllProducs } = sliceCart.actions;
export const getProducts = (state) => state.productsCart;
export default sliceCart.reducer;