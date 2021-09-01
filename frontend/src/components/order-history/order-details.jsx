import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails(props) {
    const [orderDetails, setOrderDetails] = useState([])
    const { history } = props;

    const params = useParams(); 

    useEffect(() => {
        if (params.id) {
            history.forEach(item => {
                if (item.id === params.id) setOrderDetails(item)
            })
        }
    }, [params.id, history])

    // console.log(orderDetails);

    if (orderDetails.length === 0) return null;

    return (
        <div className="history-page">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Postal Code</th>
                        <th>Country Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderDetails}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{ margin: "30px 0px" }}>
                <thead>
                <tr>
                    <th></th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.map(item => {
                            return (
                                item.length === 0 ? 
                                <div>You have no orders</div> 
                                :
                                <tr key={item.id}>
                                    <td><img src={item.imageUrl} alt="item" /></td>
                                    <td> {item.title} </td>
                                    <td> {item.quantity} </td>
                                    <td>$ {item.price * item.quantity} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )

}

export default OrderDetails;