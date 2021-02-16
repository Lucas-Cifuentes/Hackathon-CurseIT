import React from 'react';
import './Default.css';

const Default = ({ appointment }) => {
    const datetime = appointment.date.split(' ');
    const [ date, time ] = datetime;

    return (
        <div className="appointment-table-element">
            <span>{date}</span>
            <span>{appointment.reason}</span>
            <span>{time}</span>
        </div>
    );
};

export default Default;