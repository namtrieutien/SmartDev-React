import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";


function Banner(props) {
  return (
    <div className="Banner">
      {/* <!-- Banner Starts Here --> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item-banner carousel-item active">
            <Link to="/best-price">
              <img
                src="https://eu94j8zj53i.exactdn.com/wp-content/uploads/2021/07/re-vo-cuc-lazada-7.7.png?strip=all&lossy=1&ssl=1"
                className="d-block w-100"
                style={{ height: '100%' }}
                alt="..."
              /></Link>
          </div>
          <div className="carousel-item-banner carousel-item">
          <Link to={{ pathname: `/category/3`, state: "váy" }} >
            <img
              src="https://i.pinimg.com/originals/e8/41/c9/e841c97abf4b19814dc67f4328ac7b5b.png"
              className="d-block w-100"
              alt="..."
              style={{ height: '100%' }}
            /></Link>
          </div>
          <div className="carousel-item-banner carousel-item">
            <img
              src="http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2020/04/850x3501.png"
              className="d-block w-100"
              alt="..."
              style={{ height: '100%' }}
            />
          </div>

          <div className="carousel-item-banner carousel-item">
          <Link to={{ pathname: `/category/3`, state: "đầm" }} >
            <img
              src="https://demaitinh.vn/wp-content/uploads/2020/03/Affiliate1200-X-628-700x366.png"
              className="d-block w-100"
              alt="..."
              style={{ height: '100%' }}
            /></Link>
          </div>

        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <!-- Banner Ends Here --> */}
    </div>
  );
}

export default Banner;
