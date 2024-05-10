import './postCard.css';
import {
    loadComments,
    selectComments,
} from '../features/comments/commentsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Comments } from '../features/comments/Comments';
import { useRef, useState, useEffect } from 'react';

export const PostCard = ({
    id,
    author,
    title,
    selftext,
    img,
    postHint,
    permalink,
}) => {
    const dispatch = useDispatch();
    const commentsToRenderObject = useSelector(selectComments);
    const commentsToRender = commentsToRenderObject[id] || [];
    console.info('commentsToRenderObject', commentsToRenderObject);

    // on the title click redirects the user to the post on Reddit
    const handleClick = (permalink) => {
        window.open(
            `https://www.reddit.com${permalink}`,
            '_blank',
            'noreferrer'
        );
    };

    // expand / hide comments
    const myRef = useRef(null);
    const [visible, setVisible] = useState();

    useEffect(() => {
        myRef.current.addEventListener('click', setVisibility);
    });

    const setVisibility = () => setVisible(!visible);

    return (
        <div className="card" key={id}>
            {postHint === 'image' && <img alt={title} src={img} />}
            <h3>{author}</h3>
            <h2 role="link" onClick={() => handleClick(permalink)}>
                {title}
            </h2>
            <p className="selftext">{selftext}</p>

            <button
                className="commentsButton"
                ref={myRef}
                onClick={() => dispatch(loadComments(permalink))}>
                {visible ? 'Hide comments' : 'Show comments'}
            </button>
            {visible && (
                <div className="commentsContainer">
                    {commentsToRender.map((comment) => (
                        <Comments
                            key={comment.id}
                            author={comment.author}
                            text={comment.body}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
