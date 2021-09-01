import React from 'react';
import { Link } from 'react-router-dom';
import './hero.styles.scss';
import Jump from 'react-reveal/Jump'

const Hero = () => {
    return (
            <section className="hero is-info is-large hero-image">
                <Jump>
                <div className="hero-body">
                        <div className="hero-container"> 
                            <h1 className="title playfair">
                                "Slow" Fashion - Classic Sustainable Clothes
                            </h1>
                            <div className="shop-now-btn">
                                <button className="button is-black" id='shop-now'>
                                    <Link to='/shop' className='montserrat'>
                                            SHOP NOW
                                    </Link>
                                </button>
                            </div>
                        </div>
                </div>
                </Jump>
            </section>        
    )
}

export default Hero;