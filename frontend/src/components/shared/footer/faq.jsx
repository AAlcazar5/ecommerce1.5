import React from 'react'
import Layout from '../layout';

const FAQ = () => {
    return ( 
        <Layout>
            <h3 className="playfair" style={{marginTop: '50px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Frequently Asked Questions</h3>
            <ul className="faq-container" style={{marginLeft: '150px', marginRight: '150px'}}>
                <li><b className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Why buy Hemp clothing?</b></li>
                <li className="montserrat" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>There are numerous reasons to buy hemp clothing; the main among them that they last way longer than your average piece of clothing, get better as time goes on, are better for the environment, and support the growing of hemp, which has a myriad of benefits as a crop over alternatives.</li>

                <li><b className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>How does the material feel?</b></li>
                <li className="montserrat"  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>The material has a unique feel, thanks to our blends of hemp with other materials they tend to feel soft on the skin, cool in the summer and warmer in the winter.</li>

                <li><b className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>What size should I buy?</b></li>
                <li className="montserrat" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>You can buy your regular size, but keep in mind that they don't shrink as much as a cotton piece of clothing so you don't have to buy larger than usual. We've included size charts under each item description so that you can estimate accordingly.</li>

                <li><b className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>How should I wash these clothes?</b></li>
                <li className="montserrat" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Hemp clothes are machine washable like your average cotton or polyster piece of clothing. What's great about hemp is that it actually gets more comfortable and worn in as you wash it, rather than worn out and raggedy.</li>

                <li><b className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Is it true that hemp clothing is better for the environment?</b></li>
                <li className="montserrat" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Yes! The main benefits of hemp over cotton is that hemp farming uses far less water and pesticides. The main benefits over sythetic materials like polyster or nylon is that hemp is biodegradable, meaning that when it is discarded it won't continue polluting our landfills.</li>

                <li><b className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>What's your return policy?</b></li>
                <li className="montserrat" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>All sales are final, but we do provide exceptions for deformed clothing.</li>

                <li className="montserrat" style={{marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Here we've provided an overview of some questions consumers we have, but you can also reach out to us if you have further questions, or read more at our blog about the benefits of hemp. </li>
            </ul>
        </Layout>
     );
}
 
export default FAQ;