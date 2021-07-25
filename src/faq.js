import React from 'react'
import './faq.css'
import {faqList} from './faq-list'

function Faq() {
 
    return (
        <div className="faq-main">
            <h2>Frequently Asked Questions</h2>
            {faqList.map((items, key)=>{
                return (<div className="faq-buttons">
                    <button className="faq-btn">{items.question}</button>
                    <p className="faq-paragraph">{items.answer}</p>
                    </div>
                )
            })}
                
            </div>
            
    )
}

export default Faq
