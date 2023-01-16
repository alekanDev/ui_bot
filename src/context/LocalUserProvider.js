import React, {createContext, useContext, useState, useEffect} from "react";

const localUserContext = createContext()

function useUserContext(){
  return useContext(localUserContext)
}

function UserProvider({ children }){
  
  const [localUser, setLocalUser] = useState(null)

  useEffect(() => {
    if(localUser != null){
      validateLogin(localUser)
    }
  }, [localUser])
  

  const validateLogin = () => {
    console.log(localUser)
  }
  return(
    <localUserContext.Provider value={ (setLocalUser) }>
      { children }
    </localUserContext.Provider>
  )
}

export {useUserContext as useLocalUserContext}
export default UserProvider