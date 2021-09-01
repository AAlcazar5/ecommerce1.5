import {Switch, Route } from 'react-router-dom';
import HomePage from './components/home/home-page';
import Terms from './components/shared/footer/terms';
import Privacy from './components/shared/footer/privacy';
import FAQ from './components/shared/footer/faq';
import NotFound from './components/shared/not-found';
import Shop from './components/shop/shop';
import SingleProduct from './components/shop/single-product/single-product';
import CartPage from './components/cart/cart-page/cart-page';
import Checkout from './components/cart/checkout/checkout';
import Success from './components/cart/checkout/stripe-checkout/success';
import Canceled from './components/cart/checkout/stripe-checkout/canceled';
import SignUp from './components/sign-in/sign-up';
import SignIn from './components/sign-in/sign-in';
import Contact from './components/contact/contact';
import OrderHistory from './components/order-history/order-history';
import OrderDetails from './components/order-history/order-details';
import ReturnRequest from './components/order-history/return-request';
import RequestSuccess from './components/order-history/request-success';
import Blogs from './components/blog/blogs';
import SingleArticle from './components/blog/single-article';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/blogs/:slug' component={SingleArticle} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/product/:id' component={SingleProduct} />
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/canceled' component={Canceled} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path="/history" component={OrderHistory} />
          <Route exact path="/history/:id" component={OrderDetails} />
          <Route exact path="/return-request" component={ReturnRequest} />
          <Route exact path="/request-success" component={RequestSuccess} />
          <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;