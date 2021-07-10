import React, {useState, useEffect} from 'react'
import "./style.css"
import SideBar from '../../components/SideBar'
import IndivLake from '../../components/IndivLake'

// This program is similar to Post, and calls Indivlake which is similar to blogpost 
// and is designed to be a container that allows for lake search and displays a single lake

const LakeProfile = (props)=> {
    console.log('lp main')
    console.log(props)
    return (
        <>
        <section className="lakeContainer" style={{display: `flex`}}>
            <IndivLake {...props}/>
            <SideBar/>
        </section>
        </>
    )
}

export default LakeProfile