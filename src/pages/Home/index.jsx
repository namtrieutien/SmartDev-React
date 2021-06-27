import React from "react";
// import PropTypes from "prop-types";
import Header from "../../components/Header";
import Banner from "../../components/Contents/Banner";
import Posts from "../../components/Contents/Posts";
import Footer from "../../components/Footer";
import ExploreCategories from "../../components/Contents/ExploreCategories";
import CarouselPosts from "../../components/Contents/CarouselPosts";
import "./Home.css"
import AddToCart from "../../components/Cart/AddToCart";

// Home.propTypes = {};

function Home(props) {
  return (
    <div>
      {/* <PreLoader /> */}

      <Header />

      {/* <!-- Page Content --> */}
      <Banner />
      <AddToCart />
      <ExploreCategories />

      <CarouselPosts />

      <Posts />

      
      <Footer />
    </div>
  );
}

export default Home;
