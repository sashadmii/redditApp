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

    return (
        <div className="subredditsContainer">
            {subredditsToRender.map((subreddit) => (
                <button
                    className="subredditCard"
                    key={subreddit.id}
                    onClick={() => handleClick(subreddit.url)}>
                    {subreddit.title}
                </button>
            ))}
        </div>
    );
};
