import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductsContextProvider from './context/products-context';
import CartContextProvider from './context/cart-context';
import UserContextProvider from './context/user-context';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './fonts/Montserrat/Montserrat-Regular.ttf'; 
import './fonts/Lato/Lato-Regular.ttf'; 
import './fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

ReactDOM.render(
  <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </Elements>
        </CartContextProvider>
      </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);