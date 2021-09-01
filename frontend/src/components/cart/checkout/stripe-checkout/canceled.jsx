import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../../shared/layout';

const Canceled = ({ history }) => {
  return (
    <Layout>
      <div className='checkout'>
        <h1 className='playfair' style={{marginLeft: '150px', marginRight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black'}}>Payment failed</h1>
        <p className='montserrat' style={{marginLeft: '150px', marginRight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Payment was not successful</p>
        <div>
          <button className='button is-black yerbaropa-btn submit montserrat' 
          onClick={() => history.push('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Canceled);