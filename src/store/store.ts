
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['basketList','favoriteList'],
    blacklist: [],
   
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store: any;

store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
