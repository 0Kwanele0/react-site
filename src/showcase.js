import React from 'react'
import './showcase.css'
import img from './images/custmer-support-colored-.png'
import Button from './components/button'

function Showcase() {
    return (
        <div className="main">
            <div className="left">
                <h1>Let us help you create and launch your product</h1>
                <div className="btn-div">
                    <Button text="Contact Us" />
                    <Button text="Get in touch" />
                </div>
            </div>
            <div className="right">
                < img className='img' src={img} />
            </div>
        </div>
    )
}

export default Showcase
