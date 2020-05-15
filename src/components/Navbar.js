import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isToggleShowing: true,
          isExitShowing: false,
          addClass: true,
          hideClass: true
    
        }
      }
    
      toggle = () => {
        this.setState({addClass: !this.state.addClass, hideClass: !this.state.hideClass, isToggleShowing: false, isExitShowing: true})
        
    }
    
      close = () => {
        this.setState({addClass: !this.state.addClass, isToggleShowing: true, isExitShowing: false})
    
    }
       
        render() {
         
          let navLinksClass = ["navbar-links nav-links-left nav-links-right open"];
        if(this.state.addClass) {
            navLinksClass.push("open");
        }

   
    
    return (
        <nav className="navbar">
        {this.state.isToggleShowing ? <div className="hamburger-bar hide-desktop show-tablet" id="open-button" onClick={this.toggle}> 
                <i className="fas fa-bars fa-2x"></i>
                </div> : null }
                {this.state.isExitShowing ? <div className="exit" id="exit-button" onClick={this.close}><i className="fas fa-times fa-2x"></i></div> : null }
              <ul className={navLinksClass.join('')}>
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
  
          </nav>
  
    )
}
}

export default Navbar;
