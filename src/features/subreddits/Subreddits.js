import './subreddits.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits } from './SubredditsSlice';
import { loadSubredditPosts } from '../list/postsSlice';

export const Subreddits = () => {
  const subredditsToRender = useSelector(selectSubreddits);
  const dispatch = useDispatch();

  const handleClick = (subredditUrl) => {
    dispatch(loadSubredditPosts(subredditUrl));
  };

  const handleDropdownChange = (e) => {
    if (e.target.value) {
      dispatch(loadSubredditPosts(e.target.value));
    }
  };

  return (
    // <div className="subredditsContainer">
    //     {subredditsToRender.map((subreddit) => (
    //         <button
    //             className="subredditCard"
    //             key={subreddit.id}
    //             onClick={() => handleClick(subreddit.url)}>
    //             {subreddit.title}
    //         </button>
    //     ))}
    // </div>

    <>
      {/* Desktop Version */}
      <div className="subredditsContainer desktopOnly">
        {subredditsToRender.map((subreddit) => (
          <button
            className="subredditCard"
            key={subreddit.id}
            onClick={() => handleClick(subreddit.url)}>
            {subreddit.title}
          </button>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="mobileOnly mobileDropdownContainer">
        <select
          className="mobileDropdown"
          onChange={handleDropdownChange}
          defaultValue="">
          <option value="" disabled>
            Select a subreddit
          </option>
          {subredditsToRender.map((subreddit) => (
            <option key={subreddit.id} value={subreddit.url}>
              {subreddit.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
