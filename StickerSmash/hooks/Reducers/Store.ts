// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from "redux-persist";
// import rootReducer   from './RootReducer'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const persistConfig = {
//     key: "root",    
//     storage: AsyncStorage
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer );

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
// });


// // const getPersistor = () => persistor;

// console.log('store is', store);
// // const getStore = () => store;
// // const getState = () => {
//     // return store.getState();
// // };

// export default store;

// const persistor = persistStore(store);

// export {persistor};

import { configureStore } from '@reduxjs/toolkit'
// ...

import EducationReducers from './EducationReducers';
import AuthReducer from './AuthReducers';

const store = configureStore({
  reducer: {
    posts: EducationReducers,
    auths: AuthReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;