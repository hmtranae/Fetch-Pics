import React from 'react';

const ImageList = (props) => {
    console.log(props.images);
    const images = props.images.map(img => {
        return <img key={img.id} src={img.urls.thumb} />
    });
    return <div>{images}</div>
}

export default ImageList;
