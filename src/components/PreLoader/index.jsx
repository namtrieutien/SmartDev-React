import React from 'react';
import PropTypes from 'prop-types';

PreLoader.propTypes = {
  
};

function PreLoader(props) {
  return (
    <div>
      {/* <!-- ***** Preloader Start ***** --> */}
      <div id="preloader">
          <div className="jumper">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>  
      {/* <!-- ***** Preloader End ***** --> */}
    </div>
  );
}

export default PreLoader;