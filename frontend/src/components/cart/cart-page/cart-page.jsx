import React, { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
import Layout from '../../shared/layout';
import CartItem from './cart-item';
import Total from './total';
import './cart-page.styles.scss';

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct }
  return (
    <Layout>
      <>
        <h1 className='playfair' style={{color: 'black'}}>Cart</h1>
        {
          cartItems.length === 0 ? <div className='empty-cart montserrat'>Your Cart is Empty</div>
          : 
          <>
            <div className='cart-page montserrat'>
              <div className='cart-item-container montserrat'>
                {
                  cartItems.map(item  => <CartItem { ...item } key={item.id} { ...funcs }/>)
                }
              </div>
              <Total className='montserrat' itemCount={itemCount} total={total} clearCart={clearCart} />
            </div>
          </>
        }
      </>
    </Layout>
  );
}

export default CartPage;