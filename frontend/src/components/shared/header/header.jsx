import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../cart/cart-icon/cart-icon';
import { auth } from '../../../firebase/firebaseConfig';
import { UserContext } from '../../../context/user-context'
import './header.styles.scss';

const Header = () => {
  const { user } = useContext(UserContext);
  // console.log('user', user);
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/' className="montserrat">Yerbaropa</Link>
      </div>
      <ul>
        <li>
          <Link to='/shop' className="montserrat">
            Shop
          </Link>
        </li>
        <li>
          <Link to='/history' className="montserrat">
            Orders
          </Link>
        </li>
        <li>
          <Link to='/blogs' className="montserrat">
            Blog
          </Link>
        </li>
        <li>
          <Link to='/contact' className="montserrat">
            Contact
          </Link>
        </li>
        {
          !user && 
          <li>
            <Link to='/sign-in' className="montserrat">
              Sign In
            </Link>
          </li>
        }
        {
          user && 
          <li onClick={() => auth.signOut()} className="montserrat">
            Sign Out
          </li>
        } 
        {
          !user && 
          <li>
            <Link to='/sign-up' className="montserrat">
              Sign Up
            </Link>
          </li>
        }
      </ul>
      <CartIcon />
    </nav>
  );
}

export default Header;