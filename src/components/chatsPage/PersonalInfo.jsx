import React from 'react'
import { useSelector } from 'react-redux'

// styles
import '../../styles/style_chatsPage/personalInfo.css'

const PersonalInfo = () => {

  const globalData = useSelector((state) => state.user)




  const userData = {
    name: globalData.name,
    skill: globalData.skill,
    imgProfile: `profile_${(globalData.name).split(' ').join('')}`
  }

    return (
    <div className='contentPersonalInfo'>
      <div className="titlePersonalInfo">
        <p className='titleChats'>Chats</p>
      </div>
      <div className="imagePerfil">
        <img className='image' src={require(`../../images/perfil/${userData.imgProfile}.png`)} alt='imgProfile'/>
        <p className='name'> { userData.name} </p>
        <p className='skill'> {userData.skill} </p>
      </div>
    </div>
  )
}

export default PersonalInfo