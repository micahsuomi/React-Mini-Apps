import React from 'react';
import imgFooter from '../assets/imgs/logo.png';
import '../assets/style/footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <ul className="footer-wrapper">
                <a href="https://michelezuccawebdeveloper.netlify.com/"><li>Michele Zucca Web Dev</li></a>
                <a href="https://www.integrify.io/en/"><li><img src={imgFooter} className="footer-img" alt="footer logo integrify"></img></li></a>
            </ul>
        </footer>
    )
}

export default Footer;
