import React from 'react';
import PenisIcon from './PenisIcon'
import Hobbies from './Hobbies'
import './Hobbies.css'

const PersonCard = ({ name, picture, description,age,hobbiesUrl, emoji}) => {
  return (
    <div style={{ border: "3px solid green" }}>
        <h1>
          {name}
          <PenisIcon text={emoji} />
        </h1>
        <img src={picture}/>
        <Hobbies className="hobbies" hobbiesUrl={hobbiesUrl}/>
        <p>{description}</p>
        <b>{age}</b>
    </div>
  )
}

export default PersonCard;