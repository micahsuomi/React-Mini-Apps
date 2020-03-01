import React from 'react';
import '../assets/style/project.css';

const Project = (props) => {
    let {img, link, title, description} = props;
    return (
        <div className="app">
            <img src={img} className="app-img" 
            alt ="app pic" target="blank"/>
            <div className="app-body">
            <a href={link} className="app-link" target="blank">
                <h3 className="app-title">{title}</h3>
            <p className="app-description">{description}</p></a>
            </div>
            
        </div>
    )
}

export default Project;
