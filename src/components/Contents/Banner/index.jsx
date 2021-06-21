import React from 'react';
import PropTypes from 'prop-types';

import "./Banner.css"

Banner.propTypes = {
  
};

function Banner(props) {
  return (
    <div className="Banner">
      {/* <!-- Banner Starts Here --> */}
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/slide_01.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>First slide label</h1>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.</h6>
        <button class="btn-banner mt-3">Find more</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/slide_02.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>Second slide label</h1>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.</h6>
        <button class="btn-banner mt-3">Find more</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/slide_03.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>Third slide label</h1>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.</h6>
        <button class="btn-banner mt-3">Find more</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    {/* <!-- Banner Ends Here --> */}
    </div>
  );
}

export default Banner;