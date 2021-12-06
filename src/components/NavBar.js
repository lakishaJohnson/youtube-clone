import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <header className="NavBar">
      <h1>
        <Link to="/">Youtube</Link>
      </h1>

      <span>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </span>
    </header>
  );
};

export default NavBar;
