import React from 'react'
import { Container } from 'react-bootstrap'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner py-5">
            <Container className="text-center p-5">
                <h1 className="text-white mb-4">Master the Coding Skills to Become an Engineer Companies LOVE to Hire</h1>
                <img className='border border-2' src="https://image.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="" />
            </Container>
        </div>
    )
}

export default Banner
