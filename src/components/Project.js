import React from 'react';
import '../assets/style/project.css';

const Project = (props) => {
    let {img, link, title, description} = props;
    return (
        <div className="app grow">
            <a href={link} className="app-link" target="blank">
            <img src={img} className="app-img" 
            alt ="app pic" target="blank"/>
            <div className="app-body">
            
                <h3 className="app-title">{title}</h3>
            <p className="app-description">{description}</p>
            </div>
            </a>
            
        </div>
    )
}

export default Project;
