import React from 'react';
import PenisIcon from './PenisIcon'
import Hobbies from './Hobbies'
import './Hobbies.css'
import './PersonCard.css'
import Image from './Image'
import Description from './Description';

const PersonCard = ({ name, picture, description,age,hobbiesUrl, emoji}) => {
  return (
    <div className="person-card">
        <h1>
          {name}
          <PenisIcon text={emoji} />
        </h1>
        <Image source={picture}/>
        <Hobbies className="hobbies" hobbiesUrl={hobbiesUrl}/>
        <Description className="description" description={description} age={age}/>
    </div>
  )
}

export default PersonCard;