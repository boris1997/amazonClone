import React, { Fragment } from 'react'
import './ImgCom.css'

function ImgCom({ image }) {

    /* console.log(image) */
    return (
        <Fragment >
            <img src={image} alt=""/>
        </Fragment>
    )
}

export default ImgCom
