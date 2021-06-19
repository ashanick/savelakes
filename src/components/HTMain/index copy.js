import React from 'react';
import SideBar from '../../components/SideBar';
import Tabs from "../../components/Tabs"
import PCard from '../../components/UI/PCard'
import HTPhysical from '../HTPhysical';
import "./style.css"

function HTMain() {
  return (
    <div>
      <div className="row">


      <section >
        <PCard>
          <p><em>Pollution</em></p>
          <p>An illegal and ugly word</p>
          <Tabs> 
              <div label="Authorities"> 
                  BBMP etx 
                </div> 
                <div label="Standards"> 
                  Explain COD, BOD, DO, Ph etc all measurements in simple words 
                </div> 
                <div label="Reducing Lake Area"> 
                  <HTPhysical /> 
                </div> 
                <div label="Planned pollution and rejuvenation"> 
                  After 'while, <em>Crocodile</em>! 
                </div> 
                <div label="Illegal dumping"> 
                  Nothing to see here, this tab is <em>extinct</em>! 
                  <SideBar />
                </div> 
          </Tabs> 
        </PCard>
      </section>
            </div>
    </div>
  );
}

  export default HTMain