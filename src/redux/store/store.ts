import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers/rootReducer";

import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'user',
    blacklist: ['posts'],
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export const persistor = persistStore(store);