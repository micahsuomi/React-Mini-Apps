import React from 'react';
import '../assets/style/about.css';
import Card from './Card';
import {cardsData} from './cardsData';

const About = () => {
    let cardsList = cardsData.map((card, index) => (
        <Card key={index}
              icon={card.img}
              title={card.title}/>
        
    ))
    return (
        <div className="about-container">
            <div className="about-container__header">
            <h1 className="about-header">About</h1>
            </div>
            <div className="about-description">
                <p className="about-paragraph">These are mini React apps built with create-react-app. These projects are either my own projects or projets built during my study time at Integrify Coding Academy in Helsinki. The are simple in design and functionality (that's why they are mini-apps) but they use plenty of anything a developer can implement with React components. 


            </p>
            </div>
            <div className="cards-wrapper">
                {cardsList}
            </div>
        </div>
    )
}

export default About;
