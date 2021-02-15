import React from 'react';

const Item = ({ name = '', href = '' }) => {
  return <a href={ href } > {name} </a>
}

export default Item
