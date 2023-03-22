import React,{useEffect} from "react";
import Header from "../../layouts/FrontHeader";
import Marquee from "react-fast-marquee";
import { enquireScreen } from "enquire-js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Senate from "../../assets/images/senate.jpeg";
import { Input, Modal, Upload, message, Image } from 'antd';
import Walkway from "../../assets/images/walk_way-640x301.jpeg";
import Endpoint from "../../utils/endpoint";
import Absu_Logo from "../../assets/images/Abia_State_University_logo.svg.png";



let isMobile;
let newsArr = [
    "The Palace of His Eminence, Eze Sir Dr. Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, was agog on Saturday, June 11, 2022, as the people of Isuikwuato Local Government trooped out in their numbers to declare support and endorse the People's Democratic Party (PDP) gubernatorial candidate in Abia State, Professor Uche Ikonne as their sole governorship candidate for 2023 general elections",

    "As the race for who succeeds Governor Ikpeazu continues to gather momentum, Abia Progressives, a frontline PDP pro-group has pledged its support to the Gubernatorial Candidate of the People's Democratic Party in Abia State, Professor Uche Ikonne.The group which vows to also mobilize its members and other electorates across the 17 local government areas of the state and beyond for Prof"
];
let height = ((window.screen.height / 2) - 140) + "px";



enquireScreen((b) => {
    isMobile = b;
});
const IndexPage = () => {

    const fetchPost = () => {
        // Endpoint.getPosts()
        Endpoint.getWpCategories()
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }    
    

    
    useEffect(() => {
        fetchPost();
        // fetchAllPost()
    }, []);
  //   require("../../../src/assets/css3/vendor/vendor.min.css");
  return (
    <>

      <Header />
      <div id="page" className="" style={{marginTop:"6em"}}>
      
        

        <div className="container-fluid shadow" style={{width:"100%", marginTop:"8em"}}>
            {/* <img src="https://abiastateuniversity.edu.ng/wp-content/uploads/2017/08/E-LIBRARY-IN-UTURU-LOCATION-891x420.jpg"/> */}

          <div className="row hero_new">
            <div className="col-sm-12">
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="https://abiastateuniversity.edu.ng/parenholder/wp-content/uploads/2017/08/E-LIBRARY-IN-UTURU-LOCATION-891x420.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
             
                <div>
                    <img src="https://abiastateuniversity.edu.ng/parenholder/wp-content/uploads/2021/04/DSC_0136-scaled-891x420.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="https://abiastateuniversity.edu.ng/parenholder/wp-content/uploads/2021/04/DSC_0486-scaled-891x420.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="https://abiastateuniversity.edu.ng/parenholder/wp-content/uploads/2021/04/DSC_0761-scaled-891x420.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="https://abiastateuniversity.edu.ng/parenholder/wp-content/uploads/2021/04/DSC_0812-scaled-891x420.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="https://abiastateuniversity.edu.ng/parenholder/wp-content/uploads/2022/03/UPLOAD-1-891x420.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
            </div>
            {/* <div className="col-sm-3 text-center" style={!isMobile ? {paddingTop:"10em", background:"#929292", height:"58vh", color:"#fff"} : {background:"#251347", color:"#fff", padding:"20px"}}>
                <h3 className="text-white">ABIA STATE UNIVERISTY</h3>
                <p className="text-white text-center mt-3">As a foremost state University in Nigeria founded in 1981, Abia State University has maintained its leadership within and beyond the Eastern heartlands of Nigeria</p>
            </div> */}

          </div>
        </div>
        <div>
          <div className="probootstrap-section probootstrap-section-colored">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-left section-heading probootstrap-animate">
                  <h2>A Story About Us</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="probootstrap-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="probootstrap-flex-block">
                    <div className="probootstrap-text probootstrap-animate">
                      <h3>We prepare you for the future</h3>
                      <p>
                        At Abia State University, we believe in education that empowers individuals towards excellence and service.<br />
                        As a foremost state University in Nigeria founded in 1981,
                        Abia State University has maintained its leadership within and
                        beyond the Eastern heartlands of Nigeria. It has remained resilient
                        in the acquisition and dissemination of ICT-driven skills, comparable to
                        graduates anywhere in Africa.
                      </p>
                    </div>
                    <div className="probootstrap-image probootstrap-animate">
                      <video width="100%" height="auto" controls autoPlay>
                        <source src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_1502.mp4" type="video/mp4" />
                        <source src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_1502.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section" style={{marginTop:"9em", background:"#09093f", padding:"20px", color:"#fff"}}>
        <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
            <h2 className="text-white">Campus Life</h2>
          </div>
        </div>
        {/* END row */}
        <div className="row">
          <div className="col-md-6">
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_1514.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white"> Our Beautiful Environment</h3>
              </div>
            </div>
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/senate.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Senate Building</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_2526.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Our Serene Environment</h3>
              </div>
            </div>
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/scenic.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Our Scenic Environment</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_2529.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Florence Nightingale</h3>
              </div>
            </div>
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_2531.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Mountains</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/IMG_2539.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Electronic Library</h3>
              </div>
            </div>
            <div className="probootstrap-animate">
              <div className="image">
                <div className="image-bg">
                  <img className="img-responsive" src="https://abiastateuniversity.edu.ng/parenholder/wp-content/themes/Poseidon/assets/Images/pics/hostel.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                <h3 className="text-white">Our Hostels</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-12">
              <h2 className=" col-md-offset-3 text-center section-heading probootstrap-animate">Locate Us</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2344121947867!2d7.391887414315268!3d5.822531932531057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10431b8d3e845647%3A0x2cb63c061169fe50!2sAbia%20State%20University!5e0!3m2!1sen!2sng!4v1677065219576!5m2!1sen!2sng" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div> 
        </div>
        </div>
        <div className="probootstrap-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="service left-icon probootstrap-animate">
                  <div className="icon"><i className="icon-checkmark" /></div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>Abia State University <br />P.M.B. 2000, Uturu <br /> Abia State, Nigeria.</p>
                  </div>  
                </div>
                <div className="service left-icon probootstrap-animate">
                  <div className="icon"><i className="icon-checkmark" /></div>
                  <div className="text">
                    <h3>Registry</h3>
                    <p>Email:&nbsp; registry@abiastateuniversity.edu.ng</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service left-icon probootstrap-animate">
                  <div className="icon"><i className="icon-checkmark" /></div>
                  <div className="text">
                    <h3>Public Relations Unit</h3>
                    <p>Email:&nbsp; pro@abiastateuniversity.edu.ng</p>
                  </div>  
                </div>
                <div className="service left-icon probootstrap-animate">
                  <div className="icon"><i className="icon-checkmark" /></div>
                  <div className="text">
                    <h3>Technical Support</h3>
                    <p>Email:&nbsp; support@abiastateuniversity.edu.ng <br /> Email:&nbsp; <a href="http://gmail.com/mail/">ics@abiastateuniversity.edu.ng</a> <br /> Phone:&nbsp; 07066166857</p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        {/* <div className="footer-section section mt-5" style={{background:"#09093f", color:"#fff"}}>
          <div className="container">
            <div className="row">
              
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
              
            </div>
           
            <div className="row max-mt-20">
              <div className="col">
                <p className="copyright">
                  © 2022 Abia State University{" "}
                  <a href="#">All Rights Reserved</a>
                </p>
              </div>
            </div>
            
          </div>
        </div> */}

        <div className="probootstrap-footer probootstrap-bg" style={{background:"#09093f", color:"#fff"}}>
            <div className="container">
          <div className="row">
            <div className="col-md-3 col-md-push-1">
              <div className="probootstrap-footer-widget">
                <h3>Helpful links</h3>
                <ul>
                  <li><a href="#">Faculties</a></li>
                  <li><a href>ICS Services</a></li>
                  <li><a href>ICT</a></li>
                  <li><a href> Staff directory</a></li>
                  <li><a href>Downloads</a></li>
                  <li><a href>Maps and direction</a></li>
                  <li><a href>Alumni</a></li>
                  <li><a href>Student</a></li>
                  <li><a href>Admission Requirements</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-md-push-1">
              <div className="probootstrap-footer-widget">
                <h3>Undergraduate Study</h3>
                <ul>
                  <li><a href> Regular A-Z</a></li>
                  <li><a href>IAS A-Z</a></li>
                  <li><a href>Remedial A-Z</a></li>
                  <li><a href>Sandwich A-Z</a></li>
                  <li><a href>IDEA A-Z</a></li>
                  <li><a href>How to Apply</a></li>
                  <li><a href>Fees</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-md-push-1">
              <div className="probootstrap-footer-widget">
                <h3>Postgraduate Study</h3>
                <ul>
                  <li><a href>Postgraduate Diploma A-Z</a></li>
                  <li><a href>Masters A-Z</a></li>
                  <li><a href> Doctorate A-Z</a></li>
                  <li><a href> How to Apply</a></li>
                  <li><a href >Fees</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-md-push-1">
              <div className="probootstrap-footer-widget">
                <h3>Follow Us</h3>
                <ul>
                  <li><a href="#"><i className="icon-facebook" /> Facebook</a></li>
                  <li><a href="#"><i className="icon-twitter" /> Twitter</a></li>
                  <li><a href="#"><i className="icon-linkedin" /> LinkedIn</a></li>
                  <li><a href="#"><i className="icon-youtube" /> Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="probootstrap-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>© 2016 Abia State University. All Rights Reserved | &nbsp;&nbsp;  Powered by&nbsp;&nbsp; 
                  <a href="http://www.lloydant.com">
                    <img style={{height: '50px', width: '50px'}} className="img-small" src="https://abiastateuniversity.edu.ng/wp-content/themes/Poseidon/assets/Images/lloydant.jpeg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      
        
        </div>   
      </div>
    </>
  );
};

export default IndexPage;
