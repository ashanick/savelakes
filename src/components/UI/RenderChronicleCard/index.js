import React from 'react'
import './style.css'
import noun1 from '../../../blogPostImages/noun_Pollution_3523271.png'

const RenderChronicleCard = (props) => {
    console.log('card chronicle')
    console.log(props)
    const {cdTitle, cdDesc, cdText, cdLink, cdDate, cdSource, cdImage} ={...props.article}
    const tempImage = "../../../blogPostImages/"+ cdImage
    console.log(tempImage)

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card-image">
                        <img alt="postimage" src={require(`../../../blogPostImages/` + cdImage).default}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <h5>{cdTitle}</h5>
                            <p>{cdDesc}</p>
                        </div>
                        <div className="row">
                         <p>Source : <a href="{cdLink}" target="_blank"> {cdSource}</a>,   --Dated: {cdDate}</p>
                        </div>
                        <div className="row">
                        <p>{cdText}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default RenderChronicleCard
