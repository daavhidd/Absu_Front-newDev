import React, { useEffect } from "react";
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

// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const Achievements = (props) => {
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
                                                    Achievements
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

                <div className="bg-sky" style={isMobile ? { padding: "24px", color: "#000" } : { padding: "63px" }}>
                    <div className="row justify-content-center">
                    <div className="col-sm-12 col-lg-12 mt-3">
                            <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "13px", color: "#000" } : { fontSize: "14px" }}>
                                ABIA STATE UNIVERSITY
                            </h2>
                            <ul style={isMobile ? { fontSize: "13px", color: "#000" } : { fontSize: "14px" }}>
                                <li>A clear vision expressed as “Our Story Must Change”. It changed in five years.</li>
                                <li>ABSU moved from 93rd to 27th position in the webometrics ranking of Nigerian universities in those five years.</li>
                                <li>ABSU's ranking improved to number 2 among state universities.</li>
                                <li>Secured TETFUND funds by observing best practices in project execution. ABSU got TETFUND approval for 38 research topics in one year.</li>
                                <li>Incentivised Professors to deliver their inaugural lectures and moved
                                    the needle from only 19 inaugural lectures in 38 years to 54 inaugurals
                                    by his fifth year.</li>
                                <li>Created a multi-campus university by moving the Faculty of Law to
                                    Umuahia and Pharmacy and Engineering to Osisioma.</li>
                                <li>Introduced the retention of the best graduating students to fill the
                                    academic pipeline with a fresh human capacity.</li>
                                <li>Introduced additional courses to the school’s curriculum.</li>
                                <li>Introduced Pre-Med courses, such as Anatomy, Physiology, and
                                    more.</li>
                                <li>Got NUC and the Nigerian Medical Association to increase ABSU’s
                                    quota for new doctors from 75 to 125 annually.</li>
                            </ul>

                        </div>
                        <div className="col-sm-12 col-lg-12 mt-3">
                            <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "13px", color: "#000" } : { fontSize: "14px" }}>
                                ABIA STATE POLYTECHNIC
                            </h2>
                            <ul style={isMobile ? { fontSize: "13px", color: "#000" } : { fontSize: "14px" }}>
                                <li>Cleared the arrears of N2b debt the school owed</li>
                                <li>Used internally generated revenue and subvention to pay the backlog of nine months' salary owed to workers.</li>
                                <li>Enhanced the environment and the school’s aesthetics</li>
                                <li>Secured NBTE accreditation for Unaccredited courses.</li>
                                <li>Enabled staff to access TETFUND funds for conferences and seminars.</li>
                                <li>Started efforts with TETFUND to enable Abia Poly to access infrastructure funds from TETFUND.</li>
                            </ul>

                        </div>

                       









                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
