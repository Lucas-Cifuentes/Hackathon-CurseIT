import React from 'react'
import './Default.css'

const Default = ({ left, middle, right }) => {
  return (
    <div className="grid" >
      <div className="left" > { left } </div>
      <div className="middle" > { middle } </div>
      <div className="right" > { right } </div>
    </div>
  )
}

export default Default
