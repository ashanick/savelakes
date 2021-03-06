import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import PCard from '../UI/PCard'
import './style.css'
import blogPost from '../../data/blog.json'
import lakeProfile from '../../data/lakeProfile.json'

const SideBar = (props)=> {

    const [posts, setPosts] = useState([])
    console.log(blogPost)
    
    console.log(lakeProfile.data)
    const [lakeList, setLakeList] = useState([])

    useEffect(()=>{
        const posts = blogPost.data;
        console.log(posts)
        setPosts(posts);
    }, [posts])

    useEffect(()=>{
        const tempLakesList = lakeProfile.data;
        setLakeList(tempLakesList)
    }, [lakeList])
    console.log('final')
    console.log(lakeList)

    return (
        <div className = "sidebarContainer">
            <PCard style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
           <div className="cardHeader">
                <span>Search Lakes</span>
            </div>
            <div className="recentPosts">
                {
                lakeList.map(lakes=>{
                 return (
                     <NavLink key={lakes.id} to={`/LakeProfile/${lakes.id}`}>
                         <div className="recentPost">
                             <h3>{lakes.lakeName}</h3>
                         </div>
                     </NavLink>
                    )   
                })
                }
            </div>
            
            </PCard>

            <PCard style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className="cardHeader" >
                    <span>Social Network</span>   
                </div> 
            </PCard>
        
            <PCard style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post=> {
                            return (
                                <NavLink key={post.id} to={`/Post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </PCard>
        </div>
    )
}

export default SideBar