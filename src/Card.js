import React from 'react';
import image from './img/blog-01.jpg';

const Card = (props) =>{
    return(
        <div className="card">
            <img className="card-img-top"
            src={image} />
            <div className="card-body">
                <h5 className="card-title">Programming interface of the UI</h5>
                <p className="card-text">This is the description of the whole bootstrap card</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default Card;