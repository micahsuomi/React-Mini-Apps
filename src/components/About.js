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
                <p className="about-paragraph">hese are mini React apps built with create-react-app. These projects are either my own projects or projets built during my study time at Integrify Coding Academy in Helsinki. Id diam maecenas ultricies mi eget. Non consectetur a erat nam at lectus urna duis. Vitae tortor condimentum lacinia quis vel eros donec ac. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Facilisi morbi tempus iaculis urna id volutpat lacus. Tortor dignissim convallis aenean et tortor at. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Nibh sit amet commodo nulla facilisi nullam vehicula. Eu scelerisque felis imperdiet proin fermentum. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Amet justo donec enim diam. Aliquet eget sit amet tellus cras adipiscing enim.


            </p>
            </div>
            <div className="cards-wrapper">
                {cardsList}
            </div>
        </div>
    )
}

export default About;
