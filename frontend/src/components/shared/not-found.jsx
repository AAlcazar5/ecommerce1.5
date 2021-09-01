import React from 'react';
import Layout from './layout';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  }

  return (
    <Layout>
      <p style={style} className="montserrat">Unfortunately we can't find that page</p>
    </Layout>
  );
}

export default NotFound;