import React from 'react'
import './Default.css'

const Default = ({ label, password, setValue }) => {

  return (
      <div className="container">
        <label htmlFor="user">{ label }</label>
        <input onChange={(e) => setValue(e.target.value)} className="input" id={password ? 'password' : 'user'} placeholder={`Ingrese ${label}`} type={password ? 'password' : 'text'} />
      </div>
  )
}

export default Default
