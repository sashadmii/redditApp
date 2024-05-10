import './comments.css';

export const Comments = ({ text, author }) => {
    return (
        <div className="comments">
            <h4 className="author">{author}</h4>
            <p className="text">{text}</p>
        </div>
    );
};
