import React from 'react';
import PropTypes from 'prop-types';
import PreLoader from '../../components/PreLoader';
import Header from '../../components/Header';
import Banner from '../../components/Contents/Banner';
import Posts from '../../components/Contents/Posts';
import Footer from '../../components/Footer';

Home.propTypes = {
  
};

function Home(props) {
  return (
    <div>
      {/* <PreLoader /> */}

      <Header />

      {/* <!-- Page Content --> */}
      <Banner />

      <Posts />

      <Footer />
    </div>
  );
}

export default Home;