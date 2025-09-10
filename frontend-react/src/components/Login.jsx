import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {


  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate =useNavigate()
  const [error, setErrors] =useState('')

  const {isLogedIn, setIsLogedIn} = useContext(AuthContext)


  const handlelogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { username, password }
    console.log('login_data', userData);

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      console.log('login Successful');
      setIsLogedIn(true)
      navigate('/')
    }
    catch(error){
      console.log ('invalid creadentials')
      setErrors('invalid credentials')
    }finally{
      setLoading(false)
    }

  }


  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark rounded p-5">
            <h3 className='text-light text-center mb-4'> Login to our Portal</h3>
            <form onSubmit={handlelogin} >
              <div className='mb-3'>
                <input type="text" className='form-control  ' placeholder=' Username' value={username} onChange={(e) => setusername(e.target.value)} />
              </div>
              <div className='mb-3'>
                <input type="password" className="form-control " placeholder='Set password' autoComplete='current-password' value={password} onChange={(e) => setpassword(e.target.value)} />
              </div>

              {error && <div className='text-danger'>{error}</div>}

              {loading ? (
                <button type='submit' className='btn btn-info d-block mx-auto ' disabled ><FontAwesomeIcon icon={faSpinner} spin />Please wait...</button>
              ) : (
                <button type='submit' className='btn btn-info d-block mx-auto ' >Login</button>
              )
              }
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login