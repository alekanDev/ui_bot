import React from 'react'
import { useNavigate } from 'react-router-dom'

// style
import '../styles/httpStates/forbidden.css'

const Forbidden = () => {
  const navigate = useNavigate()

  const loginPage = () => {
    navigate('/')
  }
  return (
    <div className='forbidenContent'>
        <p className='messageForbidden'><span className='spanForbidden'> Acceso prohibido!</span> necesitas ingresar para poder visualizar este sitio, por favor inicia Sesión.
        <br />
        <button onClick={ loginPage } className='btnLogIn'>LogIn</button></p>
    </div>
  )
}

export default Forbidden