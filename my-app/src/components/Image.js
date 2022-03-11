import React from 'react'
import './Image.css'

const Image = (props) => {
    const {source} = props
    return (
        <img className= "image" src={source} />
    )
}
export default Image
