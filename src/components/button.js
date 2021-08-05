import React from 'react'
import './styles/button.css'

function Button(props) {
    return (
        <div>
            <button className="btn">{props.text}</button>
        </div>
    )
}

export default Button;
