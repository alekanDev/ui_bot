import React from 'react'

// styles
import '../../styles/style_chatsPage/sharedData.css'

// icons
import { IoDocumentOutline, IoImageOutline, IoVideocamOutline, IoDocumentsOutline } from "react-icons/io5";

const SharedData = () => {
  return (
    <div className='contentSharedData'>
      <div className='titleSharedData'>
        <p className="fontTitleSharedData">Datos compartidos</p>
      </div>
      <div className="dataContent">
        <div className="contenFolder folders documentsFolder">
        <IoDocumentOutline size={40}/>
        <p className='titleFolder'>Documentos</p>
        </div>
        <div className="contenFolder folders photosFolder">
        <IoImageOutline size={40}/>
        <p className='titleFolder'>Fotos</p>
        </div>
        <div className="contenFolder folders videosFolder">
        <IoVideocamOutline size={40}/>
        <p className='titleFolder'>Videos</p>
        </div>
        <div className="contenFolder folders othersFolder">
        <IoDocumentsOutline size={40}/>
        <p className='titleFolder'>Otros</p>
        </div>
      </div>
    </div>
  )
}

export default SharedData