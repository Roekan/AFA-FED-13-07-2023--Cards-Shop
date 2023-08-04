import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    //State
    initialState: {
      cards: []
    },
    reducers: {
      addCards: (state, action) => {
        return {
          ...state,
          cards: [...state.cards, action.payload]
        }
      }
    }
});

//exporto las ACCIONES.....
export const { addCards } = cardsSlice.actions;
export const getCards = (state) => state.cards;
export default cardsSlice.reducer;