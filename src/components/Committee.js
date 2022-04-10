import React from 'react'
import CommitteeCard from './CommitteeCard'
import './Committees.css';
import DISEC from './committeeLogos/Black/DISEC.png';
import AIPPM from './committeeLogos/Black/AIPPM.png';
import UNHRC from './committeeLogos/Black/UNHRC.png';
import UNSC from './committeeLogos/Black/UNSC.png';
import UNW from './committeeLogos/Black/UNW.png';
import Footer from './Footer';


const Committee = () => {
  const agendaCards = [
    {
      agenda: 'DISEC',
      img: DISEC,
    },
    {
      agenda: 'AIPPM',
      img: AIPPM,
    },
    {
      agenda: 'UNHRC',
      img: UNHRC,
    },
    {
      agenda: 'UNSC',
      img: UNSC,
    },
    {
      agenda: 'UNW',
      img: UNW,
    },
  ];
  return (
    <>
      <div class="heading-title text-center">
          <span class="subtitle">About</span>
          <h2 class="f-weight-700 margin-0">Committees</h2>
          <div class="bordershep"></div>
      </div>
      <div className='resource-section'>
          <CommitteeCard agendaCards={agendaCards} /> 
      </div>
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Committee;

