import React from 'react';
import './CommitteeCard.css';
import Pdf from './file.pdf'
const CommitteeCard = ({agendaCards}) => {
    return (
        <>
            {agendaCards.map( (key) => 
       
                <div class="card">
                    <div class="image" style={ {backgroundImage: `url(${key.img})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat',marginLeft:'42px'}}>
                    </div>
                    <div class="title">
                        <h1>
                            {key.agenda}
                        </h1>
                    </div>
                    <div class="des">
                        <a href = {Pdf} target = "_blank" class="button" >Resources Coming Soon </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default CommitteeCard;