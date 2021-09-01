import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductsContext } from '../../../context/products-context';
import { CartContext } from '../../../context/cart-context';
import { isInCart } from '../../../helpers';
import Layout from '../../shared/layout';
import './single-product.styles.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// pass match (if the product matches) and the history (what the product has been in) into the params
const SingleProduct = ({ match, history: { push } }) => {
    // grab the list of products from the ProductsContext
    const { products } = useContext(ProductsContext);
    const { addProduct, cartItems, increase } = useContext(CartContext)
    // grab the matching id from the match passed into params
    const { id } = match.params;
    // set the initial state of product 
    const [product, setProduct] = useState(null);
    useEffect(() => {
        // check current product against id in the products array
        const product = products.find((item) => Number(item.id) === Number(id));
        
        // if product does not exist, redirect user to shop page
        if (!product) {
            return push('/shop')
        }

        // product that we found from the context
        setProduct(product);
    }, [id, product, push, products]);

    // while we check for the product
    if (!product) { return null } 
    const { imageUrl, title, price, meta, description, materials, environmentalImpact, style } = product;
    const itemInCart = isInCart(product, cartItems)

    return (
        <Layout>
            <div className='single-product-container'>
                <div className='product-image'>
                    <img src={imageUrl} alt='product' />
                </div>
                <div className='product-details'>
                    <div className='name-price'>
                        <h3 className="montserrat" style={{marginTop: '30px', display: 'flex', justifyContent: 'center', fontSize: '20px'}}>{title}</h3>
                        <p className="montserrat" style={{display: 'flex', justifyContent: 'center'}}>${price}</p>
                    </div>
                    <div className='add-to-cart-buttons'>
                        {
                            !itemInCart && 
                            <button 
                                className='button is-white yerbaropa-btn montserrat' 
                                id='btn-white-outline'
                                onClick={() => addProduct(product)}>
                                ADD TO CART
                            </button>
                        }

                        {
                            itemInCart && 
                            <button 
                                className='button is-white yerbaropa-btn montserrat' 
                                id='btn-white-outline'
                                onClick={() => increase(product)}>
                                ADD MORE
                            </button>
                        }

                            <button 
                                className='button is-black yerbaropa-btn montserrat' 
                                id='btn-white-outline'
                                onClick={() => {}}>
                                PROCEED TO CHECKOUT
                            </button>
                    </div>
                    <div className='product-description'>
                        <p className="montserrat">{meta}</p>
                        <p className="montserrat">
                            { description }
                        </p>
                    </div>

                    <Tabs>
                        <TabList>
                            <Tab className="montserrat">Materials</Tab>
                            <Tab className="montserrat">Environmental Impact</Tab>
                            <Tab className="montserrat">Style</Tab>
                        </TabList>

                        <TabPanel>
                            <p className="montserrat"> {materials} </p>
                        </TabPanel>
                        <TabPanel>
                            <p className="montserrat" > {environmentalImpact} </p>
                        </TabPanel>
                        <TabPanel>
                            <p className="montserrat"> {style} </p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </Layout>
    )
}


export default withRouter(SingleProduct);