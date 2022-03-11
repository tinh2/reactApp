import React from 'react'

const Hobbies = (props) => {
    const { hobbiesUrl } = props
    return(
        <img src={hobbiesUrl}/>
    )
}

export default Hobbies;