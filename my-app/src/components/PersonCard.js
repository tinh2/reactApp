import React from 'react';
import PenisIcon from './PenisIcon'

const PersonCard = ({ name, picture, description,age}) => {
  return (
    <div style={{ border: "3px solid green" }}>
        <h1>
          {name}
          <PenisIcon text='🤯' />
        </h1>
        <img src={picture}/>
        <p>{description}</p>
        <b>{age}</b>
    </div>
  )
}

export default PersonCard;