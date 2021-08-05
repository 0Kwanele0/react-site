import { list } from './service-list'
import { useRef} from 'react'
import { useIntersection } from 'react-use'
import './styles/services.css'
import { gsap } from 'gsap'


function Services() {
    const myDev = useRef()

    const observer = useIntersection(myDev, {
        root: null,
        rootMargim: 0,
        threshold: 0.4
    })
    const fadeIn = (element) => {
        gsap.to(element, 1.4, {
            opacity: 1,
            y: -10,
        })
    }
    const fadeOut = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: 20,
        })
    }

    if (observer && observer.intersectionRatio > 0.4) {
        fadeIn(".main-serv")
    } else {
        fadeOut(".main-serv")
    }

    return (
        <div ref={ myDev } className="main-serv">
            <h2>Our Service</h2>
            <div className="sev-container">
                {list.map((item, key)=>{
                   return(
                    <div className="individual">
                        <img className="imge" alt="service" src={item.image} />
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
