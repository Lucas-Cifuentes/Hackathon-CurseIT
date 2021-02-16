import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Veterinario from './_children/Veterinario'

const Default = ({ userID }) => {
  const [user, setUser] = useState(null);
  const url = `http://190.192.89.118/lorem/Users/Id/${userID}`;
  useEffect(() => {
    userID && fetch(url).then(res => res.json()).then(data => setUser(data))
  }, [])
  return (
    <>
      {
        user ? (
          user[0].user_type === 'Veterinario' && <Veterinario user={user} />
        ) : (
           <Redirect to='/login' />
        )
      }
    </>
  )
}

export default Default
