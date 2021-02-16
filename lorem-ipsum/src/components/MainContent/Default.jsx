import React from 'react';
import './Default.css';
import VaccineList from '../VaccineList/Default';
import AppointmentList from '../AppointmentList/Default';

const Default = ({ vaccines, appointments }) => {
    return (
        <div className="main-content">
            <VaccineList vaccines={ vaccines } />
            <AppointmentList appointments={ appointments }></AppointmentList>
        </div>
    );
};

export default Default;