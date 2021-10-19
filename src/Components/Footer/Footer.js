import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer footer">
            <div className="container">
                <div className="row">
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        Speciality Hospital
                      </h4>
                      <ul className="list-unstyled">
                          <li>Hospital &</li>
                          <li>Healthcare</li>
                          <li>Management</li>
                          <li></li>
                      </ul>

                  </div>
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        Catholic Health
                      </h4>
                      <ul className="list-unstyled">
                          <li>St.Francis Hospital</li>
                          <li>& HealthCare Center</li>
                          
                      </ul>

                  </div>
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        Speciality Treatment
                      </h4>
                      <ul className="list-unstyled">
                          <li>St.Francis Hospital</li>
                          <li>& HealthCare Center</li>
                          <li>Pharmacy Center</li>
                      </ul>

                  </div>
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        Contact Us
                      </h4>
                      <ul className="list-unstyled">
                          <li>978874653</li>
                          <li>HealthCare@gmail.com</li>
                          <li>Medicine Center</li>
                          <li>CEO</li>
                      </ul>

                  </div>

                </div>
                {/* Footer Button  */}
                <div className="footer-button">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App -All Right reserved.
                    </p>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;