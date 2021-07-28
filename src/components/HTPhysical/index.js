import React from 'react'
import './style.css'
import encroach from '../../blogPostImages/encroach.jpeg'
import { FaSistrix} from 'react-icons/fa'

const HTPhysical = () => {
    const lakeArea = [
        {id:1, ltImage: 'encroach', ltTitle: 'Lakeside communities', ltDesc: "Both large builders and homeless poor are responsible for encroaching into the lands" },
        {id:2, ltImage: 'encroach', ltTitle: 'Roadside vendors', ltDesc: "Both large builders and homeless poor are responsible for encroaching into the lands" },
        {id:3, ltImage: 'encroach', ltTitle: 'LakeBunds', ltDesc: "Both large builders and homeless poor are responsible for encroaching into the lands" },
        {id:3, ltImage: 'encroach', ltTitle: 'LakeBunds', ltDesc: "Both large builders and homeless poor are responsible for encroaching into the lands" }
    ]

    const renderHealthList = lakeArea.map((health) =>{
        return (
            <div className="col-md-4" >
            <div className="card">
            <div className="card-image">
                <img alt="encroach" src={encroach} />
                <div className="btn-floating btn-large halfway-fab red">
                <FaSistrix /></div>
            </div>
            <div className="card-content">
                <em className="card-title">
                    {health.ltTitle} </em>
                <p className="card-body">
                    {health.ltDesc}
                </p>
            </div>
        </div>
        </div>
        )
    })

    console.log(renderHealthList)

    return (
        <section className="container">
            <h2>Encorachments WUOOO etc are the bane of our existence</h2>
            <div className="row" style={{display: 'flex'}}>
                    <div>{renderHealthList}</div>
                </div>
        </section>
    )
}

export default HTPhysical
