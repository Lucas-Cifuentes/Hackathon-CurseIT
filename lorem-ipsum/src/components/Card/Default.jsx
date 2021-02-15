import React from 'react'
import './Default.css'

const Default = ({ children }) => {
  return (
    <div className="card" >
      { children }
    </div>
  )
}

export default Default
