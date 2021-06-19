import React, {useState} from 'react'
import PCard from '../../components/UI/PCard'
import './style.css'
import slider1 from'../../blogPostImages/TaraLake.jpg'
import slider2 from '../../blogPostImages/taralake3.jpg'
import slider3 from '../../blogPostImages/taralakeencroach.jpg'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const HealthThreats=(props)=> {
    const sliderData =[
        {imageId: 1, imageTitle:"Environment", imageSource:slider1},
        {imageId: 2, imageTitle:"Biological Threats", imageSource:slider2},
        {imageId: 3, imageTitle: "Chemical Changes", imageSource:slider3}
    ]

    const [current, setCurrent] = useState(0)
    const length = sliderData.length

    const nextSlide=()=> {
        setCurrent(current === length-1 ? 0: current+ 1)
    }

    const prevSlide=()=> {
        setCurrent(current === 0 ? length -1: current- 1)
    }

    console.log(current)

    console.log(sliderData)
    return (
        <div>
            <PCard>
            <section className = "slider">
                <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
                    <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide}  />
                {sliderData.map((slide, index) => {
                    return (
                        <div className={index === current? 'slide active' : 'slide'}
                           key={index} >
                               {index === current && (<img className="imageMap" key= {slide.imageId} 
                                 src={slide.imageSource} alt="Slider1" />  )}
                        </div>
                    )
                }) }
            </section>
            </PCard>
        </div>
    )
}

export default HealthThreats