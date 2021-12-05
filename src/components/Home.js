import React from "react";

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      userInput: "",
    }
  }

  onClick = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="search..." id="search" />
        <button onClick={this.onClick}>Search</button>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}
export default Home;
