import React from 'react'
import './styles/button.css'

function Button(props) {
    return (
        <div>
            <button style={{marginLeft: "0px"}} className="butn">{props.text}</button>
        </div>
    )
}

export default Button;
