import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './categorySlice';
import movieReducer from './moviesSlice';

const store = configureStore({
    reducer: { category: categoryReducer, movie: movieReducer }
})

export default store;