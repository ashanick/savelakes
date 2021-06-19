import React, {useState, useEffect} from 'react'
import './style.css'
import {Accordion,  Card} from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import img1 from '../../blogPostImages/taralake3.jpg'
import lakeProfile from '../../data/lakeProfile.json'

function LakeProfileHoskereHalli(props) {
    console.log(lakeProfile)
    const postId = 1

    const [post, setPost] = useState({
        id: "",
        lakeName: "",
        lakeImage: "",
        lakeDesc: ""
    })

    console.log(props)

    useEffect(() => {
        const tempData = lakeProfile.data.find(post=>post.id===postId);
        setPost(tempData)
        console.log('In UF')
        console.log(post)
    }, [post])

    if (post.blogImage==="") return null;

    return (
        <section className="container"> 
            <div className="row" style={{display: 'flex'}}>
                <div className="col-md-4" >
                    <div className="card" >
                        <div className="card-header">
                            <h5>Rejuvenation Efforts</h5>
                        </div>

                        <div className="card-body">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Lake survey and mapping
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Fencing lake boundary
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Reclaim lake area
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Native vegetation establishment
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Diversion of domestic sewage to STP
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Bird islands
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Lake inlet wetlands
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Drain wetlands
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Lake inlet waste trapping structure
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Drain waste trapping structure
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey ="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div> 

                <div className="col-md-8" >
                    <div className="card" >
                        <div className="card-header">
                            <h5>{post.lakeName}</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <p>{post.lakeDesc}</p>
                            </div>
                            {/* <img className="card-img-top" src={require(`../../blogPostImages/` + post.blogImage).default} alt="cardimage"></img> */}
                        </div>
                        <section >
                            <div style={{display: `flex`, margin: '0 0%'}}>
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
            </div>
    </section>

)
}

export default LakeProfileHoskereHalli
