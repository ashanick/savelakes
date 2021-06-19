import React, {useState, useEffect} from 'react'
import './style.css'
import lakeData from '../../data/blog.json'

const TeaserCard =(props)=> {
    console.log(lakeData)
    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle : "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: '',
        blogDesc: "",
        blogLink:""
    })

    console.log ('Init Data')
    console.log(post)
    const postId = 1;

    useEffect(() => {
        const tempData = lakeData.data.find(post=>post.id===postId);
        setPost(tempData)
        console.log('In UF')
        console.log(post)
    }, [post])

    if (post.blogImage==="") return null;

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-12" style={{display: 'flex'}}>
                        <div className="card" style = {{margin: `2rem 1%` }}>
                            <div className="card-header">
                                <h5>{post.blogCategory}</h5>
                            </div>
                            <img className="card-img-top" src={require(`../../blogPostImages/` + post.blogImage).default} alt="cardimage">
                            </img>
                            <div className="card-body">
                                <h5 className="card-title">{post.blogTitle}</h5>
                                <p>{post.postedOn}</p>
                                <p classNAme="card-text">{post.blogDesc}</p>
                            </div>
                        </div>

                        <div className="card" style={{margin: `2rem 1%`}}>
                            <div className="card-header">
                                <h5>{post.blogCategory}</h5>
                            </div>
                            <p>image</p>
                            <div className="card-body">
                                <h5 className="card-title">{post.blogTitle}</h5>
                                <p>{post.postedOn}</p>
                                <p classNAme="card-text">{post.blogDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeaserCard
