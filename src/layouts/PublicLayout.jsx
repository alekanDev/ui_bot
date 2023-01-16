import React from 'react'


import '../styles/publicLayout.css'

// Components
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const PublicLayout = ({ Children }) => {
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