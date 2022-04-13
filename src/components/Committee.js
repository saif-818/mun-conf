import React from 'react'
import CommitteeCard from './CommitteeCard'
import './Committees.css';
import DISEC from './committeeLogos/Black/DISEC.png';
import AIPPM from './committeeLogos/Black/AIPPM.png';
import UNHRC from './committeeLogos/Black/UNHRC.png';
import UNSC from './committeeLogos/Black/UNSC.png';
import IP from './committeeLogos/Black/IP.png';
import AU from './committeeLogos/Black/AU.jpg';
import Footer from './Footer';


const Committee = () => {
  const agendaCards = [
    {
      agenda: 'DISEC',
      img: DISEC,
      note: 'Assesing and Minimising The Threats of Biological Warfare'
    },
    {
      agenda: 'AIPPM',
      img: AIPPM,
      note: 'Discussing The Implementation of Uniform Civil Code'
    },
    {
      agenda: 'UNHRC',
      img: UNHRC,
      note: 'Human Rights Violation Due To Modern Slavery'
    },
    {
      agenda: 'UNSC',
      img: UNSC,
      note: 'Militarisation of The Arctic'
    },
    {
      agenda: 'IP',
      img: IP,
      note: ''
    },
    {
      agenda: 'AU',
      img: AU,
      note: 'Role of AU in The Emerging World Order'
    }
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

