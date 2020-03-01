import React from 'react';
import '../assets/style/card.css';

const Card = (props) => {
    let {icon, title} = props;
    return (
        <div className="card-container">
            <div className="card-header">
                <i className={icon}></i>
            </div>            
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
            </div>
        </div>
    )
}

export default Card;
