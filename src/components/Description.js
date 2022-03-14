import React from 'react'
import './Description.css'

const Description = (props) => {
    const { description, age } = props
    return (
        <div className='description'>
            <h2>Description:</h2>
            <h3>Age: {props.age}</h3>
            <h3>Bio: {props.description}</h3>
        </div>
    )
}
export default Description