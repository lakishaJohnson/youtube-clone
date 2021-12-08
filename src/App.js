import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

/** COMPONENTS */
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

// console.log(process.env.REACT_APP_KEY)

class App extends React.Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     videos: [],
  //   }
  // }
  
  


  render() {

    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>

        
      </div>
    );
  }
}

export default App;
