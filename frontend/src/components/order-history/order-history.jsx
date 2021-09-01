import React, { useState, useEffect } from 'react';
import Layout from '../shared/layout';
import { fetchFromAPI } from '../../helpers';
import TimeConverter from './time-converter';
import { Link } from 'react-router-dom';
import './order-history.styles.scss';

const OrderHistory = () => {
    const [paymentIntents, setPaymentIntents] = useState({});
    
    const fetchData = async() => {
        try {
            const data = await fetchFromAPI('get-payment-intents', {method: 'GET'}); 
            // console.log('data: ', data)
            setPaymentIntents(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
   
    return ( 
        <Layout>
            {paymentIntents.length > 0 && 
                 <div className="history-page"> 
                 <h2 className="title playfair">Purchase History</h2>
                 <table>
                     <thead>
                         <tr>
                                 <th className="montserrat">Date</th>
                                 <th className="montserrat">Price</th>
                                 {/* <th>Email</th> */}
                                 <th className="montserrat">Address</th>
                                 {/* <th>City</th>
                                 <th>Zip Code</th> */}
                                 <th className="montserrat">Returns</th>
                             </tr>
                     </thead>
                    
                     <tbody>
                        {
                            // eslint-disable-next-line                            
                             Object.values(paymentIntents).map((value) => {
                                 if (value.status === 'succeeded') {
                                     return (
                                         <tr key={value.id}>
                                             <td className="montserrat">{TimeConverter(value.created)}</td>
                                             <td className="montserrat">{'$' + (value.amount) / 100 + '.00' }</td>
                                             {/* <td>{value.receipt_email}</td> */}
                                             <td className="montserrat">
                                                 {value.shipping.address.line1}, {value.shipping.address.city}, {value.shipping.address.postal_code}, {value.shipping.address.state}, {value.shipping.address.country}
                                             </td>
                                             {/* <td>{value.shipping.address.city}</td>
                                             <td>{value.shipping.address.postal_code}</td> */}
                                             <td> 
                                                 <button className="button is-black montserrat">
                                                     <Link to="/return-request">REQUEST RETURN</Link>
                                                 </button>
                                             </td>
                                         </tr>
                                     )
                                 }
                                 
                                //  elif (paymentIntents.length === 0) {
                                //     return (
                                //         <h1>You have no orders, would you like to change that? :P</h1>
                                //     )
                                //  }
                                                                 
                             })
                        }
                     </tbody>
                 </table>
             </div>
            }
            {
                paymentIntents.length === 0 && 
                    <h3 className="montserrat" style={{color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>You have no orders, would you like to change that? :P</h3>
            }
            {
                paymentIntents.length === undefined && 
                    <h3 className="montserrat" style={{color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>You have no orders, would you like to change that? :P</h3>
            }
        </Layout>
    );
}

export default OrderHistory