import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todosReducer from './features/todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);
export default store;