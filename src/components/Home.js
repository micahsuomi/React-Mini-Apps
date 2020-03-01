import React from 'react';
import '../assets/style/home.css';
import reactLogo from '../assets/imgs/react-logo.png'


const Home = () => {
    return (
        <div className="header-container">
            <h1 className="title">React Mini Apps</h1>
            <h3 className="subtitle">A collection of Mini Apps Built with React</h3>
            <img src={reactLogo} alt="react logo" className="react-logo"/>
        </div>
    )
}

export default Home;
