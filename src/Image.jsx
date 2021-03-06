import React from 'react'

const Image = (props) => {
    const {tags, webformatURL} = props;
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="rounded-lg overflow-hidden">
                    <img src={webformatURL} alt={tags} className="img-fluid"/>
                    {/* Hello babies do you miss there? */}
                </div>
            </div>
        </div>
    )
}

export default Image
