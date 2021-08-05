import React from 'react'
import Image3 from '../images/seo1.png'
import './styles/about.css'



export const About = () => {
    return (
        <div class="container-fluid">
            <div class="row about-container">
                <div class="col-sm">
                    <div className="about-left">
                        <img className="imagee" alt="about" img src={Image3} />
                    </div>
                </div>
                <div class="col-sm">
                    <div className="about-right">
                        <h2>What's up About us</h2>
                        <p>Company Products means all products or services produced, marketed, licensed, sold, distributed or performed by or on behalf of the Company or any Subsidiary and all products or services currently under development by the Company or any Subsidiary.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
