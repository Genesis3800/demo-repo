import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index'
import LandingPage from './pages/LandingPage/index'
import ContactPage from './pages/ContactPage/index'
import Footer from './components/Footer/index'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
     <Navbar />
       <Switch>
       <Route exact path='/' component={LandingPage} />
       <Route exact path='/contact' component={ContactPage} />

     </Switch>
     <Footer />
     </Router>
  );
}

export default App;
