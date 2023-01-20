import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setState } from '../features/user/userSlice'

const Dashboard = () => {
  const globalData = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logOut = () => {
    const exit = {
      name: ''
    }
    
    dispatch(setState(exit))
    navigate('/')
  }

  const seeState = () => {
    console.log(globalData)
  }
  
  return (
    <div className='Content'>
      
      Dashboard
      <button onClick={ seeState }>Ver estado</button>
      <button onClick={ logOut }>logout</button>

    </div>
  )
}

export default Dashboard