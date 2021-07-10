import React, {useState, useEffect} from 'react'
import API from '../../API'
import InfiniteScroll from 'react-infinite-scroller'
import Masonry from 'react-masonry-css'
import './style.css'

import Image from '../../Image'

let pageNum = 1


const BWork = () => {
    const [imagesArray, setImagesArray] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const fetchImages = pageNumber => {
        API.get("/", {params: {page:pageNumber}})
        .then ((res)=> {
            setImagesArray([...imagesArray, ...res.data.hits])
            setTotalPages(res.data.totalHits/res.data.hits.length)
        })
        .catch ((err)=> console.log(err));
    }

    useEffect(()=>{
        fetchImages(pageNum)
    }, [])

    const breakPointsColumnsObj = {
        default: 6,
        1200: 3,
        992: 3,
        768: 2,
        576: 1
    }

    return (
        <div className="container">
            <section >
                <div className="row" style={{display: 'flex'}}>
                    <div className="col-md-4">
                        <div className="card" style={{paddingTop: `10px`}}>
                            <div className="card-header">
                                Academia
                            </div>
                            <div className="card-body">
                                Incorporating articles that discuss academic research
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{paddingTop: `10px`}}>
                            <div className="card-header">
                                Government Efforts
                            </div>
                            <div className="card-body">
                                Incorporating articles that discuss academic research
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{paddingTop: `10px`}}>
                            <div className="card-header">
                                Individual dedication
                            </div>
                            <div className="card-body">
                                Incorporating articles that discuss academic research
                            </div>
                        </div>
                    </div>
                </div>
               
        </section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <InfiniteScroll pageStart={0} 
                        loadMore={()=>fetchImages(++pageNum)}
                        hasMore={pageNum < totalPages ? true: false}>
                        <Masonry breakpointCols={breakPointsColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column">
                            {imagesArray.map((image)=>(
                                <Image key={image.id} {...image} />
                            ))}
                        </Masonry>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BWork
