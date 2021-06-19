import React from 'react'
import './style.css'
import noun1 from '../../../blogPostImages/noun_Pollution_3523271.png'

const RenderChronicleCard = (props) => {
    console.log('card chronicle')
    console.log(props)
    const {cdTitle, cdDesc, cdText, cdLink, cdDate} ={...props.article}
    console.log(cdLink)
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card-image">
                            <img alt="noneom" src={noun1} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <h5>{cdTitle}</h5>
                        </div>
                        <div className="row">
                         <p>Source : <a href="{cdLink}" target="_blank"> {cdDesc}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p>{cdText}</p>
            </div>
            
        </div>
    )
}

export default RenderChronicleCard
