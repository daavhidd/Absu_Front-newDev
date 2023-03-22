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
import axios from "axios"
// import { useLocation } from "react-router-dom";
// const location = useLocation();

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });
let newsArr = [
  "The Palace of His Eminence, Eze Sir Dr. Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, was agog on Saturday, June 11, 2022, as the people of Isuikwuato Local Government trooped out in their numbers to declare support and endorse the People's Democratic Party (PDP) gubernatorial candidate in Abia State, Professor Uche Ikonne as their sole governorship candidate for 2023 general elections",

  "As the race for who succeeds Governor Ikpeazu continues to gather momentum, Abia Progressives, a frontline PDP pro-group has pledged its support to the Gubernatorial Candidate of the People's Democratic Party in Abia State, Professor Uche Ikonne.The group which vows to also mobilize its members and other electorates across the 17 local government areas of the state and beyond for Prof",
];
const newsJson = [
  {
    id: 1,
    title:
      "ISUIKWUATO PEOPLE DECLARES TOTAL SUPPORT FOR PROF. IKONNE HONOURS HIM WITH A CHIEFTAINCY TITLE ",
    news: "The Palace of His Eminence, Eze Sir Dr. Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, was agog on Saturday, June 11, 2022, as the people of Isuikwuato Local Government trooped out in their numbers to declare support and endorse the People's Democratic Party (PDP) gubernatorial candidate in Abia State, Professor Uche Ikonne as their sole governorship candidate for 2023 general elections. The royal venue which was filled to capacity had illustrious sons and daughters from all clans that made up Isuikwuato, members of the clergy, traditional rulers, political office holders, captains of industry, various women, youth groups and students, in attendance. Eulogies poured in for  Professor Ikonne, their adopted son, as speaker after speaker commended him for the quality leadership he rendered in his over 30years service at Abia State University, Uturu, Isuikwuato LGA. In his speech while conferring The ala di uru Chieftancy title on professor Ikonne, His Eminence, Eze Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, said that the entire ndi eze Isuikwuato decided to honour Professor Ikonne in appreciation of his immense contributions to human capital development especially in the educational advancement of their children in Abia State University and beyond. Also speaking, the PDP woman Leader in Abia State Lolo Charity Emenike, former TC Chairperson Isuikwuato Dame Amarachi Dede, former State Treasurer of the PDP in Abia State, Chief Chinoyerem Uwadinjor expressed satisfaction on the aspirations of Professor Ikonne, noting that the state under his watch would witness massive development.  Ndi Isuikwuato, led by the Chairman of the stakeholders forum Chief Emma Ibegbulam, and the Executive Chairman, Hon.Chima Agbaeze endorsed Professor Uche Ikonne as their sole Governorship candidate come 2023.",
    date: "2023",
  },
  {
    id: 2,
    title:
      "2023: ABIA PROGRESSIVES PLEDGES SUPPORT FOR PROFESSOR IKONNE, VOWS TO MOBILIZE VOTERS ACROSS 17 LGA'S  ",
    news: "As the race for who succeeds Governor Ikpeazu continues to gather momentum, Abia Progressives, a frontline PDP pro-group has pledged its support to the Gubernatorial Candidate of the People's Democratic Party in Abia State, Professor Uche Ikonne.The group which vows to also mobilize its members and other electorates across the 17 local government areas of the state and beyond for Prof. Ikonne, said they're convinced that Prof. Ikonne remains the best man for the job as he possesses the requisite qualities to succeed as governor if elected. The group, led by the State Coordinator, Prince Ugboaja Innocent, made this known during a solidarity visit to Professor Ikonne at his Umuahia residence. Speaking during the visit, the Secretary of the association, Barr.Chizuru Kanu louded Professor Ikonne's leadership qualities, especially in the areas of human and capacity development with an affirmation that he will surely bring those qualities to bear. Also speaking, the coordinators: Hon.Kelechi Dede(Abia South) Prince Obinna Okey(Abia Central) and Hon.Orji Udeagha(Abia North), appealed to Abians to embrace this golden opportunity, for a better Abia. Professor Ikonne in his response, thanked Abia Progressives for their thoughtfulness as well as promised to consolidate on the peaceful atmosphere created by the incumbent Governor.He also revealed that his administration will run an all- inclusive government where every Abian will feel a sense of belonging regardless of 'their idiosyncrasies and different backgrounds'.He enjoined the Abia Progressive, whom he identified as veritable partner for development, to reach out to Abians with informed opinions about him, order than biased assessment that is predicated on domestic sympathy. In a vote of thanks, the immediate past Executive Chairman of Aba North LGA, Prince Stanley Ogbonna thanked Professor Ikonne for the warmth reception, with an assurance of his victory come 2023. The Deputy Chairman Isiala Ngwa North, Chuks Amaike, Dr.Nwaezuoke, Prince Ahamefula Ogbonna, Hon.Innocent Willson, Barr Frank Enyioma and, other notable members of the association were present during the visit.#UcheNdiAbia2023",
    date: "2023",
  },
];
let mainNewsArr = [];
let isMobile;
let mediaArr = [];
enquireScreen((b) => {
  isMobile = b;
});

const DepartmentList = (props) => {
  const [state, setState] = useMergeState({
    featured: [],
    attendants: [],
    shopSchedule: [],
    newsOpen: false,
    newsTitle: "",
    newsValue: "",
    myPosts: [],
  });
  const [depts, setDepts] = useState("");

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
  const getMedia = () => {
    Endpoint.getMediaLinks()
      .then((data) => {
        mediaArr = data.data;
        setState({
          myPosts: data.data,
        });

        setTimeout(() => {
          console.log(data, state.myPosts);
          console.log(state.myPosts, mediaArr);
        }, 3000);
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
  const fetchAlt = () => {
    const url =
      "https://c4-na.altogic.com/e:6373addaea9f94c58832bfbe/ContentPosts";
    axios.get(url)
    .then(res => {
      
      console.log(res.data, "cov")
      // this.setState({ games: data.items.item });
    });
  }
  useEffect(() => {
    console.log(props?.location?.state.data, "--> -->");
    setDepts(props?.location?.state?.data?.Departments?.DepartmentDTO);
    // getMedia();
    fetchAlt()
    // getMainNews();
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 2000);
  }, []);
  require("antd/dist/antd.css");

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
      {/* <div id="preloader">
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
      </div> */}
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
            <h2 className="monte" style={{ fontSize: "30px" }}>
              Departments (Faculty of {props?.location?.state.data?.FacultyName}
              )
            </h2>
            <br />

            <div className="container">
              {depts &&
                depts.map((x, i) => {
                  return (
                    <p>
                      {" "}
                      <Link to={{ pathname: "/staffdepts", state: { data: x } }}>
                        {x.DepartmentName}
                      </Link>
                    </p>
                  );
                })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
