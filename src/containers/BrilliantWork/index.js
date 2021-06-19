import React from 'react'
import "./style.css"
import BWork from '../../components/BWork'
import SideBar from '../../components/SideBar'

// This program is similar to Lake profile 

const BrilliantWork = (props)=> {

    return (
        <>
        <section className="lakeContainer" style={{display: `flex`}}>
            <BWork/>
            <SideBar/>
        </section>
        </>
    )
}

export default BrilliantWork