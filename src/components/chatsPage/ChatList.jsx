import React from 'react'

// styles
import '../../styles/style_chatsPage/contactList.css'

// icons
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

const ContactList = () => {

  return (
    <div className='contentContactList'>
      <div className="searchContact">
        <form className='findContact' action="">
          <input placeholder='Search' className='inputContact' type="text" />
          <button className='btnSearchContact'><FiSearch size={15}/></button>
        </form>
      </div>
      <div className="historyChats">
        <p className="titleHistoryChats">Chats recientes</p>
        <button className='addChat'><AiOutlinePlus size={10} /></button>
      </div>
      <div className="contactNameList">
        <ul className='chatList'>
          <li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li><li className='chatItem'>
            <div className="profilePhoto">
              <img className='imgChatItem' src={require('../../images/contactProfile/profile_alejandrocano.jpeg')} alt="" />
            </div>
            <p className='nameChatItem'>item</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactList

