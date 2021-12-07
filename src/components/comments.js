import { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      previousComments: [],
    };
  }

  // Push this into previousComments and display it
  // instead of jsx submit comment through setting state
  submitComment = () => {
    this.setState({
      previousComments: [],
    });
    // return (
    //   <div>
    //     <h2>{this.state.name}</h2>
    //     <p>{this.state.comment}</p>
    //   </div>
    // );
  };

  handleInput = (event) => {
    this.setState({
      name: event.target.value,
      comment: event.target.value,
    });
  };

  render() {
    const displayComment = () => {
      this.state.comment.map((word) => {
        return (
          <div>
            <h2>{this.handleInput}</h2>
            <p>{this.state.comment}</p>
          </div>
        );
      });
    };

    return (
      <div>
        {console.log("this.state.name --> " + this.state.name)}
        {console.log("this.state.comment --> " + this.state.comment)}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={this.handleInput}
          placeholder=" Name..."
        ></input>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          onChange={this.handleInput}
          placeholder=" ..."
        ></input>
        <button onClick={this.submitComment}>Submit</button>
        {displayComment}
      </div>
    );
  }
}

export default Comments;
