import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import shoppingBag from '../../../assets/shopping-bag.png';
import { CartContext } from '../../../context/cart-context';
import './cart-icon.styles.scss';

const CartIcon = ({ history }) => {
  const { itemCount, 
    // cartItems 
  } = useContext(CartContext);
  // console.log('CartItems:', cartItems);
  return (
    <div className='cart-container montserrat' onClick={() => history.push('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' className='montserrat' />
      {
        itemCount > 0 ? <span className='cart-count montserrat'> { itemCount } </span> : null
      }
    </div>
  );
}

export default withRouter(CartIcon);