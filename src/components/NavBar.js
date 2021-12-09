import { Link } from "react-router-dom";
import React from "react";

const NavBar = (props) => {
  return (
    <header className="NavBar">

      <h1>Youtube</h1>

      <ul>
        <Link onClick={props.onClear} to="/">Home</Link>
        <Link to="/about">About</Link>

      </ul>
    </header>
  );
};

export default NavBar;
