import React from 'react'
import './Item.css'

const Item = ({ item }) => {
  console.log('Item: ', item)
  return (
    <div className="item">
      <h5>
        {item.date}
      </h5>
      <p>
        {item.description}
      </p>
    </div>
  )
}

export default Item
