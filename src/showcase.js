import React from 'react'
import './showcase.css'
import img from './images/custmer-support-colored-.png'

function Showcase() {
    return (
        <div className="main">
            <div className="left">
                <h1>Let us help you create and launch your product</h1>
                <div className="btn-div">
                    <button className="btn btn1">Our services</button>
                    <button className="btn btn2">Get in touch</button>
                </div>
            </div>
            <div className="right">
                < img className='img' src={img} />
            </div>
        </div>
    )
}

export default Showcase
