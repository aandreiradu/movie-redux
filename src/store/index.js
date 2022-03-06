import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies-slice';

const store = configureStore({
    reducer: {
        movies: movieReducer
    }
});


export default store;