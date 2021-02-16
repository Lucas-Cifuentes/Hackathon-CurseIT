import React from 'react'
import Item from './_children/Item'
import './Default.css'

const Default = ({ title='', data }) => {
  return (
    <div className="historia">
      <h1>{ title }</h1>
      <div>
        {
          data && data.map((item, index) => <Item key={index} item={item} />)
        }
      </div>
    </div>
  )
}

export default Default
