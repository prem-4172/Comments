import {Component} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

const initialCommentDetails = []

class Comments extends Component {
  state = {
    commentDetails: initialCommentDetails,
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: Date.now(),
        initial: name[0].toUpperCase(),
        name,
        time: new Date(),
        comment,
        liked: false,
      }

      this.setState(prevState => ({
        commentDetails: [...prevState.commentDetails, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  onChangeInputName = event => {
    this.setState({name: event.target.value})
  }

  onChangeInputComment = event => {
    this.setState({comment: event.target.value})
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentDetails: prevState.commentDetails.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  onToggleLike = id => {
    this.setState(prevState => ({
      commentDetails: prevState.commentDetails.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, liked: !eachComment.liked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, commentDetails} = this.state
    return (
      <div>
        <h1 className="heading">Comments</h1>
        <p className="para">Say something about 4.0 Technologies</p>
        <div className="upper-container">
          <form onSubmit={this.onAddComment}>
            <input
              placeholder="Your Name"
              value={name}
              className="input-2"
              onChange={this.onChangeInputName}
            />
            <hr className="hr" />
            <textarea
              placeholder="Your Comment"
              value={comment}
              className="input-1"
              onChange={this.onChangeInputComment}
            />
            <hr className="hr" />
            <button type="submit" className="comment-button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr />
        <div>
          <div className="comment-count">
            <p className="comment-of">{commentDetails.length}</p>
            <p className="comment-of">Comments</p>
          </div>
          <ul>
            {commentDetails.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                onDeleteComment={this.onDeleteComment}
                onToggleLike={this.onToggleLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
