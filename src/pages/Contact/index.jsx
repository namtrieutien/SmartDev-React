import React from 'react';
// import PropTypes from 'prop-types';
import SendMessage from '../../components/ContactContent/SendMessage';
import HappyClient from '../../components/ContactContent/HappyClients';
import FindUs from '../../components/ContactContent/FindUs';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Contact.propTypes = {
  
// };

function Contact(props) {
  return (
    <div>
      <Header />

      {/* <!-- Page Content --> */}
      <div className="page-heading contact-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>contact us</h4>
                <h2>let’s get in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FindUs />

      <SendMessage />

      <HappyClient />

      <Footer />
    </div>
  );
}

export default Contact;