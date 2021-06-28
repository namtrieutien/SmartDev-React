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
import { popupItem } from "../../management-pages/dummyData"

// Home.propTypes = {};

function Home(props) {
  return (
    <div>
      {/* <PreLoader /> */}

      <Header />

      {/* <!-- Page Content --> */}
      <Banner />

      <AddToCart item={popupItem[0]}/>
      <AddToCart item={popupItem[1]}/>
      <AddToCart item={popupItem[2]}/>
      <AddToCart item={popupItem[3]}/>
      <AddToCart item={popupItem[4]}/>
      <ExploreCategories />

      <CarouselPosts />

      <Posts />

      
      <Footer />
    </div>
  );
}

export default Home;
