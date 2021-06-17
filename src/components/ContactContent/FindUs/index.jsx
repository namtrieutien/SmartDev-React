import React from 'react';
import PropTypes from 'prop-types';

FindUs.propTypes = {
  
};

function FindUs(props) {
  return (
    <div>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div id="map">
                <iframe title="location" src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameborder="0" style={{border:0}} allowfullscreen></iframe>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content">
                {/* <h4>About our office</h4> */}
                <p>Lorem ipsum dolor sit amet, consectetur 
                  adipisic elit. Sed voluptate nihil eumester con
                  sectetur similiqu consectetur.<br/><br/>Lorem ip
                  sum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi 
                  mollitia corporis ipsa voluptate corrupti.</p>
                <ul className="social-icons">
                  <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="/"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindUs;