import React from 'react'

// style
import '../../styles/messages.css'

// icons
import { TiLocationArrowOutline, TiAttachment } from "react-icons/ti";
import { BsEmojiSmile } from "react-icons/bs";

const Messages = () => {
  // burnData
  const userData = {
    name: 'Usuario Prueba',
    company: 'from CubiQ'
  }
  
  // const chat = {
    
  // }

  return (
    <div className='messagesContent'>
      <div className="nameContact">
          <p className='userName'> {  userData.name } </p>
          {/* <p className='companyName'> { userData.company } </p> */}
        </div>
        <div className="allMessages">
          historial de mensajes
        </div>
        <div className="sendBar">
          <form className='textArea' action="">
            <input placeholder='Ingrese su mensaje...' className='inputArea' type="text" />
            <button className='emojis'>
            <BsEmojiSmile  size={20} />
            </button>
            <button className='emojis'>
            <TiAttachment size={25} />
            </button>
            <button className='iconSend'><TiLocationArrowOutline size={28}/></button>
          </form>
        </div>
    </div>
  )
}

export default Messages