import React from 'react';
import './Default.css';
import Vaccine from '../Vaccine/Default';

const Default = ({ vaccines }) => {
    return (
        <div className="vaccine-list">
            <p className="vaccine-title">Vacunas</p>
            <button className="vaccine-plan-btn">Plan de Vacunas</button>
            {
                !vaccines || vaccines.lenght < 1 ?
                'No hay vacunas pendientes...' :
                vaccines.map(vaccine => {
                    return <Vaccine key={vaccine.id} vacc={ vaccine } />;
                })
            }
        </div>
    );
};

export default Default;