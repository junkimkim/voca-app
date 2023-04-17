import { configureStore } from '@reduxjs/toolkit'
import words from './AddWords'

const store = configureStore({
    reducer: {
        words: words.reducer,

    }
});

export default store