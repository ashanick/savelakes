import React from 'react'
import './style.css'
import Logo from '../Logo'
import PCard from '../UI/PCard'
import Navbar from '../Navbar'

const Hero =(props)=> {
    return (
        <div>
            <PCard>
                <div style={{padding: `100px 40`}}>
                    <Logo />

                </div>
                <Navbar />
            </PCard>
        </div>
    )
}

export default Hero