import React from 'react'
import logo2 from '../../src/assets/images/home/logo.png';

const Footer = (props) => {
    return (
        <div className="footer-section section mt-5" style={{background:"#09093f", color:"#fff"}}>
        <div className="container">
          {/* Footer Top Widgets Start */}
          <div className="row">
            {/* Footer Widget Start */}
            <div className="col-xl-6 col-md-5 col-12 max-mb-50">
              <div className="footer-widget">
                <h4 className="footer-widget-title">Address</h4>
                <div className="footer-widget-content">
                  <div className="content">
                    <p>P.M.B. 2000, Uturu Abia State, Nigeria.</p>
                    <p>+234 7066166857 (Monday - Friday) </p>
                    <p>
                      <a href="#">registry@abiastateuniversity.edu.ng, pro@abiastateuniversity.edu.ng </a>
                    </p>
                  </div>
                  <div className="footer-social-inline">
                    <a href="#">
                      <i className="fab fa-facebook-square" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Widget End */}
            {/* Footer Widget Start */}
            <div className="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
              <div className="footer-widget">
                <h4 className="footer-widget-title">Explore</h4>
                <div className="footer-widget-content">
                  <ul className="column-2">
                    <li>
                      <a className="text-white" href="#">Faculties</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">ICS Service</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">ICT</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Staff Directory</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">About us</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Alumni</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer Widget End */}
            {/* Footer Widget Start */}
            <div className="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
              <div className="footer-widget">
                <h4 className="footer-widget-title">Information</h4>
                <div className="footer-widget-content">
                  <ul>
                    <li>
                      <a className="text-white" href="#">Facebook</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Linkedin</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Twitter</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer Widget End */}
          </div>
          {/* Footer Top Widgets End */}
          {/* Footer Copyright Start */}
          <div className="row max-mt-20">
            <div className="col">
              <p className="copyright">
                © 2022 Abia State University{" "}
                <a href="#">All Rights Reserved</a>
              </p>
            </div>
          </div>
          {/* Footer Copyright End */}
        </div>
      </div>
    )
};

export default Footer
