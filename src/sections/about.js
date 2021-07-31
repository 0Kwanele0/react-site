import React from 'react'
import Image3 from '../images/seo.png'
import './styles/about.css'
import { useIntersection } from 'react-use'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'


export const About = () => {

    const about = useRef()

    const observer = useIntersection(about, {
        root: null,
        margin: 0,
        threshold: 0.2
    })

    function startAnim(element, ones){
        gsap.to(element, 2, {
            x: 0,
            opacity: 1,
            ease: "bounce"
        })
        gsap.to(ones, 2, {
            x: 0,
            opacity: 1,
            ease: "bounce"
        })
    }
    function endAnim(element, ones){
        gsap.to(element, 2, {
            x: -40,
            opacity: 0,
            ease: "bounce"
        })
        gsap.to(ones, 2, {
            x: 40,
            opacity: 0,
            ease: "bounce"
        })
    }

    observer && observer.intersectionRatio > 0.2 ? startAnim(".about-left", ".about-right") : endAnim(".about-left", ".about-right");


    return (
        <div ref={ about } className="about-container">
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
