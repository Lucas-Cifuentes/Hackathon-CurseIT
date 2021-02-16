import React from 'react';
import './Default.css';

const Default = ({ name='', age=0, type='', breed='' }) => {
    return (
        <div className="pet">
            <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="pet-image"/>
            <p className="pet-name">{name}</p>
            <p className="pet-age">{
                age != 0
                ? `${Math.trunc(age)} año${Math.trunc(age) != 1 ? 's' : ''} y ${Math.trunc((age % 1) * 12)} mes${Math.trunc((age % 1) * 12) != 1 ? 'es' : ''}.`
                : ''
            }</p>
            <p className="pet-type">{type}</p>
            <p className="pet-breed">{breed}</p>
        </div>
    );
};

export default Default;