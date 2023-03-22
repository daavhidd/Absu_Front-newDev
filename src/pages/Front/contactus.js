import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import { PulseSpinner } from "react-spinners-kit";
import Endpoint from "../../utils/endpoint";
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
import toast, {Toaster} from "react-hot-toast";

// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const ContactUs = (props) => {
    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],
    });
	const generalSuccess = (message) => toast.success(message, {
		style: {
			border: '1px solid #56b39d',
			padding: '16px',
			background: '#56b39d',
			color: '#fff',
			borderRadius: '2rem',
		},
		iconTheme: {
			primary: '#FFFAEE',
			secondary: '#56b39d',
		},
	});
    const HeroStyle = {
        width: "100%",
        minHeight: "25vh",
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
    const submitContactUs = (e) => {
        e.preventDefault();
        if(state.fullname == null || state.email == null ){
            alert("required fields cannot be left empty")
            return;
        }
        $("#preloader").fadeIn()

        const regProps = {
            "email": state.email,
            "name": state.fullname,
            "homeAddress": state.address,
            "reason": state.case
          }

        Endpoint.postContactUs(regProps)
            .then((res) => {
               console.log(res)
             generalSuccess("Submitted successfully!")
        $("#preloader").fadeOut()

            })
            .catch((error) => {
        $("#preloader").fadeOut()

                alert("Oops, something went wrong")
                setState({ loading: false })
            });

        return false;
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
                                                  Contact us
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
                        
                        <div className="col-sm-12 col-lg-4">
                            <center>
                                {/* <a href="tel:2348064307999" style={{color:"#fff"}}> */}
                                     <i className="fa fa-envelope"/>
                                     {/* </a> */}
                           
                                <p style={{fontSize:"12px"}}>  Email: info@Eleazarucheikonne.com, <br/>support@Eleazarucheikonne.com</p>
                            
                            <a href="tel:+2349063453948" style={{color:"#000"}}>
                                 {/* <i className="fa fa-envelope"/> */}
                                 <i className="fa fa-phone"/>
                                 </a>
                                <p style={{fontSize:"13px"}}>  Phone: +234 906 3453 948</p>
                                {/* <a href="+2348064307999">Phone: +234 0806 430 7999 </a> */}
                                <p style={{fontSize:"12px"}}>
                                    <i className="fa fa-building"/>
                                    <br/>
                                    Address: Onyerubi Close, by Danijoy School, off Secretariat Rd, Umuahia, Abia State
                                </p>
                            </center>
                            
                        </div>

                        <div className="col-sm-12 col-lg-8">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                    <input className="form-control" onChange={(e) => setState({fullname: e.target.value})} placeholder="Fullname" type={"text"} style={{backgroundColor:"#fff"}}/>
                                </div>
                                <div className="col-sm-12 col-lg-6 mt-3">
                                    <input className="form-control" onChange={(e) => setState({email: e.target.value})} placeholder="Email" type={"text"} style={{backgroundColor:"#fff"}}/>
                                </div>
                                <div className="col-sm-12 col-lg-12 mt-3">
                                    <input className="form-control " placeholder="Home Address" onChange={(e) => setState({address: e.target.value})} type={"text"} style={{backgroundColor:"#fff"}}/>
                                </div>
                                <div className="col-sm-12 col-lg-12 mt-3" onChange={(e) => setState({case: e.target.value})}>
                                    <textarea className="form-control" placeholder="Describe your case">

                                    </textarea>
                                </div>

                                <div className="col-sm-12 col-lg-12 mt-3">
                                   <button type="submit" onClick={(e) => submitContactUs(e)} className="btn btn-primary" style={{backgroundColor:"#731a1a", width:"100%"}}>
                                        Submit
                                   </button>
                                </div>
                            </div>
                            
                        </div>
                     
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
