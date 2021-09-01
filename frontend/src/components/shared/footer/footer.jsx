import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{marginTop: '50px'}}>
             <section className="section">
                <div className="container">
                    <div className="columns">

                        <div className="column"  style={{width: '300px'}}>
                            <h3 className="magical-title playfair">Yerbaropa 💚 Hemp</h3>
                            <p className="yerbaropa montserrat" style={{fontSize: '18px'}}>Our mission is to push a sustainable future forward with hemp clothing that is clean environmentally and aesthetically.</p> 
                        </div>

                        <div className="column" style={{width: '300px'}}>
                            <h3 className="about-title playfair">About</h3>
                            <div className="about-content">
                                <ul >
                                    <li><Link to="/contact" className="montserrat">Contact Us</Link></li>
                                    <li><Link to="/terms" className="montserrat">Terms</Link></li>
                                    <li><Link to="/faq" className="montserrat">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="column"  style={{width: '300px'}}>
                            <h3 className="shop-links-title playfair">Shop</h3>
                                <div className="shop-links-content">
                                    <ul>
                                        <li><Link to="/product/1" className="montserrat">Oil</Link></li>
                                        <li><Link to="/product/2" className="montserrat">Capsules</Link></li>
                                        <li><Link to="/product/3" className="montserrat">Edibles</Link></li>
                                        <li><Link to="/product/4" className="montserrat">E-Liquid</Link></li>
                                        <li><Link to="/product/5" className="montserrat">Cream</Link></li>
                                    </ul>
                                </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="ft-legal">
                <div className="container">
                    <ul className="ft-legal-list">
                        <li className="terms" style={{width: '300px'}}><Link className="montserrat" to="/terms">Terms &amp; Conditions</Link></li>
                        <li className="privacy" style={{width: '300px'}}><Link className="montserrat" to="/privacy">Privacy Policy</Link></li>
                        <li className="year montserrat" style={{width: '300px'}}>{year} ©Yerbaropa</li>
                    </ul> 
                </div>
            </section>
        </footer>
       
    );
  };

  export default Footer;