import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cardsMagic',
    //State
    initialState: {
      cardsMagic: []
    },
    reducers: {
      addCardsMagic: (state, action) => {
        return {
          ...state,
          //action.payload añade el elemento que le pasamos desde Dispatch
          cardsMagic: action.payload
        }
      }
    }
});



//exporto las ACCIONES.....
export const { addCardsMagic } = cardsSlice.actions;
export const getCardsMagic = (state) => state.cardsMagic;
export default cardsSlice.reducer;