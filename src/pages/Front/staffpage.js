import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import { PulseSpinner } from "react-spinners-kit";
import Particles from "react-particles-js";
import Test from "../../assets/images/home/test.svg";
import Report from "../../assets/images/home/report.svg";
import Ikonne from "../../assets/images/Uchenna-Ikonne.jpeg";
import $ from "jquery";
import Go from "../../assets/images/home/go.svg";
import Prof1 from "../../assets/images/home/prof1.jpg";
import Prof2 from "../../assets/images/home/prof2.jpg";
import Laptop from "../../assets/images/home/laptop2.png";
import Header from "../../layouts/FrontHeader";
import Footer from "../../layouts/Footer";
import { enquireScreen } from "enquire-js";
import App from "../../assets/images/home/hero.png";
import BackBlue from "../../assets/images/IKONNEHEROBLUE.png";
import Marquee from "react-fast-marquee";
import { Button, Modal } from "antd";
// import sanityClient from "../../client"
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Endpoint from "../../utils/endpoint";
import Walkway from "../../assets/images/walk_way-640x301.jpeg";
import Senate from "../../assets/images/senate.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

import { facList } from "../../utils/dbstore";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });
let mainNewsArr = [];
let isMobile;
let mediaArr = [];
enquireScreen((b) => {
  isMobile = b;
});
var convert = require("xml-js");
const StaffPage = (props) => {
  const [state, setState] = useMergeState({
    featured: [],
    attendants: [],
    shopSchedule: [],
    newsOpen: false,
    newsTitle: "",
    newsValue: "",
    myPosts: [],
  });
  const [facultyList, setFacultyList] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [htmlContent, setHtmlContent] = useState([]);
  const HeroStyle = {
    width: "100%",
    minHeight: "32vh",
    // minHeight: "81vh",
    // backgroundImage: "url(" + Hero + ")",
    backgroundColor: "#EAECEF",
    position: "relative",
    overflow: "hidden",
  };
  const HeroStyleMobile = {
    width: "100%",
    minHeight: "30vh",
    // backgroundImage: "url(" + Hero + ")",
    backgroundColor: "#EAECEF",
    position: "relative",
    overflow: "hidden",
    // marginTop: "-2em",
  };
  const Abs = {
    width: "100%",
    minHeight: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const HeroContent = {
    zIndex: 10,
  };

  const VertCenter = {
    paddingTop: "30%",
  };

  const ImgStyles = {
    height: 300,
  };

  const Br1 = {
    // backgroundColor: "#4040bf",
    duration: ".1s",
  };

  const Br2 = {
    backgroundColor: "#bf4060",
    duration: ".5s",
  };

  const Be = {
    totalDuration: "1.2s",
  };

  const show = () => {
    this.setState({
      btn: true,
    });
  };

  const getMainNews = () => {
    // sanityClient.fetch(`*[_type == "newsandmedia"]{
    //     title,
    //     newstext,
    //     dateposted,
    //     mainImage{
    //         asset->{
    //             _id,
    //             url
    //         },
    //         alt{

    //         }
    //     }

    // }`)
    Endpoint.getNewsAndMedia()
      .then((data) => {
        console.log(data.data);
        mainNewsArr = data.data;
        setState({
          myPosts: data,
        });

        setTimeout(() => {
          console.log(data, state.myPosts);
          console.log(state.myPosts, mainNewsArr);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };
  const getStaffList = () => {
    Endpoint.getStaff()
      .then((data) => {
        // mediaArr = data.data;
        // setState({
        //   myPosts: data.data,
        // });

        // setTimeout(() => {
        console.log(data.data?.result);
        //   console.log(state.myPosts, mediaArr);
        // }, 3000);
      })
      .catch((err) => console.log(err));
  };
  const handleNewsOpen = (data) => {
    console.log(data);
    setState({
      newsOpen: !state.newsOpen,
      newsTitle: data.title,
      newsValue: data.newsText,
    });
  };
  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  const getFacultiesDepartments = () => {
    var requestOptions = {
      method: "GET",
      headers: myLoginHeaders,
      redirect: "follow",
      credentials: "include",
    };
    var myLoginHeaders = () => {
      const fetchHeader = new Headers();
      fetchHeader.append("Accept", "application/xml");
      fetchHeader.append("Content-Type", "application/xml");
      fetchHeader.append("Access-Control-Allow-Origin", "*");

      return fetchHeader;
    };

    fetch(
      "https://portal.abiastateuniversity.edu.ng/api/transcript/FetchFacultyAndDepartment",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        //   callback(jsondata)
        console.log(jsondata);
      })
      .catch((error) => console.log("An error Ocuured: " + error));
  };

  const fetchAlt = () => {};
  useEffect(() => {
    getStaffList();
    //fetchAlt();
    // getData();
    //getFacultiesDepartments();
    // getMedia();
    // getMainNews();
    console.log(props?.location?.state?.data, "new new");
    setStaffData(props?.location?.state?.data)
    setHtmlContent($(props?.location?.state?.data?.content))
    console.log(htmlContent)
    console.log(props?.location?.state?.dept, "new depttt");
    console.log(props?.location?.state?.data?.DepartmentId, "new2 new2");

    setFacultyList(facList.ArrayOfFacultyDTO.FacultyDTO);

    
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 2000);
  }, []);
  require("antd/dist/antd.css");

const parse = require('html-react-parser');

  return (
    
    <>
      <Modal
        title={state.newsTitle}
        visible={state.newsOpen}
        onOk={handleNewsOpen}
        onCancel={handleNewsOpen}
      >
        <p>{state.newsValue}</p>
      </Modal>
      <div id="preloader">
        <div id="status">
          <center>
            <PulseSpinner
              color="white"
              backColor="#FFF"
              frontColor="#FFF"
              size={45}
            />
          </center>
        </div>
      </div>
      <div className="min-vh-100">
        <Header />

        <div style={!isMobile ? HeroStyle : HeroStyleMobile}>
          <div style={Abs}>
            <div className="hero-image2">
              <div className={"container"} style={HeroContent}>
                <div className={"row"}>
                  <div
                    className={"col-lg-6"}
                    style={isMobile ? { marginTop: "0em" } : null}
                  >
                    <div style={VertCenter}>
                      {/* <h3 className="fade-in one font-weight-600" style={{color:"#fff"}}>
                                           Accelerated Development
                                        </h3> */}

                      <h1
                        className="h1-custom home-title"
                        style={
                          isMobile
                            ? {
                                color: "#ffffffde",
                                marginTop: "60px",
                                fontSize: "23px",
                              }
                            : { color: "#ffffffde", marginTop: "60px" }
                        }
                      >
                        <span
                          className="monte"
                          style={isMobile ? { fontSize: "19px" } : null}
                        >
                          Academic Staff
                        </span>
                      </h1>

                      {/* <h2 className="fade-in two maitree display-4" style={{color:"#ffffffde", fontSize:"22px"}}>Prof. Eleazar Uchenna Ikonne</h2> */}
                    </div>
                  </div>

                  {/* {!isMobile ? <div className="col-lg-6 text-right">
                                    <img src={App} alt="" className="mt-6 fade-in one" />
                                </div> : null} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-sky"
          style={isMobile ? { padding: "40px" } : { padding: "63px" }}
        >
          <div className="container-fluid">
            <div className="container">
              <h3 className="monte" style={{ fontSize: "30px" }}>
                {staffData.staffname}
              </h3>
              <div>
                {/* {htmlContent} */}
              </div>
              <td dangerouslySetInnerHTML={{__html: staffData.content}} />
              <p>{props?.location?.state?.dept}</p>
              <p>{props?.location?.state.data?.Email}</p>
              <p>{props?.location?.state.data?.PhoneNumber}</p>
              <p>{props?.location?.state.data?.Achievements}</p>
            </div>
            {/* <div className="row">
             {facultyList && facultyList.map(x => {
                return(
                    <div
                    className="col-sm-12 col-lg-3"
                    style={
                      !isMobile
                        ? { cursor: "pointer" }
                        : { cursor: "pointer", marginBottom: "10px" }
                    }
                  >
                    <Link
                        to={{ pathname: "/deptList", state: { data: x } }}
                    >
                    <div
                      className="card"
                      style={{
                        cursor: "pointer",
                        width: "300px",
                        height: "200px",
                        background: "#545566",
                        paddingTop: "2em",
                      }}
                    >
                      <h2
                        style={{ fontSize: "20px", color: "#fff" }}
                        className="text-center maitree"
                      >
                        {x.FacultyName}
                      </h2>
                    </div>
                    </Link>
                  </div>
                )
             })}
             
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffPage);
