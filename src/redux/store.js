import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice.js";
import { contactsReducer } from "./contacts/contactsSlice.js";
import { filterReducer } from "./contacts/filtersSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: persistedReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// import { tasksReducer } from "./tasks/slice";

// // import { todosReducer } from "./todos/slice";
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from "redux-persist";

// // import storage from "redux-persist/lib/storage";

// // const persistConfig = {
// //   key: "root",
// //   version: 1,
// //   storage,
// // };

// src/redux/store.js

// import { createStore } from "redux";

// // Початкове значення стану Redux для кореневого редюсера,
// // якщо не передати параметр preloadedState.
// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
// };

// // Поки що використовуємо редюсер який
// // тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = createStore(rootReducer);
