import React from 'react';
import {footerData} from './footerData';
import '../assets/style/footer.css';

const Footer = () => {
    const formattedData = footerData.map((data) => (
        <li className="nav-link">
            <a href={data.link} target="blank">
                <i className={data.icon}>
            </i></a></li>
        
        
        ))
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <a href="https://michelezuccawebdeveloper.netlify.com/"><li>Michele Zucca Web Dev</li></a>
                <ul className="footer-icons__wrapper">
                    {formattedData}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
