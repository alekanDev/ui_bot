import React from 'react'

// styles
import '../../styles/style_chatsPage/personalInfo.css'

const PersonalInfo = () => {

  const userData = {
    name: 'Alejandro',
    lastName: 'Cano',
    skill: 'Desarrollo',
    imgProfile: 'profile_AlejandroCano'
  }

  return (
    <div className='contentPersonalInfo'>
      <div className="titlePersonalInfo">
        <p className='titleChats'>Chats</p>
      </div>
      <div className="imagePerfil">
        <img className='image' src={require(`../../images/perfil/${userData.imgProfile}.png`)} alt='imgProfile'/>
        <p className='name'> { `${userData.name} ${userData.lastName}`} </p>
        <p className='skill'> {userData.skill} </p>
      </div>
    </div>
  )
}

export default PersonalInfo