import React from 'react';
import {navData} from './navData';
import '../assets/style/Navbar.css';


const Navbar = () => {

    const formattedData = navData.map((data) => (
    <li className="nav-link">
        <a href={data.link}>
            <i className={data.icon}>
        </i></a></li>
    
    
    ))
    
    console.log(formattedData)
    return (
        <nav className="navbar">
            <ul className="nav-links">
                {formattedData}
            </ul>
        </nav>
    )
}

export default Navbar;
