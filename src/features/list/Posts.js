import './posts.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch } from '../searchBar/searchSlice';
import { selectPosts, loadSearchResults } from './postsSlice';
import { PostCard } from '../../components/PostCard';
import { useEffect } from 'react';

export const Posts = () => {
    const dispatch = useDispatch();
    const postsToRender = useSelector(selectPosts);
    const searchInput = useSelector(selectSearch);

    useEffect(() => {
        if (searchInput.length !== 0) {
            dispatch(loadSearchResults(searchInput));
        }
    }, [dispatch, searchInput]);

    return (
        <div className="posts">
            {postsToRender.map((post) => (
                <PostCard
                    id={post.id}
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    selftext={post.selftext}
                    img={post.url}
                    postHint={post.post_hint}
                    permalink={post.permalink}
                />
            ))}
        </div>
    );
};
