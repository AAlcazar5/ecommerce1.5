import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import './main-section.styles.scss'

const MainSection = ({ history }) => {
    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                {/* <div className='ms-m-image'>
                    <img src={tincture} alt='tincture' className='tincture'/>
                </div> */}
                <div className='ms-m-description'>
                    <h2 className='montserrat'>Designed for everyday. Crafted for the long term.</h2>
                    <p className='montserrat'>
                        We make products that stand the test of time, 
                        in terms of durability and classic design.
                        We proudly create our clothes with the finest hemp fibers;
                        your purchases fund a more sustainable future.
                    </p>
                    <div className="button-container">
                        <button className='button is-black button-link montserrat' >
                            <Link className='button-link montserrat' to="/blogs">FIND OUT HOW</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection);