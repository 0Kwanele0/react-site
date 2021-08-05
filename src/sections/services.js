import { list } from './service-list'
import './styles/services.css'


function Services() {

    return (
        <div className="main-serv">
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
