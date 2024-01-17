import React from 'react'
import profilePic from './assets/profile.jpg'

const Card = () => {
  return (
    <div className='card'>
        <img src={profilePic} />
        <h2 className='card-title'>JD Kimball</h2>
        <p className='card-text'>Business solutions software developer</p>
    </div>
  )
}

export default Card