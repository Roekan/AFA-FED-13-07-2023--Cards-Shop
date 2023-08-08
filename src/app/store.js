import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import cardsSlice from '../reducers/cardsSlice';
import sliceFavorites from '../reducers/sliceFavorites';
import sliceCart from '../reducers/sliceCart';
import sliceUser from '../reducers/sliceUser';

// Persistencia de superestado en local Storage
const persistConfig = {
    key: 'root',
    storage,
    }

//Combinacion de reducers provenientes de las Slices en un solo objeto
const reducers = combineReducers({
    cardsMagic: cardsSlice,
    favorites: sliceFavorites,
    productsCart: sliceCart,
    user: sliceUser,
});

//Pasamos el reducers a la funcion que nos crea la persistencia de los datos
const persistedReducer = persistReducer(persistConfig, reducers);

//creamos la store con nuestra configuracion ya aplicada y middleware thunk
export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});