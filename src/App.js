import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Landing from './components/Landing/Landing';
import Nav2 from './components/Nav/Nav';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import Footer from './components/Footer/Footer'
import Works from './components/Works/Works';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
  return(
<>
     <Nav2 />
   
      <Route exact path="/" component={ Landing}/>
      <Route exact path="/Works" component={ Works}/>
      <Route exact path="/Resume" component={ Resume}/>
      
      <Footer />
      </>
      
  );
}

export default App;
