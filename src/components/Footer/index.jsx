import React from "react";
// import PropTypes from "prop-types";
import "./Footer.css";

// Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="Footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <p>
                  Copyright &copy; 2020 Sixteen Clothing Co., Ltd.- Design:
                  <a rel="nofollow noopener" href="/" target="_blank">
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
