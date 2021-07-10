import React from 'react';
import './style.css'

import htfacts from '../../data/HTFacts.json'
import RenderTeaserCard from '../UI/RenderTeaserCard'; 

function HTMain() {
  console.log('ht')
  const tempHtfacts = htfacts.data
  console.log(tempHtfacts)

  const tempRenderList = tempHtfacts.map((facts)=>{
    return (
      <div className="col-md-6">
          <RenderTeaserCard lake={facts} />
      </div>
      )
  })

  return (
    <div className="mainContainer">
      <div className="col-md-3">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <h5 style={{color:'red', textTransform: 'uppercase', textAlign: 'center'}}> Threats</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Decreasing Lake Area</li>
                  <ol>
                    <li>Encroachments</li>
                  </ol>
                <li>Sewage Pollution</li>
                  <ol>
                    <li>Untreated household water</li>
                    <li>Partially treated STP water</li>
                    <li>Partially treated Industry</li>
                    <li>Urban Runoff</li>
                  </ol>
                </ul>
            </div>
          </div> 
        </div>

        <div className="row">
          <div className="card">
            <div className="card-header">
              <h5 style={{color:'blue', textTransform: 'uppercase', textAlign: 'center'}}>Measures and Standards</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Chemical Oxygen demand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* This section cosnsits of all the facts cards */}
      <div className="col-md-9">
        <div className="card">
          <div className="card-header">Factual information presented in small snippets</div>
          <div className="card-body">
            <div className="row">
              It is indeed a delicate dance balancing the needs of growth, yet retaining the sanctity of our environment.
              {tempRenderList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  export default HTMain