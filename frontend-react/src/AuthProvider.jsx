import { createContext } from 'react'
import { useState, useContext } from 'react'

// Create the context
const AuthContext = createContext();

// through the children we can access the AUTHCONTEXT data inside the AuthProvider
const AuthProvider = ({ children }) => {        

  const [isLoggedIn, setIsLoggedIn] = useState( !!localStorage.getItem('accessToken') )
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export { AuthContext }