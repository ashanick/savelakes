import React from 'react'
import './style.css'
import lakeData from '../../data/blog.json'
import RenderTeaserCard from '../UI/RenderTeaserCard'

const TeaserCard =(props)=> {
    console.log(lakeData)

    const tempData = lakeData.data

    const renderBlogList = tempData.map((lake)=> {
        return (
            <div className="col-md-6" >
            <RenderTeaserCard lake={lake} />
            </div>
        )
    })

    return (
        <section style={{display: `flex`}}>
            <div>{renderBlogList}</div>
        </section>
    )
}

export default TeaserCard
