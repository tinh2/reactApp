import React from 'react';
import PenisIcon from './PenisIcon'
import Hobbies from './Hobbies'

const PersonCard = ({ name, picture, description,age,hobbiesUrl}) => {
  return (
    <div style={{ border: "3px solid green" }}>
        <h1>
          {name}
          <PenisIcon text='🤯' />
        </h1>
        <img src={picture}/>
        <Hobbies hobbiesUrl={hobbiesUrl}/>
        <p>{description}</p>
        <b>{age}</b>
    </div>
  )
}

export default PersonCard;