import React from 'react'
import './style.css'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
import TeaserCard from '../../components/TeaserCard'
import SideBar from '../../components/SideBar'
import PCard from '../../components/UI/PCard'

import mainImage from '../../blogPostImages/taralake3.jpg'
import threatSlider from '../../blogPostImages/Threats.png'
import lakeprofile from '../../blogPostImages/LakeProfile.png'



const Home = (props) => {
  
    return (
        <div>
            <section className="homePosts">
                <div style={{width: `70%`, display: `flex`}}>
                    <Carousel
                        plugins={[
                        'infinite',
                        {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                        }
                        },
                    ]}   
                    animationSpeed={1000}
                    >
                        <img src={threatSlider} className="sliderimg" alt="main1" />
                        <img src={lakeprofile} className="sliderimg" alt="main2"/>
                        <img src={mainImage} className="sliderimg" alt ="main3"/>
                    </Carousel>
                    
                </div>
                <div className="homeSide" style={{padding: '10px 10px'}}>
                    <PCard>
                        <h2>Why should we save lakes?</h2>
                        <h5>So .....</h5>
                        <p>
                            <ul>
                                <li>The food you eat, even organic does not get chemically polluted water</li>
                                <li>Your tax money is not frittered away but put to good use</li>
                                <li>You leave a beautiful world for your grandchildren</li>
                            </ul>
                        </p>
                    </PCard>
                </div>
            </section>

            <section className="galleryPost">
                <div style={{width: `70%`, display: `flex`}}>
                        <TeaserCard/>
                        {/* <TeaserCard />
                        <TeaserCard /> */}
                </div>
                <SideBar />
            </section>

        </div>
    )
}


export default Home