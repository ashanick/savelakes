import React from 'react'
import './style.css'

function LakeProfileHoskereHalli() {
    const profileHeight= 450;
    const profileStyle={
        height: profileHeight+'px',
        overflow: 'hidden'
    }

    return (
        <div>aa</div>
        /* <section className="container">
            <div className="row">
                <div className="col-md-4" style={{display: 'flex'}}>
                    <div className="card" style = {{margin: `1% 1%` }}>
                        <div className="card-header">
                            <h5>Lake Title</h5>
                        </div>
                        <img className="card-img-top" src={img1} alt="cardimage">
                        </img>
                        <div className="card-body">
                            <h5 className="card-title">Commanding Auth</h5>
                            <p>GPS location</p>
                            <p classNAme="card-text">Lake Description</p>
                        </div>
                    </div>

                    <div className="lakeProfileContainerTop" style={{profileStyle}}>
                    <div style={{width:'60%'}}>
                        <div className="lakeImg" >
                            <img alt = "lakeimg" src={require('../../blogPostImages/TaraLake.jpg').default}/>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    </div>
)
        // <div className="lakeProfileContainer">
        //     <PCard>
        //     <PCard >
        //     <h2>HoskereHalli Lake</h2>
        //     <div className="lakeProfileContainerTop" style={{profileStyle}}>
        //          <section style={{width:'60%'}}>
        //             <div className="lakeImg" >
        //                 <img alt = "lakeimg" src={require('../../blogPostImages/TaraLake.jpg').default}/>
        //             </div>
        //         </section>

        //         <section className="lakeProfileFacts" style={{width: '38%'}}>
        //             <div>
        //                 <p>Basic Facts here</p>
        //                 <ListGroup>
        //                 <ListGroup.Item variant="secondary">Location: Devabeesanahalli</ListGroup.Item>
        //                 <ListGroup.Item variant="secondary">Custodian: KSPCB</ListGroup.Item>
        //                 <ListGroup.Item variant="dark">Sources of Water: Rain, untreated STP</ListGroup.Item>
        //                 <ListGroup.Item variant="secondary">Inlets: 2, Outlet: 1</ListGroup.Item>
        //                 <ListGroup.Item variant="dark">Ecosystem:</ListGroup.Item>
        //                 <ListGroup.Item variant="secondary">Funtions of Lake: Ground Water Recharge, Flood protection, Fisheries, Biodiversity, Fisheries</ListGroup.Item>
        //                 </ListGroup>
        //             </div>
        //         </section>
        //         </div>

        //         <div className="lakeProfDesc">
        //             <p>Write something about lake description here spanning the whole length or what. Whew such a relief to get things looking decent and falling in place.  So much more to do</p>
        //         </div>

        //         <div className="rejuvPollution">
        //             <section className="rejuvBox" style={{width:'50%'}}>
        //                 <PCard style={{width:`99%`}}>
        //                     <p className="rejuvHdr"> In Rejuv</p>
        //                     <div className="rejuvAccordion">
        //                     <Accordion defaultActiveKey="0">
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="0">
        //                             Lake survey and mapping
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="0">
        //                             <Card.Body>Hello! I'm the body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Fencing lake boundary
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Reclaim lake area
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Native vegetation establishment
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Diversion of domestic sewage to STP
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Bird islands
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Lake inlet wetlands
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Drain wetlands
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Lake inlet waste trapping structure
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Drain waste trapping structure
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Elevated ring bund
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                         <Card>
        //                             <Card.Header>
        //                             <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                             Increased capacity due to dredging
        //                             </Accordion.Toggle>
        //                             </Card.Header>
        //                             <Accordion.Collapse eventKey="1">
        //                             <Card.Body>Hello! I'm another body</Card.Body>
        //                             </Accordion.Collapse>
        //                         </Card>
        //                     </Accordion>
        //                     </div>
        //                 </PCard>
        //             </section>

        //             <section className="polBox" style={{width:'50%'}}>
        //                 <PCard style={{width:`99%`, marginRight: `3%`}}>
        //                     <p className="polHdr"> In Pollution</p>
        //                     <div className="polFlex">
        //                         <div className ="polFlexRowHead">
        //                             <div className = "polFlexCol1">
        //                                 #
        //                             </div>
        //                             <div className = "polFlexCol2" >
        //                                 Parameter
        //                             </div>
        //                             <div className = "polFlexCol3" >
        //                                 Values
        //                             </div>
        //                         </div>

        //                         <div className ="polFlexRow1">
        //                             <div className = "polFlexCol1" >
        //                                 #1
        //                             </div>
        //                             <div className = "polFlexCol2" >
        //                                 Dissolved Oxygen
        //                             </div>
        //                             <div className = "polFlexCol3">
        //                                 <ul>
        //                                     <li>Standard</li>
        //                                     <li>Range</li>
        //                                     <li>Average</li>
        //                                     <li>Data</li>
        //                                 </ul>                                    
        //                             </div>
        //                         </div>

        //                         <div className ="polFlexRow2">
        //                             <div className = "polFlexCol1" >
        //                                 #1
        //                             </div>
        //                             <div className = "polFlexCol2" >
        //                                 Biological Oxygen Demand
        //                             </div>
        //                             <div className = "polFlexCol3">
        //                                 <ul>
        //                                     <li>Standard</li>
        //                                     <li>Range</li>
        //                                     <li>Average</li>
        //                                     <li>Data</li>
        //                                 </ul>                                    
        //                             </div>
        //                         </div>

        //                         <div className ="polFlexRow1">
        //                             <div className = "polFlexCol1" >
        //                                 #1
        //                             </div>
        //                             <div className = "polFlexCol2" >
        //                                 Chemical Oxygen Demand
        //                             </div>
        //                             <div className = "polFlexCol3">
        //                                 <ul>
        //                                     <li>Standard</li>
        //                                     <li>Range</li>
        //                                     <li>Average</li>
        //                                     <li>Data</li>
        //                                 </ul>                                    
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </PCard>
        //             </section>
        //         </div>
        //     </PCard>


        //     </PCard>
        // </div> */
    )
}

export default LakeProfileHoskereHalli
