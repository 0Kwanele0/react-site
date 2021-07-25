import React from 'react'
import Image3 from './images/seo.png'
import './about.css'

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <img className="imagee" img src={Image3} />
            </div>
            <div className="about-right">
                <h2>What's up About us</h2>
                <p>Company Products means all products or services produced, marketed, licensed, sold, distributed or performed by or on behalf of the Company or any Subsidiary and all products or services currently under development by the Company or any Subsidiary.</p>
            </div>
        </div>
    )
}

export default About;
