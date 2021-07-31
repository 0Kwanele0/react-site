import React from 'react'
import {Link} from 'react-router-dom'
import './styles/nav.css'
import Button from './button';

function Nav() {
    return (
        <div className="nav-div"> 
            <div className="logo">
                <h2>AZURE</h2>
            </div>
            <div className="list">
                <Link >Home</Link>
                <Link >Services</Link>
                <Link >About</Link>
                <Link >FAQ</Link>
            </div>
            <Button text="Contact Us" />
        </div>
    )
}

export default Nav;
