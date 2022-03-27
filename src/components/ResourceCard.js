import React from 'react';
import './ResourceCard.css';
import Pdf from './file.pdf'
const ResourceCard = (props) => {
    return (
        <>
                <div class="card">
                    <div class="image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg/1199px-Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg"></img>
                    </div>
                    <div class="title">
                        <h1>
                            ABCD
                        </h1>
                    </div>
                    <div class="des">
                        <a href = {Pdf} target = "_blank" class="button" >Download </a>
                    </div>
                </div>
        </>
    )
}

export default ResourceCard