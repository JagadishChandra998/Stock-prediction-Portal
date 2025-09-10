import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { isLogedIn, setIsLogedIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout =() =>{
        localStorage.removeItem('accessToken')
        setIsLogedIn(false)
        console.log ('logged out');
        navigate('/login')
    }

    return (
        <>
            <nav className='navbar container pt-3 pb-3 align-items-start'>
                <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

                <div>
                    {isLogedIn ? (
                        <button className='btn btn-danger' onClick={handleLogout}> Logout </button>
                     ) :(
                          <>
                                <Button text='Login' class='btn-outline-info' url="/login" />
                                &nbsp;
                                <Button text='Register' class='btn-info' url="/register" />
                          </>
                     )
                    }

                 </div>
             </nav >

        </>
    )
}

export default Header;