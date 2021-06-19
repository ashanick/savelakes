import React from 'react'
import "./style.css"
import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/SideBar'

// This program is similar to Lake profile 

const Post = (props)=> {
    console.log('POST')
    console.log(props)
    return (
        <div className="postContainer">
        <section className="container">
        <div >
            <BlogPost {...props}/>
        </div>
        </section>
            <SideBar/>
        </div>
    )
}

export default Post
