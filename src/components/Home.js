import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
    };
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      selectedVideo: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="search..."
            id="search"
            value={this.state.userInput}
            onChange={this.handleUserInput}
          />
          <button onSubmit={this.handleSubmit}>Search</button>
          {/* <p>{this.state.userInput}</p> */}
        </form>
      </div>
    );
  }
}
export default Home;
