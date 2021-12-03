import './App.css';
import {Routes, Route, Redirect} from "react-router-dom"
import React from 'react';
/** COMPONENTS */
import NavBar from './components/NavBar';

class App extends React.Component{

  render() {

    return (
      <div className="App">
        {/* <NavBar /> */}
          <Routes>
          <Route exact path="/" component={ <NavBar /> } />
          <Route path="/about" component={ <NavBar/> } />
          <Route path="/home" component={ <NavBar /> } /> 
        </Routes>
        
      </div>
    );

  }
}

export default App;
      
      
        
        

        
        
