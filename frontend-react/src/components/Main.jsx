import React from 'react'
import Button from './Button';

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'>Student Scholarship Portal</h1>
                    <p className='text-light fs-5 fw-normal'>Welcome to the Student Scholarship Portal 
                         your one-stop destination for educational opportunities and financial assistance.
                          Our platform connects students with a wide range of scholarships, grants, and fellowships designed to support your academic journey.
                           Discover scholarships that match your profile, apply with ease, and track your applications all in one place.
                        Stay focused on your dreams while we help you reduce financial stress and unlock the door to brighter educational possibilities.</p>
                    <Button text='Explore Now' class='btn-outline-info' url='/dashboard' />
                </div>
            </div>

        </>
    )
}

export default Main;
