import React from 'react'

// styles
import '../../styles/style_chatsPage/infoContact.css'

const InfoContact = () => {
  // burnData
  const contactData = {
    username: 'Contact Name',
    company: 'Company Name',
    imgProfile: 'perfil_alejandrocano'
  }
  return (
    <div className='contentInfoContact'>
      <div className="titleInfoContact">
        <p className='titleContact'>Archivos compartidos</p>
      </div>
      <div className="profileContact">
        <img className='profilContactImage' src={require(`../../images/perfil/${contactData.imgProfile}.jpeg`)} alt="" />
        <p className='profileNameContact'> {contactData.username} </p>
        <p className='companyContact'> {contactData.company} </p>
      </div>
    </div>
  )
}

export default InfoContact