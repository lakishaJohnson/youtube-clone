import NavBar from "./NavBar";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="search..." id="search" />
        <button>Search</button>
        <p>No Search Results Yet!</p>
      </div>
    );
  }
}
export default Home;
