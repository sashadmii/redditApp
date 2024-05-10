import './App.css';
import React from 'react';
import { SearchBar } from './features/searchBar/SearchBar';
import { Posts } from './features/list/Posts.js';
import { Subreddits } from './features/subreddits/Subreddits.js';
import { loadPosts } from './features/list/postsSlice.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadSubreddits } from './features/subreddits/SubredditsSlice.js';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
        dispatch(loadSubreddits());
    }, [dispatch]);

    return (
        <div className="App">
            <SearchBar placeholder="Search for..." />

            <div className="container">
                <Posts />
                <Subreddits />
            </div>
        </div>
    );
}

export default App;
