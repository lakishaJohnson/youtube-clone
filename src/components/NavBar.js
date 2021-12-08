import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <header className="NavBar">
        <h2>Youtube</h2>

      <ul>
        <li><Link to="/">Home</Link> </li>
       <li> <Link to="/about">About</Link></li>
      </ul>
    </header>
  );
};

export default NavBar;
