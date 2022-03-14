import React from 'react'
import './Hobbies.css'

const Hobbies = (props) => {
    const { hobbiesUrl } = props
    return(
        <img className="hobbies" src={hobbiesUrl}/>
    )
}

export default Hobbies;