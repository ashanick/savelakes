import React, {useState, useEffect} from 'react'
import './style.css'
import PCard from '../UI/PCard'
import blogPost from '../../data/blog.json'

const BlogPost =(props)=> {
    console.log('Post Id')
    console.log(blogPost)

    const [postId, setPostId] = useState('');
    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle : "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: ''
    });
    
    useEffect(() =>{
        const postId=props.match.params.id
        const post = blogPost.data.find(post=>post.id===postId) 
        console.log('in use effect')
        console.log(post)
        setPost(post)
        setPostId(postId)
    }, [post, props.match.params.id])

    if (post.blogImage ==="") return null;

    return (
        <div className="blogPostContainer">
            <PCard>
                <div className="blogHeader">
                <span className ="blogCategory">{post.blogCategory}</span>
                <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">{post.postedOn} by {post.author}</span>
                </div>
                <div className="postImageContainer">
                    <img alt="postimage" src={require(`../../blogPostImages/` + post.blogImage).default}/>
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </PCard>
        </div>
    )
}

export default BlogPost
