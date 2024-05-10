import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostComments } from '../../reddit';

// thunk for fetching post comments
export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (arg, thunkAPI) => {
        const response = await getPostComments(arg);
        return response;
    }
);

export const getParentId = (comments) => {
    const element = comments.at(0);
    const id = element.parent_id.substring(3);

    console.info('parentid>>>', id);
    return id;
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.comments[getParentId(action.payload)] = action.payload;
            })
            .addCase(loadComments.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },
});

export const selectComments = (state) => state.comments.comments;
export const { fetchComments } = commentsSlice.actions;
export default commentsSlice.reducer;
