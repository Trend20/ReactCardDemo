import React from 'react';
import image from './img/blog-01.jpg';

const Card = () =>{
    return(
        <div className="card">
            <img className="card-img-top"
            src={image} />
        </div>
    )
}

export default Card;