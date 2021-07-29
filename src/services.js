import React, { useRef, useEffect } from 'react'
import { list } from './service-list'
import gsap from 'gsap/gsap-core'
import './services.css'


function Services() {

    let maindiv = useRef()

    useEffect(() => {
        gsap.from(maindiv, 2, {
            opacity: 0,
            y: 50,
        })
    })

    return (
        <div ref={el => {
            maindiv = el
        }} className="main-serv">
            <h2>Our Service</h2>
            <div className="sev-container">
                {list.map((item, key)=>{
                   return(
                    <div className="individual">
                        <img className="imge" src={item.image} />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                   ) 
                })}
            </div>
        </div>
    )
}

export default Services
