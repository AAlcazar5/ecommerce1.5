import React from 'react';
import Layout from '../shared/layout';
import Hero from './hero/hero'; 
import MainSection from './main-section/main-section';
import FeaturedCollection from '../../components/home/featured-collection/featured-collection';
import ImagesRow from './image-row/image-row';

const HomePage = () => {
    return (
      <>
        <Layout>
          <Hero />
          <MainSection />
          <FeaturedCollection />
          <ImagesRow />
        </Layout>
      </>
    );
  }
  
  export default HomePage;
