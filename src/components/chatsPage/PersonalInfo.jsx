import React from 'react'

// styles
import '../../styles/personalInfo.css'

const PersonalInfo = () => {
  // burnData
  const userData = {
    username: 'Alejandro Cano',
    skill: 'Soporte CubiQ',
    imgProfile: 'profile_alejandrocano'
  }
  return (
    <div className='contentPersonalInfo'>
      <div className="titlePersonalInfo">
        <p className='titleChats'>Chats</p>
      </div>
      <div className="imagePerfil">
        <img className='image' src={require(`../../images/perfil/${userData.imgProfile}.png`)} alt='imgProfile'/>
        <p className='name'> { userData.username} </p>
        <p className='skill'> {userData.skill} </p>
      </div>
    </div>
  )
}

export default PersonalInfo