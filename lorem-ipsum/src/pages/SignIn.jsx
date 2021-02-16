import React, {useState} from 'react'
import Input from '../components/Input/Default'
import Button from '../components/Button/Default'
import Card from '../components/Card/Default'
import Grid from '../components/Grid/Default'
import { Redirect, useHistory } from 'react-router-dom'
import './SignIn.css'

const SignIn = ({ userID, setUserID }) => {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const onClick = (e) => {
    e.preventDefault();
    const data = {
      username,
      password
    }
    // console.log(data);
    const url = 'http://190.192.89.118/lorem/Users/Login'
    var formdata = new FormData();
    formdata.append("username", data.username);
    formdata.append("password", data.password);
    fetch(url, {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    })
    .then(res => res.json())
    .then(id => {
      setUserID(id[0].id)
      history.push('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      { userID ? (
        <Redirect path="/" />
      ) : (
         <form className="container" >
          <Grid left={null}
          middle={
            <Card>
              <div className="signIn">
                <h1> Sign {login ? 'In' : 'Up'} </h1>
                <Input setValue={setUser} label="Usuario" />
                <Input setValue={setPassword} label="Contraseña" password/>
                <Button name="Enviar" onClick={onClick} submit />
             </div>
            </Card>
          } 
            right={null}
            />
        </form>)
      }
    </>
  )
}

export default SignIn
