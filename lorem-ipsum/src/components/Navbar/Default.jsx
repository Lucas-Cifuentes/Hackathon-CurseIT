import React from 'react';
import Item from './_children/Item'
import './Default.css'

const Default = () => {
  const Items = [
    {
      name: 'Contacto',
      href: '/contacto'
    }
  ]

  return (
    <nav className='navbar' >
      <h1>Lorem Ipsum</h1>
      <ul>
        {
          Items.map(item => <Item name={item.name} href={item.href} /> )
        }
      </ul>
    </nav>
  )
}

export default Default;