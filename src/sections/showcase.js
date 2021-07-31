import React, {useRef, useEffect} from 'react'
import './styles/showcase.css'
import img from '../images/custmer-support-colored-.png'
import Button from '../components/button'
import gsap from 'gsap'


function Showcase() {

    let headerItem = useRef()
    let imageItem = useRef()
    
    useEffect(() => {
        gsap.from(headerItem, 1, {
            opacity: 0,
            x: -10
        })
        gsap.from(imageItem, 1, {
            opacity: 0,
            x: 10
        })
    }, [])

    return (
        <div className="main">
            <div ref={el => {
                headerItem = el
            }} className="left">
                <h1>Let us help you create and launch your product</h1>
                <div className="btn-div">
                    <Button text="Contact Us" />
                    <Button text="Get in touch" />
                </div>
            </div>
            <div ref={(el) => {
                imageItem = el
            }} className="right">
                < img className='img' src={img} />
            </div>
        </div>
    )
}

export default Showcase
