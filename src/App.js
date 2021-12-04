import './App.css';
import {Routes, Route, Redirect} from "react-router-dom"
import React from 'react';
/** COMPONENTS */
import NavBar from './components/NavBar';

class App extends React.Component{

  render() {

    return (
      
      <div className="App">
        <NavBar />
          {/* <Routes>
          
          <Route exact path="/" component={ <NavBar /> } />
          <Route path="/about" component={ <About /> } />
          <Route path="/home" component={ <Home /> } /> 
        </Routes> */}
        
      </div>
    );

  }
}

export default App;
      
      
        
        

        
        
