import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
import ifsearch from '../../assets/icons/ifsearch.png'

const Navbar =(props)=> {

    const [search, setSearch] = useState(false);
    
    const submitSearch = (e) => {
        e.preventDefault();
        alert ('Searched')

    }

    const openSearch =() => {
        setSearch(true);
    }

    const searchClass= search? 'searchInput active': 'searchInput'
    console.log('Nav')
    console.log(props)
    return (
        <div className="navbar">
        <ul className="navbarmenu">
            <li><NavLink to="/LakeProfile" style={{color: `green`, paddingLeft: `-10px 20px`}}>Lake Profile</NavLink></li>
            <li><NavLink to="/HealthThreats" style={{color:`brown`, paddingr: `0 20px`}}>Health & Threats</NavLink></li>
            <li><NavLink to="/BrilliantWork" style={{color:`blue`}}>Brilliant Work</NavLink></li>
            <li><NavLink to="/Post" style={{color:`green`}}>Stories</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search"/>
                <img className="searchIcon" onClick = {openSearch} src={ifsearch} alt="search"></img>
            </form>
        </div>
        </div>
    )
}

export default Navbar
