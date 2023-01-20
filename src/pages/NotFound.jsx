import React from 'react'
import { useNavigate } from 'react-router-dom'

// style
import '../styles/httpStates/notFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  const backPage = () => {
    navigate('/chats')
  }

  return (
    <div className='notFoundContent'>
        <p className='messageNotFound'><span className='spanNotFound'>No encontrado!</span> al parecer esta ruta no existe o esta mal escrita.
        <br />
        <button onClick={backPage} className='btnBack'>Volver</button></p>
    </div>
  )
}

export default NotFound