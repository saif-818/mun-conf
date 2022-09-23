import React from 'react'
import './Team1.css'
import Secretary from './DG_Aditya_Gudade.jpg'
const Team1 = () => {
  return (
    <div className='team1'>
        <div className='holder'>
            <div className='cards'>
                <div className='imgBox'>
                    <img src={Secretary}></img>
                </div>
                <div className='profile-content'>
                    <div className='profile-details'>
                        <h2 className>Aditya Gudade<br></br><span>Secretary General</span></h2>
                        <ul className='profile-social-icons'>
                            <li><a href='#'><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                            <li><a href='#'><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href='#'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
        </div>
    </div>
  )
}

export default Team1