import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import { PulseSpinner } from "react-spinners-kit";
import Igwe from "../../assets/images/igwe2.jpeg";

import Particles from "react-particles-js";
import Test from "../../assets/images/home/test.svg";
import Report from "../../assets/images/home/report.svg";
import Ikonne from "../../assets/images/ikedited22.jpg";
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
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const AboutUche = (props) => {
    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],

    });

    const HeroStyle = {
        width: "100%",
        minHeight: "29vh",
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
        marginTop: "-2em",
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

    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index,
        });
    };


    const handleNewsOpen = (data) => {
        console.log(data)
        setState({
            newsOpen: !state.newsOpen,
            newsTitle: data.title,
            newsValue: data.newsText

        })


    }

    useEffect(() => {
        setTimeout(() => {
         $("#preloader").fadeOut()
        }, 2000);
     }, []);

    return (
        <>
            <div id="preloader">
                <div id="status">
                    <center>
                    <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />


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
                                    <div className={"col-lg-6"} style={isMobile ? { marginTop: "0em" } : null}>
                                        <div style={VertCenter}>
                                            {/* <h3 className="fade-in one font-weight-600" style={{color:"#fff"}}>
                                           Accelerated Development
                                        </h3> */}

                                            <h1 className="h1-custom home-title" style={isMobile ? { color: "#ffffffde", marginTop: "60px", fontSize: "23px" } : { color: "#ffffffde", marginTop: "22px" }}>
                                                <span className="monte" style={isMobile ? { fontSize: "19px" } : null}>
                                                  Profiles
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
                <div className="text-center" style={{ width: "100%", height: "29px", background: "#95262c", marginTop: "0px", paddingTop: "0px", paddingBottom: "0px" }}>
                    <Marquee gradient={false} speed={40} style={{ zIndex: "9999" }}>
                        <p style={{ fontSize: "13px", color: "#f3f3f3cf" }} className="text-white">
                            <i className="fa fa-star" /> &nbsp; Vote change &nbsp; &nbsp; &nbsp; &nbsp;
                            <i className="fa fa-star" /> &nbsp; &nbsp; Vote for accelerated development &nbsp; &nbsp; &nbsp;
                            <i className="fa fa-star" /> &nbsp; &nbsp; Vote Prof. Uchenna Ikonne &nbsp; &nbsp; &nbsp;
                            <i className="fa fa-star" /> &nbsp; &nbsp; Vote Growth &nbsp; &nbsp; &nbsp;
                            <b></b>&nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        <p>&nbsp;</p>
                    </Marquee>
                </div>

                {/*         
            <span class="image full-bg" style={{backgroundImage: `url(https://cdn.donaldjtrump.com/djtweb/general/callout_about.jpeg)`}}>


            </span>
            */}

                <div className="bg-sky bg__three" style={isMobile ? { padding: "20px" } : { padding: "63px" }}>
                    <div className="row justify-content-center">
                        
                        {/* <div className="col-sm-12 col-lg-12">
                        
                            <p style={{ fontSize: "14px" }} className="">
                            <b style={{fontWeight:"bold"}}>Prof. Uchenna Eleazar Ikonne</b>,
                             from Agburuke – Nsulu in Isiala Ngwa North, LGA, Abia State has had a flourishing career in teaching, research and administration in tertiary education spanning for a period of 29 years.

A career that had a humble beginning in 1986 as a lecturer II in the school of Pre-professional sciences of then Imo State University and rose to the height of a professor of Optometry in 2006 at the Abia State University, Uturu. Within this period, he taught at both undergraduate and graduate levels playing a pioneering role in the development of Optometry curriculum course content and clinical structure of a programme that became the flagship of then Imo state University in company of expatriate faculty members.

In 1994, he became the first indigenous head of department, Department of Optometry following the exit of the expatriate Dean, school of medicine and head of department, Department of Optometry, Prof. B.S. Mencias. Prof Ikonne was head of Department of Optometry for an unprecedented consecutive 10 years, during which he built the programme to an enviable height of professional training and community service; producing and mentoring young competent and clinically proficient Optometry graduates for the National health care Delivery system and beyond the borders. He had a brief break from the Department when he served as director, institute for distant education. He turned the fortunes of this institute around positively and was unexpectedly returned as the head of department in Optometry. He performed a feat by being the first and only head of department that mobilized staff and students of Optometry to construct a block of lecture halls and offices through self effort and direct labour for the department of Optometry named Vision Hall.
                            </p>
                        </div>
                      */}





                    <div className="col-sm-12 col-lg-4">
                        <Link to={{
    pathname: "/profile_bio",
    state: { dataPass: "uche" }
  }}>
                                        <Card sx={{ maxWidth: 350 }} style={isMobile ? { marginTop: "30px" } : null}>
                                            {/* <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                       UI
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                    </IconButton>
                                                }
                                                title="Prof."

                                               
                                            /> */}

                                            
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image={Ikonne}
                                                alt="ikonne"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {/* {x.newsText?.length > 250 ? x.newsText.substring(0, 250) + " ..." : x.newsText} */}
                                                   <h3 className="">Prof. Eleazar Uchenna Ikonne</h3>
                                                   <p style={{fontSize:"12px"}} className="qsand">For Governor</p>
                                                   <hr style={{marginTop:"0em"}}/>
                                                   <p className="qsand" style={{fontSize:"13px", marginTop:"-20px"}}>
                                                   Uchenna Ikonne is a Nigerian professor of optometry. In December 2015 he became the 7th Substantive Vice-Chancellor of the Abia State University. having previously served as the Rector, Abia State Polytechnic, Aba – (on Rescue Mission) 2014–2015...
                                                   </p>
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites" style={{ fontSize: "14px" }}>
                                                    <small className="qsand"> view more <i className="fa fa-arrow-right " /></small>
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    {/* <ShareIcon /> */}
                                                </IconButton>

                                            </CardActions>

                                        </Card>

                                        </Link>
                                    </div>


                                    <div className="col-sm-12 col-lg-4">
                        <Link to={{
    pathname: "/profile_bio",
    state: { dataPass: "igwe" }
  }}>
                                        <Card sx={{ maxWidth: 350 }} style={isMobile ? { marginTop: "30px" } : null}>
                                            {/* <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                       UI
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                    </IconButton>
                                                }
                                                title="Prof."

                                               
                                            /> */}

                                            
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image={Igwe}
                                                alt="ikonne"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {/* {x.newsText?.length > 250 ? x.newsText.substring(0, 250) + " ..." : x.newsText} */}
                                                   <h3 className="">Hon. Philip Okey Igwe</h3>
                                                   <p style={{fontSize:"12px"}} className="qsand">For Deputy Governor</p>
                                                   <hr style={{marginTop:"0em"}}/>
                                                   <p className="qsand" style={{fontSize:"13px", marginTop:"-20px"}}>
                                                   Barr. Phillip Okey Igwe was born of very noble parentage to the late Elder Joseph Igwe & Ezinne Oyiridiya Roselyn Igwe of Umuogele in Amuda Isuochi, Umunneochi LGA of Abia State.
Okey is the fourth son in a family of five boys and two girls. Born and bred in his hometown of...
                                                   </p>
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites" style={{ fontSize: "14px" }}>
                                                    <small className="qsand"> view more <i className="fa fa-arrow-right " /></small>
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    {/* <ShareIcon /> */}
                                                </IconButton>

                                            </CardActions>

                                        </Card>

                                        </Link>
                                    </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUche);
