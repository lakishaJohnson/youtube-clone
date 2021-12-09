import React, { PureComponent, useState } from "react";
import data from "./data.json";
import { CommentSection } from "react-comments";
import "react-comments/dist/index.css";
import "./App.css";

class App extends PureComponent {
  state = {
    comment: data,
  };

  handleState = (value) => {
    this.setState({ comment: value });
  };

  render() {
    const userId = "01a";
    const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random";
    const name = "xyz";
    const signinUrl = "/signin";
    const signupUrl = "/signup";
    let count = 0;
    this.state.comment.map((i) => {
      count += 1;
      i.replies && i.replies.map((i) => (count += 1));
    });

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
      </div>
    );
  }
}

export default App;
