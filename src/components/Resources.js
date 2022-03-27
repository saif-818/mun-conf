import React from 'react'
import ResourceCard from './ResourceCard'
import './Resources.css'

const Resources = () => {
  const multiple_cards = [1,2,3,4,5,6];
  return (
    <>
      <div className='resource-section'>
        {multiple_cards.map( (key) =>
          <div id={key}> <ResourceCard id={key} /> </div>   
        )} 
      </div>
    </>
  )
}

export default Resources;

