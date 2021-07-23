import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/about';
import Register from './components/Register';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
      <Switch>
        <Route path="/" exact>
           <Welcome></Welcome> 
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/about">
            <About></About>
        </Route>
      </Switch> 
      </div>
    </Router>
  );
}

export default App;


