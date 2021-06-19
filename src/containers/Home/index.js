import React from 'react'
import './style.css'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
import SideBar from '../../components/SideBar'

import mainImage from '../../blogPostImages/NewLakeMain-1200-380.png'
import threatSlider from '../../blogPostImages/THREATS.png'
import lakeprofile from '../../blogPostImages/Outcome Actions-1200-380.png'
import ican from '../../blogPostImages/Ican.png'
import lakeData from '../../data/blog.json'
import RenderTeaserCard from '../../components/UI/RenderTeaserCard'


const Home = (props) => {
    console.log(lakeData)

    const tempData = lakeData.data

    const renderBlogList = tempData.map((lake)=> {
        return (
            <div className="col-md-4" >
            <RenderTeaserCard lake={lake} />
            </div>
        )
    })
  
    return (
        <div>
            <section className="homePosts">
                <div style={{width: `100%`, display: `flex`}}>
                    <Carousel
                        plugins={[
                        'infinite',
                        {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 4000,
                        }
                        }
                    ]}   
                    animationSpeed={1000}
                    >
                        <img src={mainImage} className="sliderimg" alt ="main3"/>
                        <img src={threatSlider} className="sliderimg" alt="main1" />
                        <img src={lakeprofile} className="sliderimg" alt="main2"/>
                        <img src={ican} className="sliderimg" alt="main3"/>
                    </Carousel>
                    
                </div>
            </section>

            <section className="galleryPost">
                <div style={{display: `flex`}}>
                <section style={{display: `flex`}}>
            <div>{renderBlogList}</div>
        </section>
                </div>
                <SideBar />
            </section>

        </div>
    )
}


export default Home