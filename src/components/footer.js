import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__details">
                <h2>AZURE</h2>
                <p>azureform@gmail.com</p>
                <p>0234 776 324</p>
                <p>Cape Town, South Africa</p>
            </div>
            <div className="footer__nav">
                <ul className="footer__list">
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>About</Link>
                    <Link>FAQ</Link>
                </ul>
            </div>
            
            <form className="footer__form">
                <h2>Reach out to us.</h2>
                <input className="input" placeholder="Name" type="text" />
                <input className="message" placeholder="Email" type="email" />
                <button className="footer__button">Sign up</button>
            </form>
        </div>
    )
}

export default Footer