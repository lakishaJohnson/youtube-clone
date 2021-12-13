import { Link } from "react-router-dom";
import React from "react";

const NavBar = (props) => {

  return (
    <header className="NavBar">

      <h1 className="Youtube">Youtube</h1>
      <div className="links">
         <ul>
        <Link onClick={props.onClear} to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
      </div>
     
    </header>
  );
};


export default NavBar;
