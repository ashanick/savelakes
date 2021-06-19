import React from 'react'
import './style.css'

const PCard =(props)=> {
    return (
        <div className="card" style={props.style}>
           {props.children}
        </div>
    )
}

export default PCard
