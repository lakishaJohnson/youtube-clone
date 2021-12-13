import { Component } from "react";
import Share from "./Share";

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
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={this.handleInput}
          placeholder=" Name..."
          value={input.name}
        ></input>
        <label>Comment</label>
        <textarea
          type="text"
          name="comment"
          onChange={this.handleInput}
          placeholder=" ..."
          value={input.comment}
        ></textarea>
        <button onClick={this.submitComment}>Submit</button>
        <ul>
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
        <Share />
      </div>
    );
  }
}

export default Comments;
