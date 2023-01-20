import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setState } from '../features/user/userSlice'

// icons
import { TiMessages, TiCalendar } from "react-icons/ti";
import { MdOutlineDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";



// style
import '../styles/sidebar.css'

const Sidebar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    const exit = {
      name: ''
    }
    dispatch(setState(exit))
    navigate('/')
  }

  const iconSize = 20

  const Ruta = ({ route, icoName }) => {
    let location = useLocation()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
      // console.log(location, route)
      if (location.pathname === route) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }, [location, route])

    return (
      <Link to={route}> <li className={isActive ? 'li liActive' : 'li'}> {icoName} </li> </Link>
    )
  }

  return (
    <div className='sidebarContent'>
      <ul>
        <Ruta route='/Dashboard' icoName={<MdOutlineDashboard size={iconSize} />} />
        <Ruta route='/chats' icoName={<TiMessages size={iconSize} />} />
        <Ruta route='/tasks' icoName={<BiTask size={iconSize} />} />
        <Ruta route='/calendar' icoName={<TiCalendar size={iconSize} />} />
        <li title='Cerrar sesion' onClick={logOut}><CgLogOut className='iconLogout' size={iconSize} />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar