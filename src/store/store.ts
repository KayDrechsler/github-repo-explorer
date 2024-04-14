/**
 * # Store
 */

/**
 * ## Imports
 */
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

/**
 * ## Store
 */
const store = configureStore({
    reducer: {
        search: searchReducer
    }
});

/**
 * ## Exports
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
