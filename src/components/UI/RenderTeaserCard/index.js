import React from 'react'
import './style.css'

const RenderTeaserCard =(props)=>{
    console.log('in render twacer')
    console.log(props)

    const {id,blogCategory, blogDesc, blogTitle, blogImage, postedOn } = props.lake
    return (
                    <div className="card" style = {{margin: `2rem 1%` }}>
                        <div className="card-header">
                            <h5>{blogCategory}</h5>
                        </div>
                        {/* <img className="card-img-top" src={require(`../../blogPostImages/` + blogImage).default} alt="cardimage"></img> */}
                        <div className="card-body">
                            <h5 className="card-title">{blogTitle}</h5>
                            <p>{postedOn}</p>
                            <p className="card-text">{blogDesc}</p>
                        </div>
                    </div>
    )
}

export default RenderTeaserCard
