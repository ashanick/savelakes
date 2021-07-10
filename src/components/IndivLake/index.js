import React, {useState, useEffect} from 'react'
import './style.css'
import {ListGroup} from 'react-bootstrap'
import img1 from '../../blogPostImages/taralake3.jpg'
import lakeProfile from '../../data/lakeProfile.json'
import Tabs from '../Tabs'
import Chronicles from '../Chronicles'

function IndivLake(props) {
    console.log('Lake Profile')

    const postId = props.match.params.lakeName
    console.log(postId)

    const [post, setPost] = useState({
        id: "",
        lakeName: "",
        lakeImage: "",
        lakeDesc: ""
    })

    useEffect(() => {
        const tempData = lakeProfile.data.find(post=>post.id===postId);
        setPost(tempData)
        console.log('In UF')
        console.log(post)
    }, [post,props.match.params.lakeName ])

    if (post.lakeImage==="") return "";

    console.log('After effect')
    console.log(post)

    return (
        <div className="container"> 
            <div className="row" >
                <div className="col-md-4" >
                    <div className="card" >
                        <div className="card-header">
                            <h5>{post.lakeName}</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-image">
                                <img alt="postimage" src={require(`../../blogPostImages/` + post.lakeImage).default}/>
                            </div>
                            <div className="card-text">
                                <p>{post.lakeDesc}</p>
                            </div>
                        </div> 
                        <section >
                            <div style={{ margin: '0 0%'}}>
                                <div>
                                <div className="card" >
                                    <div className="card-header">
                                        <h5>Facts and Info</h5>
                                    </div>
                                    <div className="card-body">                             
                                        <ListGroup>
                                            <ListGroup.Item variant="secondary">Custodian: KSPCB</ListGroup.Item>
                                            <ListGroup.Item variant="dark">Sources of Water: Rain, untreated STP</ListGroup.Item>
                                            <ListGroup.Item variant="secondary">Inlets: 2, Outlet: 1</ListGroup.Item>
                                            <ListGroup.Item variant="dark">Ecosystem:</ListGroup.Item>
                                            <ListGroup.Item variant="secondary">Funtions of Lake: Ground Water Recharge, Flood protection, Fisheries, Biodiversity, Fisheries</ListGroup.Item>
                                        </ListGroup>    
                                    </div>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="col-md-8" >
                    <div className="card" >
                        <div className="card-header">
                            <h5>Lake Rejuvenation Markers</h5>
                            <p>Identified here are existing lake ecosystems and the necessary details to complete and maintain the rejuvenation of lakes</p>
                        </div>
                        <div className="card-body">
                            <Tabs> 
                                <div label="Lake ecosystem"> 
                                    <ul>
                                        <li>Lake survey and mapping</li>
                                        <li>Fencing lake boundary</li>
                                        <li>Reclaim lake area</li>
                                        <li>Native vegetation establishment</li>
                                        <li>Bird islands</li>
                                    </ul>  
                                </div> 
                                <div label="Existing Pollution Mitigation"> 
                                <ul>
                                        <li>Diversion of domestic sewage to STP</li>
                                        <li>Lake inlet wetlands</li>
                                        <li>Drain wetlands</li>
                                        <li>Lake inlet waste trapping structure</li>
                                        <li>Drain waste trapping structure</li>
                                    </ul>  
                                </div> 
                                <div label="Illegal activites"> 
                                    Nothing to see here, this tab is <em>extinct</em>! 
                                    Funee
                                </div> 
                            </Tabs>
                        </div> 
                    </div>
                    <Chronicles id={post.id}/>
                </div>
            </div>
    </div>

)
}

export default IndivLake
