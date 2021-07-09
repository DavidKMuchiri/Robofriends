import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='container'>
            <img src={`https://robohash.org/${props.id}?size=200x200`} alt="Robot" />
            <section className='textarea'>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </section>
        </div>
    )
}

export default Card;