import React from 'react'
import './style.css'

import chronicles from '../../data/newsarticles.json'
import RenderChronicleCard from '../UI/RenderChronicleCard'
import PCard from '../UI/PCard'

const Chronicles = (props) => {
    console.log('Chronicle')
    console.log(props)
    const tempData = chronicles.data
    const lakeId = props.id
    console.log(lakeId)

    const renderChronicleList = tempData.filter(article=> article.cdLake === lakeId).map(filteredLake=>{
        return (
            <div className="col-md-12 cardStyle" >
                <RenderChronicleCard article={filteredLake}/>
            </div>

        )
    })
    console.log('filered')
    console.log(renderChronicleList)
    // const renderChronicleList = tempData.map((article)=>{
    //     return (
    //         <div className="col-md-12 cardStyle" >
    //             <RenderChronicleCard article={article}/>
    //         </div>

    //     )
    // })

    return (
        <PCard>
            <div >
                <div >
                    <h5>Chronicles</h5>
                    <p>Here we present a catogorized collection of articles from newpaper articles and blogs. The views in the links are expressed by the individual themselves, and we welcome you to consider and think through them as you arrive at your own conclusions</p>
                    <div className="row" style={{display:`flex`}}>
                        {renderChronicleList}
                    </div>
                </div>
        
            </div>
        </PCard>
    )
}

export default Chronicles
