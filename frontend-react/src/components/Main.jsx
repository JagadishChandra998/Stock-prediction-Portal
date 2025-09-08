import React from 'react'
import Button from './Button';
import Header from './Header'
import Footer from './Footer'

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'>Stock Prediction Portal</h1>
                    <p className='text-light fs-5 fw-normal'>Welcome to the Stock Prediction Portal - your gateway to smarter investment decisions.
                        Our platform leverages advanced machine learning models to analyze market trends, track stock performance, and provide accurate predictions.
                        Stay ahead of the curve and make informed choices with real-time insights at your fingertips.</p>
                    <Button text='Login' class='btn-outline-info' />
                </div>
            </div>

        </>
    )
}

export default Main;
