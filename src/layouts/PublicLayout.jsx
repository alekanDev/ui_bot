import React from 'react'
import { useSelector } from 'react-redux'

// styles
import '../styles/publicLayout.css'

// Components
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

// pages
import Forbidden from '../pages/Forbidden'

const PublicLayout = ({ Children }) => {
  const globalDada = useSelector((state) => state.user)
  if(globalDada.name === ''){
    return(
      <div>
        <Forbidden />
      </div>
    )
  }

  return (
    <div className='publicLayout'>
      <div className="publicContent">
        <div className="sidebar">
          <Sidebar />
        </div>
        <main className='childrenContent'>
          { Children }
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default PublicLayout