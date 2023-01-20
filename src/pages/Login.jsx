import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setState } from '../features/user/userSlice'
import Swal from 'sweetalert2'


// components
import Footer from '../components/Footer'
import axios from 'axios'

// styles
import ('../styles/loginPage/login.css')

const Login = () => {

  //alerts
  const loginToast = (title, icon) => {
    Swal.fire({
      title: title,
      icon: icon,
      showCloseButton: true,
      showConfirmButton: false,
      position: 'top-end',
      toast: true,
      timer: 2500,
      color: '#ffffff',
      background: '#3b7386'
    })
  }

  const server = 'http://localhost:9001'
  const domain = '@cubiqnet.com'

  const formLogin = useRef(null)
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const submitFormLogin = (e) => {
    const dataLogin = {}
    const dataFormLogin = new FormData(formLogin.current)
    e.preventDefault()
    
    dataFormLogin.forEach((value, key) => {
      dataLogin[key] = value
    })

    axios.get (`${server}/usercubiq/${dataLogin.username}${domain}`)
    .then((response) => {
      const datafind = response.data
        if(datafind.password === dataLogin.password){
          loginToast(`Bienvenido al chat ${datafind.name}!`, 'success')
          const user = {
            name: `${datafind.name} ${datafind.lastName}`,
            skill: datafind.skill
          }
          dispatch(setState(user))
          navigate('/chats')
        } else {
          loginToast('Contraseña incorrecta', 'error')
        }
    })
    .catch(() => {
      loginToast('El usuario no existe', 'error')
    })
  }
  return (
      <div className='contentLogin'>
        <div className="ContentFormLogin">
          <form className="formLogin" ref={ formLogin } onSubmit={submitFormLogin} href={'www.google.com'} action="" autoComplete='on'>
            <div className="headForm">
              <img className='logoCubiq_login' src={require('../images/logo-cubiq.png')} alt="logo_cubiq" />
              <h1 className='titleForm'>Sign In</h1>
            </div>
            <input name='username' className='inputText' type="text" placeholder='username'/>
            <input name='password' className='inputText' type="password" placeholder='password'/>
            <button className='submitButton' >INICIAR SESION</button>
          </form>
        </div>
        <div className="footerLogin">
          <Footer />
        </div>
      </div>
  )
}

export default Login