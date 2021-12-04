import { Component } from "react";
import { link } from "react-router-dom";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Comment: "",
    };
  }

  //   submitComment = () => {
  //       if (this.state.name.length )
  //   };

  render() {
    const displayComment = () => {
      <div>
        <h2>{this.name}</h2>
        <p>{this.Comment}</p>
      </div>;
    };

    return (
      <div>
        <lablel for="name">Name</lablel>
        <input type="text" id="name" value={this.state.name}></input>
        <lablel for="comment">Comment</lablel>
        <input type="text" id="comment" value={this.state.Comment}></input>
        <button onClick={this.submitComment}>Submit</button>
        {displayComment}
      </div>
    );
  }
}

export default Comments;
