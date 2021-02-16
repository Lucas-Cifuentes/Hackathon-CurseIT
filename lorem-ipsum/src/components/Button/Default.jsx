import React from 'react'
import './Default.css'

const Default = ({ name, onClick, submit }) => <button type={submit ? 'submit' : 'button'} className="button" onClick={(e) => onClick(e)} >{ name }</button>

export default Default
