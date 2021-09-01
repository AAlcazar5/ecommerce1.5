import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons/index'
  
const CartItem = (props) => {
    const { title, imageUrl, price, quantity, id, description, increase, decrease, removeProduct } = props;
    const product = { title, imageUrl, price, quantity, id, description };
  
    return (
      <div className='cart-item'>
        <div className='item-image'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='name-price'>
          <h4 className="montserrat">{title}</h4>
          <p className="montserrat">${price}</p>
        </div>
        <div className='quantity'>
          <p className="montserrat">{`Quantity: ${quantity}`}</p>
        </div>
        <div className='btns-container montserrat'>
          <button
          className='btn-increase montserrat' onClick={() => increase(product)}>
            <PlusCircleIcon width='20px' />
          </button>
          {
            quantity === 1 && 
            <button
            className='btn-trash montserrat' onClick={() => removeProduct(product)}>
              <TrashIcon width='20px' />
            </button>
          }
          {
            quantity > 1 && 
            <button
            className='btn-decrease montserrat' onClick={() => decrease(product)}>
              <MinusCircleIcon width='20px' />
            </button>
          }
        </div>
      </div>
    );
  }
  
export default CartItem;