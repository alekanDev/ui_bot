import React from 'react'

// style
import '../styles/chats.css'

// components
import PersonalInfo from '../components/chatsPage/PersonalInfo'
import ContactList from '../components/chatsPage/ContactList'
import Messages from '../components/chatsPage/Messages'
import InfoContact from '../components/chatsPage/InfoContact'
import SharedData from '../components/chatsPage/SharedData'

const Chats = () => {
  
  return (
    <div className='Content'>
      <div className="contacts">
        <div className='personalInfo'>
          <PersonalInfo />
        </div>
        <div className='contactList'>
          <ContactList />
        </div>
      </div>
      <div className="messages">
        <Messages />
      </div>
      <div className="shared">
        <div className="infoContact">
          <InfoContact />
        </div>
        <div className="sharedData">
          <SharedData />
        </div>
      </div>
    </div>
  )
}

export default Chats