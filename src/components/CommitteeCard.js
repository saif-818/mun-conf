import React from 'react';
import './CommitteeCard.css';
import Pdf from './file.pdf'
const CommitteeCard = ({agendaCards}) => {
    return (
        <>
            {agendaCards.map( (key) => 
       
                <div class="card">
                    <div class="agenda-image" style={ {backgroundImage: `url(${key.img})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat',marginLeft:'28px'}}>
                    </div>
                    <div class="title">
                        <h1 className='agenda-title'>
                            {key.agenda}
                        </h1>
                        <p className='agenda-body'>
                            {key.note}
                        </p>
                    </div>
                    <div class="des">
                        <a href = {Pdf} target = "blank" class="button" >Resources Coming Soon </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default CommitteeCard;