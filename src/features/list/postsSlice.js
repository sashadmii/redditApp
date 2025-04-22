import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPopularPosts,
  getSubredditPosts,
  getSearchResult,
} from '../../reddit';

// thunk for fetching popular posts data from reddit
export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (arg, thunkAPI) => {
    const response = await getPopularPosts();
    return response;
  }
);

// thunk for fetching posts from subreddit
export const loadSubredditPosts = createAsyncThunk(
  'subreddits/loadSubbredditPosts',
  async (arg, thunkAPI) => {
    const response = await getSubredditPosts(arg);
    return response;
  }
);

// thunk for fetching posts from search
export const loadSearchResults = createAsyncThunk(
  'search/loadSearchResults',
  async (arg, thunkAPI) => {
    const response = await getSearchResult(arg);
    return response;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(loadSubredditPosts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSubredditPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(loadSubredditPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(loadSearchResults.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(loadSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;
