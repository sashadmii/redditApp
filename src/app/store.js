import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/searchBar/searchSlice';
import postsSliceReducer from '../features/list/postsSlice';
import subreddditsSliceReducer from '../features/subreddits/SubredditsSlice';
import commentsSliceReducer from '../features/comments/commentsSlice';

export const store = configureStore({
    reducer: {
        search: searchSliceReducer,
        posts: postsSliceReducer,
        subreddits: subreddditsSliceReducer,
        comments: commentsSliceReducer,
    },
});
