import React, {  useRef } from 'react'
import { useLocalUserContext } from '../context/LocalUserProvider'

// components
import Footer from '../components/Footer'

// styles
import ('../styles/loginPage/login.css')

const Login = () => {
  // const user
  const setLocalUser = useLocalUserContext()
  const formLogin = useRef(null)

  const submitFormLogin = (e) => {
    const dataLogin = {}
    const dataFormLogin = new FormData(formLogin.current)
    e.preventDefault()
    
    dataFormLogin.forEach((value, key) => {
      dataLogin[key] = value
    })
    setLocalUser(dataLogin)
  }
  return (
      <div className='contentLogin'>
        <div className="ContentFormLogin">
          <form className="formLogin" ref={ formLogin } onSubmit={ submitFormLogin } action="" autoComplete='off'>
            <div className="headForm">
              <img className='logoCubiq_login' src={require('../images/logo-cubiq.png')} alt="logo_cubiq" />
              <h1 className='titleForm'>Sign In</h1>
            </div>
            <input name='username' className='inputText' type="text" placeholder='username'/>
            <input name='password' className='inputText' type="password" placeholder='password'/>
            <button className='submitButton' type='submit'>INICIAR SESION</button>
          </form>
        </div>
        <div className="footerLogin">
          <Footer />
        </div>
      </div>
  )
}

export default Login