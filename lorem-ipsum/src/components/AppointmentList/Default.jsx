import React from 'react';
import './Default.css';
import Appointment from '../Appointment/Default';

const Default = ({ appointments }) => {
    return (
        <div className="appointment-list">
            <p className="appointment-title">Próximos Turnos</p>
                {
                    !appointments || appointments.lenght < 1 ?
                    'No hay turnos pendientes...' :
                    (
                        <div className="appointment-table">
                            <div className="appointment-table-element appointment-table-header">
                                <b>Fecha</b>
                                <b>Motivo</b>
                                <b>Horario</b>
                            </div>
                            {
                                appointments &&
                                appointments.map(appointment => (
                                    <Appointment key={appointment.id} appointment={appointment} />
                                ))
                            }
                        </div>
                    )
                }
        </div>
    );
};

export default Default;