import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import { PulseSpinner } from "react-spinners-kit";
import sanityClient from "../../client"
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

// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });
let honorsArr = [];
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const Honors = (props) => {
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
    const getHonors = () => {
        sanityClient.fetch(`*[_type == "honors"]{
            title,
            body
       
        }`)
        .then((data) => {
            honorsArr = data
            setState({
                myPosts:data
            })
            
            setTimeout(() => {
                console.log(data, state.myPosts)
            console.log(state.myPosts, honorsArr)

            }, 3000);
        })
        .catch((err) => console.log(err))
    }
    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index,
        });
    };

    useEffect(() => {
        getHonors()
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
                                                 Honors
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

                <div className="bg-sky" style={isMobile ? { padding: "24px", color:"#000" } : { padding: "63px" }}>
                    <div className="row justify-content-center">
                       
                        <div className="col-sm-12 col-lg-12 mt-3">
                            <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "13px", color: "#000" } : {fontSize:"14px"}}>
                            Positions held
                            </h2>
                            <ul style={isMobile ? { fontSize: "13px", color: "#000" } : {fontSize:"14px"}}>
                            
                                <li>Vice Chancellor, Abia state University (2015 - 2020)</li>
                                <li>Rector, Abia state Polytechnic  (2014)</li>
                                <li>Chairman, Optometrists and Dispensing Opticians Registration Board of Nigeria from 1993 to date</li>
                                <li>Registrar, Nigerian Postgraduate College of Optometrists</li>
                                <li>Head, Department of Optometry – Abia State University</li>
                                <li>Director, Institute for Distance Education, Abia State University</li>
                                <li>Acting Dean, Faculty of Health Sciences, Abia State University</li>
                                <li>Deputy Provost, College of Medicine & Health Sciences, Abia State Universityy</li>
                                <li>Chairman of the Education Committee, 1993 to date</li>
                                <li>Chairman, Disciplinary Committee, 2007 to date</li>
                                <li>Vice-Chairman, Optometrists and Dispensing Opticians Registration Board of Nigeria, 2009 to date</li>
                            </ul>
                            
                        </div>



                       

                        


                       
                        
                        
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Honors);
