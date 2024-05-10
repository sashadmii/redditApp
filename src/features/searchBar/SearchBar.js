import React, { useRef, useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { setSearch } from './searchSlice';
import { useDispatch } from 'react-redux';
import logo from '../../icon/pngegg.svg';

export const SearchBar = ({ placeholder }) => {
    const dispatch = useDispatch();
    const myRef = useRef(null);

    const [userSearch, setUserSearch] = useState('');

    // input works, when the user hits 'enter'
    useEffect(() => {
        myRef.current.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById('buttonSearch').click();
                console.log('click>>>', userSearch);
            }
        });
    });

    return (
        <div className="search">
            <img alt="reddit_icon" src={logo} />
            <input
                type="text"
                placeholder={placeholder}
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                ref={myRef}
            />
            <button
                id="buttonSearch"
                className="searchButton"
                onClick={() => {
                    dispatch(setSearch(userSearch));
                }}>
                <SearchIcon />
            </button>
        </div>
    );
};
