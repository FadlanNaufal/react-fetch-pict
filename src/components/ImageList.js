import React from 'react'
import Loading from './Loading'


const ImageList = props => {
    console.log(props.images)

    if (props.images.length > 0) {
        const images = props.images.map(image => {
            return (
                <div style={{ marginBottom: 30 }}>
                    <img style={{ width: '100%', height: '60%' }} key={image.id} src={image.urls.regular} alt={image.alt_description} />
                    <h1>{image.alt_description}</h1>
                    <p style={{ color: 'gray' }}>{image.created_at}</p>
                    <p>{image.likes}</p>
                    <hr />
                </div>
            )
        })
        return <div>{images}</div>
    }

    return <div className="ui container">
        <h1 style={{ textAlign: 'center' }}>Find Your Image Here!</h1>
    </div>
}

export default ImageList