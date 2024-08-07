import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onDeleteComment, onToggleLike} = props
  const {id, initial, name, time, comment, liked} = commentDetails
  const timeAgo = formatDistanceToNow(new Date(time), {addSuffix: true})

  const onClickDelete = () => {
    onDeleteComment(id)
  }

  const onClickLike = () => {
    onToggleLike(id)
  }

  const likeButtonClassName = liked ? 'like-text' : 'like-test-clicked'
  const likeButton = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png-text'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png-test-clicked'

  return (
    <li className="list-container">
      <div>
        <div className="details-container">
          <p className="single">{initial}</p>
          <h1 className="name">{name}</h1>
          <p className="time">{timeAgo}</p>
        </div>
        <div className="comment-container">
          <p className="comments">{comment}</p>
        </div>
        <div className="like-delete-container">
          <button type="button" className="like-para" onClick={onClickLike}>
            <img src={likeButton} alt="like" />
            <p className={likeButtonClassName}>Like</p>
          </button>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
