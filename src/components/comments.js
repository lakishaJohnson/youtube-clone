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

  submitComment = (event) => {
    event.preventDefault();
    this.setState({
      comment: [...this.state.comment, this.state.name],
    });
  };

  handleInput = (event) => {
    this.setState({
      name: event.target.value,
      comments: event.target.value,
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
        {console.log("this is this state name   " + this.state.name)}
        {console.log(this.handleInput)}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={this.handleInput}></input>
        <label htmlFor="comment">Comment</label>
        <input type="text" id="comment" onChange={this.handleInput}></input>
        <button onClick={this.submitComment}>Submit</button>
        {displayComment}
      </div>
    );
  }
}

export default Comments;
