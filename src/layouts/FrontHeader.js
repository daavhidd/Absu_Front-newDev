import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/actions";
// import Logo from "../assets/images/home/logo2.png";
import Logo from "../assets/images/Abia_State_University_logo.svg.png";
import TikTok from "../assets/images/tik-tok.png";
import Manifesto from "../assets/20221022_Ikonne_Manifesto.pdf";
import TikTok2 from "../assets/images/kkk.jpeg";
import { enquireScreen } from "enquire-js";
import { useMergeState } from "../utils/helpers";
import { userLoggedIn } from "../utils/auth";
import { Fade } from "reactstrap";
import { Button, Popover } from "antd";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import * as Unicons from "@iconscout/react-unicons/index";

const content = (
  <div>
    <Link to={"/aboutuche"} style={{ color: "#000", fontSize: "13px" }}>
      <p style={{ color: "#000", fontSize: "10px" }}>&nbsp;</p>
    </Link>
    <Link to={"/profiles_"} style={{ color: "#000", fontSize: "13px" }}>
      <p style={{ color: "#000", fontSize: "12px" }}>
        {" "}
        <p style={{ color: "#000", fontSize: "12px" }}>Profile</p>
      </p>
    </Link>
    {/* <Link to={"/honors"} style={{ color: "#000", fontSize: "13px" }}>
            <p style={{ color: "#000", fontSize: "12px" }}>Position held</p>
        </Link>
        <Link to={"/achievements"} style={{ color: "#000", fontSize: "13px" }}>
            <p style={{ color: "#000", fontSize: "12px" }}>Achievements</p>
        </Link> */}
  </div>
);
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const FrontHeader = (props) => {
  const [state, setState] = useMergeState({
    featured: [],
    attendants: [],
    shopSchedule: [],
    newsOpen: false,
    newsTitle: "",
    newsValue: "",
    myPosts: [],
    aboutMenu: false,
  });
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  const [clear, setClear] = useState(false);

  const changeClear = () => setClear((prev) => !prev);

  const toggleAbout = () => {
    setState({
      aboutMenu: !state.aboutMenu,
    });
  };
  require("antd/dist/antd.css");

  return (
    <>
      {/* <div class="icon-bar">
                <a href="https://web.facebook.com/EUcheIkonne" target={"_blank"} class="facebook"><i class="fa fa-facebook-official"></i></a>
                <a href="https://twitter.com/ikonne_uche?t=3_aLzAbeB-U9ypSsp2e5Lg&s=09" target={"_blank"} class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://instagram.com/uchendiabia2023?igshid=YmMyMTA2M2Y=" target={"_blank"} class="google"><i class="fa fa-instagram"></i></a>
                <a href="https://vm.tiktok.com/ZMNBaosmA/" target={"_blank"} class="linkedin">
                    <img src={TikTok} style={{ width: "70px" }} />
                </a>
                
            </div> */}
                {/* <div style={{width:"100%", height:"41px", background:"#09093f", paddingTop:"10px", position:"fixed", zIndex:"99999"}}>
    
                     <button className="btn btn-sm btn-primary" style={{marginTop:"-5px", marginRight:"70px", float:"right"}}>Portal</button>
                </div> */}
 {/* <Marquee gradient={false} speed={40} style={{ zIndex: "9" }}>
        {newsArr && newsArr.map((x) => {
            return (
                <p style={{ fontSize: "9px", color: "#e4c417" }} className="">
                    {x}
                    <i className="fa fa-star" /> &nbsp; &nbsp; &nbsp;
                </p>
            )
        })}
    </Marquee> */}
      <Navbar
        className="navbar-top shadow 
        "
        expand="md"
        style={{
            position: "fixed",
          zIndex: "99999",
          background: "#08248c",
          width: "100%",
          marginTop:"0px",
          height:"100px"
        }}
      >
        <div className="" style={isMobile ? {display:"contents"} : {display:"contents"}}>
          {props.logoOut == null ? (
            <NavbarBrand to="/" tag={Link}>
              <img src={Logo} alt="" style={isMobile ? { width: "2.5em" } : { width: "3.5em", marginLeft:"3em" }} /> &nbsp;
             
             
            </NavbarBrand>
          ) : null}

         
          {isMobile ? (
            <i
              onClick={openNav}
              className="fa fa-bars"
              id="navbar-collapse-main"
              style={{ color: "#fff", fontSize: "29px" }}
            />
          ) : null}
         

          {!isMobile ? (
            <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="8">
                    <Link to="/">
                      <img src={Logo} alt="" style={{ height: 50 }} />
                      {/* <span> Uche Ndi Abia</span> */}
                    </Link>
                  </Col>

                  <Col className="collapse-close" xs="4">
                    <button
                      className="navbar-toggler"
                      id="navbar-collapse-main"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <h2 style={{fontSize:"18px", fontWeight:"600"}} className="text-uppercase maitree text-white">Abia State<br/>University</h2>
              <Nav className="ml-auto" navbar>
                <NavItem className="ml-3" style={{ display: "flex" }}>
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    {/* <i className='fa fa-arrow-right'/> */}
                    <span className="nav-link-inner--text">Home</span>
                  </NavLink>
                  <NavLink className="nav-link-icon" to="/Administration" tag={Link}>
                    {/* <i className='fa fa-arrow-right'/> */}

                    {/* <Popover content={content} trigger="click"> */}
                    <span className="nav-link-inner--text">Administration</span>

                    {/* &nbsp; <i className='fa fa-angle-down' /> */}
                    {/* </Popover> */}
                  </NavLink>

                  <NavLink className="nav-link-icon" to="/Schools" tag={Link}>
                    {/* <i className='fa fa-arrow-right'/> */}
                    <span className="nav-link-inner--text">Faculties and Colleges</span>
                  </NavLink>
                  {/* <NavLink className="nav-link-icon" to="/recruitment" tag={Link} >
                                   
                                    <span className="nav-link-inner--text">Recruitment</span>
                                </NavLink> */}
                  <NavLink
                    className="nav-link-icon"
                    to="/newsandmedia"
                    tag={Link}
                  >
                    {/* <i className='fa fa-arrow-right'/> */}
                    <span className="nav-link-inner--text">Centers and institutes <i className="fa fa-angle-down"/></span>
                  </NavLink>
                  <NavLink className="nav-link-icon" to="/Admission" tag={Link}>
                    {/* <i className='fa fa-arrow-right'/> */}
                    <span className="nav-link-inner--text">Admission</span>
                  </NavLink>
                  {/* <NavLink className="nav-link-icon" to="/contactus" tag={Link}>
                    <span className="nav-link-inner--text">Research</span>
                  </NavLink> */}
                  {/* <NavLink className="nav-link-icon" >
                                    <a style={{color:"#fff"}} href={Manifesto} target="_blank" className="nav-link-inner--text">Manifesto</a>
                                </NavLink> */}
                  <NavLink
                    className="nav-link-icon"
                    to="/admin_signin"
                    tag={Link}
                  >
                    {/* <i className='fa fa-arrow-right'/> */}
                    <span className="nav-link-inner--text">Business</span>
                  </NavLink>
                  <NavLink
                    className="nav-link-icon"
                    to="/OER"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Open Education Resources</span>
                  </NavLink>
                  <NavLink
                    className="nav-link-icon"
                    to="/Tetfund"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">TETFund</span>
                  </NavLink>

                  <NavLink
                    className="nav-link-icon"
                    to="/stafflist"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Staff List </span>
                  </NavLink>

                  <NavLink
                    className="nav-link-icon"
                    to="/news"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">News </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          ) : null}
          {/* <button type="button" onClick={openNav} className="menu-toggle" style={{zIndex:"99999", color:'#000', position:"fixed"}}><i className="fa fa-bars"  style={{font:"15px"}}/></button> */}
          <div id="mySidenav" class="sidenav1" style={{ zIndex: "99999999" }}>
            <a href="#" class="closebtn" onClick={closeNav}>
              &times;
            </a>
            {/* <Link to="/">Home</Link>
            <Link to={"/profiles_"} onClick={toggleAbout}>
              Profile
            </Link> */}
            {/* {state.aboutMenu ?
                            <Fade>
                                <ul style={{ listStyleType: "none" }} id="about__dd">
                                    <Link to="/aboutuche">
                                        <li className='text-white' style={{ fontSize: "12px" }}>Profile</li>
                                    </Link>
                                    
                                </ul>
                            </Fade>
                            : null} */}

            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Administration</Link>
            <Link to={"/"}>Faculties and Colleges</Link>
            <Link to={"/stafflist"}>Staff List</Link>
            <Link to="/news">News</Link>
            {/* <Link to="/events">Events</Link> */}
            {/* <Link to="/recruitment">Recruitment</Link> */}
            {/* <Link to="/contactus">Contact us</Link> */}
            {/* <a href={Manifesto} target="_blank">Manifesto</a> */}
            {/* <Link to="/admin_signin">Admin</Link> */}
            {/* <Link to="/staff_authentication">Staff Form</Link> */}

            <br />
            <br />

            {/* <p>
              <span className="text-white">
                <a
                  href="https://web.facebook.com/EUcheIkonne"
                  className="text-white"
                  target={"_blank"}
                >
                  <i
                    className="fa fa-facebook-official"
                    style={{ fontSize: "28px", marginRight: "25px" }}
                  />
                </a>
              </span>

              <span className="text-white">
                <a
                  href="https://twitter.com/ikonne_uche?t=3_aLzAbeB-U9ypSsp2e5Lg&s=09"
                  className="text-white"
                  target={"_blank"}
                >
                  <i
                    className="fa fa-twitter-square"
                    style={{ fontSize: "28px", marginRight: "25px" }}
                  />
                </a>
              </span>

              <span className="text-white">
                <a
                  href="https://instagram.com/uchendiabia2023?igshid=YmMyMTA2M2Y="
                  className="text-white"
                  target={"_blank"}
                >
                  <i
                    className="fa fa-instagram"
                    style={{ fontSize: "28px", marginRight: "25px" }}
                  />
                </a>
              </span>

              <span className="text-white">
                <a
                  href="https://vm.tiktok.com/ZMNBaosmA/"
                  className="text-white"
                  target={"_blank"}
                >
                  <img src={TikTok2} style={{ width: "30px" }} />
                </a>
              </span>
            </p> */}
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontHeader);
