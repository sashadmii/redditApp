import React, { useRef, useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { setSearch } from './searchSlice';
import { useDispatch } from 'react-redux';
import logo from '../../icon/reddit.svg';

export const SearchBar = ({ placeholder }) => {
  const dispatch = useDispatch();
  const myRef = useRef(null);

  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    myRef.current.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('buttonSearch').click();
      }
    });
  });

  return (
    <div className="search">
      <img alt="reddit_icon" src={logo} />
      <div className="searchInput">
        <input
          type="text"
          placeholder="What you are looking for?"
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
    </div>
  );
};
