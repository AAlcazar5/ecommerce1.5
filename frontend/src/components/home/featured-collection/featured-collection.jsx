import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/products-context';
import FeaturedProduct from '../../shop/featured-product/featured-product';
import Fade from 'react-reveal/Fade';

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map(product => (
    <Fade>
      <FeaturedProduct {...product} key={product.id} />
    </Fade>
  )); 

  return (
    <div className='featured-collection collection-container'>
      <h2 className='featured-section-title montserrat'>Featured Products</h2>
      <div className='products montserrat'>
          {
            productItems
          }
      </div>
    </div>
  );
}

export default FeaturedCollection;