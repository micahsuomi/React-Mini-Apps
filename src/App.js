import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/style/navbar.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';


const App = () => {
  
      return (
        <Router>
        <div className="App">
          <Navbar />
          <Switch>
         
          <Route path="/about">
            <About />
            </Route>
    
           <Route path="/apps"> 
          <ProjectList />
          </Route>
    
          <Route path="/">
          <Home />
          </Route>
         
        </Switch>
        <Footer />
        </div>
    
        </Router>
    
      );
    }
    
    
export default App;
