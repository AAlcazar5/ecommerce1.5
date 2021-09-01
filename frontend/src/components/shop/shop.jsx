import React, { useContext } from 'react';
import Layout from '../shared/layout';
import FeaturedProduct from './featured-product/featured-product';
import { ProductsContext } from '../../context/products-context';
import './shop.styles.scss';
import Fade from 'react-reveal/Fade'

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
      <FeaturedProduct { ...product } key={product.id} />
    ));
  
    return (
      <Layout>
        <div className='product-list-container'>
          <h2 className='product-list-title playfair'>Shop</h2>
          <div className='product-list montserrat'>
            <Fade>
              {
                allProducts
              }
            </Fade>
          </div>
        </div>
      </Layout>
    );
  }
  
  export default Shop;