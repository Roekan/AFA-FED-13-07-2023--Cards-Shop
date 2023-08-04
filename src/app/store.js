import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import cardsSlice from '../reducers/cardsSlice';

// Persistencia de superestado en local Storage
const persistConfig = {
    key: 'root',
    storage,
    }

//Combinacion de reducers provenientes de las Slices en un solo objeto
const reducers = combineReducers({
    favorites: cardsSlice,
});