import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import PCard from '../../components/UI/PCard'
import TeaserCard from '../../components/TeaserCard'
import SideBar from '../../components/SideBar'
import mainImage from '../../blogPostImages/taralake3.jpg'
import sideImage1 from '../../blogPostImages/TaraLake.jpg'
import sideImage2 from '../../blogPostImages/NichiLakes.jpg'
import sideImage3 from '../../blogPostImages/taralakeencroach.jpg'
import InfoCard from '../../components/InfoCard'


const Home = props => {

    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow:'hidden'
    };
    const sideHeight = galleryHeight/3;
    return (
        <div>
            <PCard >
                <div className="galleryPost" style ={galleryStyle}>
                    <section style={{width:`70%`}}>
                        <div className="postImageWrapper">
                            <img alt="mainImage" src={mainImage} />
                            <div className="mainImageText">
                                <h4>Featured Lake</h4>
                                <Link to='/LakeProfile'>
                                <button className="mainImageButton">Hoskerehalli Lake, May 2021</button></Link>
                            </div>
                        </div>
                    </section>

                    <section className="sideImageWrapper" style={{width:`30%`}}>
                        <div className="SideImageContainer" style={{height: `${sideHeight}px`}}>
                            <img alt="mainImage" src={sideImage1} />
                            <div className="sideImageText" >hhhh</div>
                        </div>
                        <div style={{height: `${sideHeight}px`}}>
                            <img alt="mainImage" src={sideImage2} />
                        </div>
                        <div style={{height: `${sideHeight}px`}}>
                            <img alt="mainImage" src={sideImage3} />
                        </div >
                    </section>
                </div>
            </PCard>
            
            <section className="homePosts">
                <div style={{width: `70%`, display: `flex`, height: `${sideHeight}px`}}>
                          <TeaserCard/>
                          <TeaserCard />
                          <TeaserCard />
                </div>
                <SideBar />
            </section>

        </div>
    )
}


export default Home