import React from 'react';
import Card from './Card.js';

const CardList = ({robotsarray}) => {
    const cardComponents = robotsarray.map((user) => {
        return(
            <Card key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}/>
        );
    });
    return(
        <div>
            {cardComponents}
        </div>
    );
}

export default CardList;