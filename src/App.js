import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {navData} from './components/navData';
import './assets/style/navbar.css';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';


const App = () => {
    const formattedData = navData.map((data) => (
    <li className="nav-link"><a href={data.link}><i className={data.icon}></i></a></li>))
  return (
    <Router>
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links-left">
          <li>
            <Link to= "/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to= "/about" className="nav-link">About</Link>
          </li> 
          <li>
            <Link to= "/apps" className="nav-link">Apps</Link>
          </li>

        </ul>

            <ul className="nav-links-right">
                {formattedData}
            </ul>
        </nav>

      {/* Header */}
      <Switch>
     
      {/* Apps Container */}
      <Route path="/about">
        <About />
        </Route>

       <Route path="/apps"> 
      <ProjectList />
      </Route>

      <Route path="/">
      <Home />
      </Route>
      {/* Footer */}
     
    </Switch>
    <Footer />
    </div>

    </Router>

  );
}

export default App;
