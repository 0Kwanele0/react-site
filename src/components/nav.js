import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

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
            <button>Contact</button>
        </div>
    )
}

export default Nav;
