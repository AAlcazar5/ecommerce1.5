import React from 'react';
import GMO from './images/GMO.png';
import Hemp from './images/Hemp.png';
import Lab from './images/Lab.png';
import Money from './images/Money.png';
import Zero from './images/Zero.png';
import './image-row.styles.scss'

const ImagesRow = () => {
    return (
        <div className="image-row-container">
            <h1 className="arts montserrat">We Specialize In "Green" Clothing</h1>
            <p className="solutions montserrat"> Yerbaropa's "Green" clothing is all about creating clothing that is both good for the environment and lasts longer for our consumers. 
               Our ethos is artful minimalism. We emphasize only high quality products, at a value price point with simply elegant style.</p>

            <div className="images_row montserrat">
                <img src={GMO} alt="" className="GMO"></img>
                <img src={Hemp} alt="" className="Hemp"></img>
                <img src={Lab} alt="" className="Lab"></img>
                <img src={Money} alt="" className="Money"></img>
                <img src={Zero} alt="" className="Zero"></img>
            </div> 
        </div>
    )
}

export default ImagesRow;