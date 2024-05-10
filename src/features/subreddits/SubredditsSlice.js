import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubreddits } from '../../reddit';

// thunk for fetching subreddits data from reddit
export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async (arg, thunkAPI) => {
        const response = await getSubreddits();
        return response;
    }
);

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        fetchSubeddits: (state, action) => {
            state.subreddits = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.subreddits = action.payload;
            })
            .addCase(loadSubreddits.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const { fetchSubeddits } = subredditsSlice.actions;
export default subredditsSlice.reducer;
