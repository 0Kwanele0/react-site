
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/footer.css'
import Button from './button'

function Footer() {
    return (
        <div class="footer">
            <div className="container">
                <div class="row">
                    <div class="col-sm">
                        <div className="footer__nav">
                            <ul className="footer__list">
                                <h4>Navigator</h4>
                                <Link>Home</Link>
                                <Link>Services</Link>
                                <Link>About</Link>
                                <Link>FAQ</Link>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm mb-4">
                            <h4>Contact</h4>
                            <p>azureform@gmail.com</p>
                            <p>0234 776 324</p>
                            <p>Cape Town, South Africa</p>
                            
                    </div>
                    <div className="col-sm">
                        <form className="mb-3 footer__form">
                            <h4>Join Our Newsletter.</h4>
                            <input className="form-control mb-3 input" placeholder="Name" type="text" />
                            <input className="form-control mb-3 message" placeholder="Email" type="email" />
                            <Button text="JOIN"/>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer