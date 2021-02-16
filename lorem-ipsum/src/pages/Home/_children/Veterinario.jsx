import React from 'react'
import Grid from  '../../../components/Grid/Default'
import Card from '../../../components/Card/Default'
const Default = ({ user }) => {
  return (
    <Grid 
    left={null}
    middle={
      <Card>
        <div className="signIn">
          <h1> Turnos </h1>
          <p>No hay turnos que mostrar.</p>
        </div>
      </Card>
    } 
    right={null}
    />
  )
}

export default Default
