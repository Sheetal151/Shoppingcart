import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import productsReducer from './productsSlice';
import cardReducer from './cardSlice';

const productsPersistConfig = {
  key: 'products',
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};


const persistedProducts = persistReducer(productsPersistConfig, productsReducer);
const persistedCart = persistReducer(cartPersistConfig, cardReducer);

const store = configureStore({
  reducer: {
    products: persistedProducts,
    cart: persistedCart,
  },
});

const persistor = persistStore(store);

export { store, persistor };
