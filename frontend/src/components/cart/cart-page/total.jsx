import React, { useContext, 
  // useState 
} from 'react';
import { withRouter } from 'react-router-dom';
import './cart-page.styles.scss'
import { CartContext } from '../../../context/cart-context';
import StripeCheckout from '../checkout/stripe-checkout/stripe-checkout'

const Total = ({ itemCount, total, history, clearCart }) => {
  const { cartItems } = useContext(CartContext);
  // const [shipping, setShipping] = useState(null);

  return (
    <div className='total-container montserrat'>
      <p className="item-count montserrat">Total Items: {itemCount}</p>
      <p className="total montserrat">{`Total: $${total}`}</p>
      <div className='black-container montserrat'>
        {/* <button 
          className='button is-black' 
          onClick={() => history.push('/checkout')}>CHECKOUT
        </button> */}

        {/* <div className='checkout'> */}
          <StripeCheckout { ...{ 
            // shipping, 
            cartItems 
            } 
          }/>
        {/* </div> */}

      </div>
      <div className='white-container montserrat'>
        <button className='button is-white montserrat' onClick={() => clearCart()}>CLEAR</button>  
      </div>
    </div>
  );
}

export default withRouter(Total);