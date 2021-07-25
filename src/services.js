import React from 'react'
import {list} from './service-list'
import './services.css'

function Services() {
    return (
        <div className="main-serv">
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
