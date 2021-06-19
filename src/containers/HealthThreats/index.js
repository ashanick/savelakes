import React from 'react';
import "./style.css"

import HTMain from '../../components/HTMain';
import SideBar from '../../components/SideBar';


const HealthThreats = (props)=> {
  return (
    <div className="postContainer">
      <section className="container">
      <div >
          <HTMain />
      </div>
      </section>
      <SideBar/>

    </div>
)
  }

  export default HealthThreats