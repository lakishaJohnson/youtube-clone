import { Component } from "react";
import "../Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: "",
        comment: "",
      },
      previousComments: [],
    };
  }

  submitComment = (event) => {
    event.preventDefault();
    const { previousComments, input } = this.state;
    this.setState({
      previousComments: [...previousComments, input],
      input: {
        name: "",
        comment: "",
      },
    });
  };

  handleInput = (event) => {
    const { input } = this.state;
    this.setState({
      input: { ...input, [event.target.name]: event.target.value },
    });
  };

  render() {
    const { previousComments, input } = this.state;

    return (
      <div className="comments">
        <div className="nameSection">
          <label className="nameLabel">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleInput}
            placeholder=" Name..."
            value={input.name}
          ></input>
        </div>
        <div className="commentSection">
          <label className="commentsLabel">Comment</label>
          <textarea
            type="text"
            name="comment"
            onChange={this.handleInput}
            placeholder=" ... "
            value={input.comment}
          ></textarea>
        </div>
        <button onClick={this.submitComment} className="submitButton">
          Submit
        </button>
        <ul className="commentList">
          {previousComments.map((eachComment, index) => {
            return (
              <li key={index}>
                <ul className="video-comment">
                  <b>{eachComment.name}</b>
                  <p>{eachComment.comment}</p>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Comments;
