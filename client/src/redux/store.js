import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./reducers/themeSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// persistor.persist();
