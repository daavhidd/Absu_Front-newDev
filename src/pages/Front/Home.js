import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import TikTok2 from "../../assets/images/kkk.jpeg";

import bannerModal from "../../assets/images/bannerModal.jpeg";
import { PulseSpinner } from "react-spinners-kit";
import { Link } from "react-router-dom"
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
import { Input, Modal, Upload, message } from 'antd';
import { PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import Endpoint from "../../utils/endpoint";
// import Typewriter from 'typewriter-effect/dist/core';
// import sanityClient from "../../client"

import { Typewriter } from 'react-simple-typewriter'
// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });
let phaseCount = 0;
const allLgas = [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala Ngwa North",
    "Isiala Ngwa South",
    "Isiukwuato",
    "Obi Ngwa",
    "Ohafia",
    "Osisioma Ngwa",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umunneochi"
]

const youthWingListObj = [
    { name: "UCHE NDI ABIA YOUTH MASS MOVEMENT", lga: "Aba North" },
    { name: "YOUTH MEDIA UCHE NDI ABIA", lga: "Aba North" },
    { name: "ABIA ACADEMICS FOR IKONNE", lga: "Arochukwu" },
    { name: "TEAM UCHE IKONNE 2023.", lga: "Arochukwu" },
    { name: "ANGELS OF UCHE NDI ABIA", lga: "Ikwuano" },
    { name: "NSULU VANGUARD", lga: "Ikwuano" },
    { name: "OTHERS", lga: "Ohafia" }
]
let isMobile;
let newsArr = [
    "The Palace of His Eminence, Eze Sir Dr. Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, was agog on Saturday, June 11, 2022, as the people of Isuikwuato Local Government trooped out in their numbers to declare support and endorse the People's Democratic Party (PDP) gubernatorial candidate in Abia State, Professor Uche Ikonne as their sole governorship candidate for 2023 general elections",

    "As the race for who succeeds Governor Ikpeazu continues to gather momentum, Abia Progressives, a frontline PDP pro-group has pledged its support to the Gubernatorial Candidate of the People's Democratic Party in Abia State, Professor Uche Ikonne.The group which vows to also mobilize its members and other electorates across the 17 local government areas of the state and beyond for Prof"
];
let height = ((window.screen.height / 2) - 140) + "px";
enquireScreen((b) => {
    isMobile = b;
});
const Home = (props) => {
    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],
        personName: null,
        phone: null,
        lga: null,
        successShow: false,
        nameInput: "Name",
        fileList: [],
        loading: false,
        submissionType: null,
        wingType: null,
        wing: "",
        youthWingList: [],
        loadingYouthWing: false,
        twitter: "-",
        facebook: "-",
        instagram: "-",
        hideWingSelect: false,
        VIN: "-",
        wingExistAndGood:true
        // phaseCount:0
        // existingWingCount:0
    });

    const HeroStyle = {
        width: "100%",
        minHeight: "96vh",
        // minHeight: "81vh",
        // backgroundImage: "url(" + Hero + ")",
        backgroundColor: "#EAECEF",
        position: "relative",
        overflow: "hidden",
    };
    const HeroStyleMobile = {
        width: "100%",
        minHeight: "61vh",
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
        marginTop: "30px"
    };
    const VertCenterMobile = {
        // paddingTop: "30%",
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
    // const getData = () => {
    //     sanityClient.fetch(`*[_type == "flashews"]{
    //         news,

    //     }`)
    //         .then((data) => {
    //             newsArr = data
    //             setState({
    //                 myPosts: data
    //             })

    //             setTimeout(() => {
    //                 console.log(data, state.myPosts)
    //                 console.log(state.myPosts, newsArr)

    //             }, 3000);
    //         })
    //         .catch((err) => console.log(err))
    // }

    const postNewYouthWing = () => {
        const payload = {
            "title": state.wing,
            "lga": state.lga
        }
        console.log(state.VIN, phaseCount)
        if(state.VIN === "-" && phaseCount == 1){
            alert("VIN is compulsory")
            return;
        }
        if(payload.title == null && phaseCount == 1){
            alert("Eneter required fields")
            return;
        }
        $("#preloader").fadeIn()
        phaseCount = 1
        Endpoint.getAllYouthWing()
            .then(res => {
                console.log(res.data)
                console.log(state.wing, "wing")
             setTimeout(() => {
                var filter = res?.data?.filter(x => x.title == state.wing)
                console.log(filter, "ghj")
               if(state.wingExistAndGood){
                $("#preloader").fadeOut()
                $("#preloader2").fadeOut()
                $("#preloader3").fadeOut()
                $("#preloader4").fadeOut()
                $("#preloader").fadeOut()
                $("#joinYouth").fadeIn();
               }
                else if (filter != null && filter.length > 0) {
                    alert("Youth org name already exists")
                    $("#preloader").fadeOut()
                    return;
                    
                }
                else {
                    Endpoint.postYouthWing(payload)
                        .then(res => {
                            // setState({
                            //     successShow: true
                            // })
                            $("#preloader").fadeOut()
                            $("#preloader2").fadeOut()
                            $("#preloader3").fadeOut()
                            $("#preloader4").fadeOut()
                            console.log(res.data)
                            $("#preloader").fadeOut()
                            $("#joinYouth").fadeIn();
                        })
                        .then(err => {

                        })
                }
             }, 2000);
                // console.log(res.data)
                // executeGetAll = res.data;
            })
            .catch(err => {
                console.log(err)
            })
        // Endpoint.postYouthWing(payload)
        // .then(res => {
        //     setState({
        //         successShow: true
        //     })
        // })
        // .then(err => {

        // })
    }
    const handleRegister = () => {
        // e.preventDefault();

        let formData = new FormData;
            if ((state.personName === null && state.firstname === null)|| state.phone === null || state.lga === null) {
                alert("required fields cannot be left empty")
                return;
            }

            if (state.fileList == null || state.fileList.length <= 0) {
                alert("Upload passport to continue")
                return;
            }
            if(state.VIN === "-" && phaseCount == 1){
                alert("VIN is compulsory")
                return;
            }
            $("#preloader").fadeIn()

            formData.append("FirstName", state.firstname != null ? state.firstname : state.personName);
            formData.append("LastName", state.lastname != null ? state.lastname : state.personName != null ? state.personName : "-");
            formData.append("email", "-");
            formData.append("phoneNumber", state.phone);
            formData.append("gender", "-");
            formData.append("VIN", state.VIN);
            formData.append("address", "-");
            formData.append("dateOfBirth", "-");
            formData.append("higestQualification", "-");
            formData.append("isComputerLiterate", "-");
            formData.append("Lga", state.lga);
            formData.append("formType", state.submissionType);
            formData.append("hasPvc", "-");
            formData.append("PassportUrl", state.fileList[0].originFileObj);
            formData.append("Twitter", state.twitter);
            formData.append("Facebook", state.facebook);
            formData.append("Tittok", "-");
            formData.append("Instagram", state.instagram);
            formData.append("wingtype", state.submissionType);
            formData.append("wing", state.wing);

            Endpoint.registerUser(formData)
                .then((res) => {
                    console.log(res)
                    setState({
                        successShow: true
                    })
                    $("#preloader").fadeOut()
                    $("#preloader2").fadeOut()
                    $("#preloader3").fadeOut()
                    $("#preloader4").fadeOut()
                    $("#joinYouth").fadeOut()
                })
                .catch((error) => {
                    $("#preloader").fadeOut()

                    alert("Oops, something went wrong")
                    setState({ loading: false })
                });
        
        return false;
    };
    const handleModal = () => {
        setState({
            successShow: !state.successShow
        })
        if (state.successShow) {
            $("#preloader").fadeIn()
            window.location.href = "/"
        }
    }

    const handleModalSucess = () => {
        $("#preloader").fadeIn()

        setState({
            successShow: !state.successShow
        })
        setTimeout(() => {
            window.location.href = "/"
        }, 1500);
    }
    const initName = () => {

        if (state.nameInput == "Name") {
            setState({
                nameInput: ""
            })
        }
    }
    const closeYouthWing = () => {
        $("#preloader2").fadeOut()
        $("#preloader3").fadeOut()
        $("#preloader4").fadeOut()
        $("#recruitment__pop").fadeOut()
        $("#joinYouth").fadeOut()
        setState({ submissionType: null })

    }

    const showYouthWing = () => {
        $("#preloader2").fadeIn()
        setState({ submissionType: "YOUTH_WING" })
    }

    const fetchAllYouthWing = () => {
        Endpoint.getAllYouthWing()
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }
    const showWomenWing = (data) => {
        $("#preloader4").fadeIn()
        if (data == "WOMEN_WING") {
            setState({
                fadeTitle: "Women wing",
                fadeText: "Join our women wing",
                submissionType: "WOMEN_WING"
            })
        }
        else {
            setState({
                fadeTitle: "Uche Ndi Abia Youth Organization",
                fadeText: "Join our youth wing",
                submissionType: "YOUTH_WING"

            })
        }
        // $("#preloader4").fadeIn()
        // setState({submissionType:"WOMEN_WING"})
    }

    const showVolunteer = () => {
        $("#preloader3").fadeIn()
        setState({ submissionType: "VOLUNTEER" })
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = true;
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        console.log(file, "file before");
        //fileHold = file;

        setTimeout(() => {
            // console.log(fileHold, "exttrrrr before");
        }, 1500);

        return isJpgOrPng && isLt2M;
    };
    const handleWingSelection = (e) => {
        var data = e.target.value;
        console.log(data)

        if (data == "OTHERS") {
            setTimeout(() => {
                $("#other_wing_type").fadeIn()
            }, 800);
            setState({ wing: null, wingExistAndGood:false })
            phaseCount = 0

            $("#createbtn").fadeIn()
        }
        else {
            $("#other_wing_type").fadeOut()
            setState({ wing: data, wingExistAndGood:true })
            phaseCount = 0
            $("#createbtn").fadeIn()

        }
    }
    const changeLga = (e) => {
        console.log(e.target.value)
        setState({ lga: e.target.value })
        setState({ loadingYouthWing: true })

        // var filter = youthWingListObj.filter(x => x.lga.includes(e.target.value));
        // setState({youthWingList: filter})


        Endpoint.getYouthWingByLga(e.target.value)
            .then((res) => {
                console.log(res.data)
                setState({ loadingYouthWing: false, youthWingList: res.data, hideWingSelect: true })

            })
            .catch((err) => {
                console.log(err)
                setState({ loadingYouthWing: false })

            })

    }

    const handleChange = ({ fileList }) => {
        setState({ fileList });
        setTimeout(() => {
            console.log(state.fileList);
        }, 2000);
    };
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
    const changeWingName = (e) => {
        console.log(e.target.value)
        setState({ wing: e.target.value })

    }
    useEffect(() => {
        // getData()
       
        // $("#joinYouth").fadeIn();
        setTimeout(() => {
            console.log(height)
            $("#preloader").fadeOut()
        }, 2000);

        // setTimeout(() => {
        //     console.log(height)
        //     $("#recruitment__pop").fadeIn()
        // }, 4000);
    }, []);
    // const uploadButton = (
    //     <div>
    //       {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
    //       <div style={{ marginTop: 8, fontSize:"10px" }}>Upload Passport</div>
    //     </div>
    //   );
    return (

        <>

            <Modal title="Success" visible={state.successShow} onOk={handleModalSucess} onCancel={handleModal}>
                
                {state.submissionType == "YOUTH_WING" ? <p>Your have been successfully added to {state?.wing}</p> : <p>Your details were submitted successfully!</p>}
                

            </Modal>
            <div id="recruitment__pop"
                style={{ display: "none" }}
            >
                <div id="status row container" style={{ marginTop: "5em" }}>
                    {/* <div className="col-sm-8 text-white container" style={{ textAlign: "right", width: "85%" }}>
                        <i className="fa fa-times" style={{ marginLeft: "-20px" }} onClick={closeYouthWing} />
                    </div> */}
                    <center className="col-sm-12 text-white">
                        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", minHeight: "25vh", paddingBottom: "0px", paddingTop: "20px", width: "92%" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px", width: "30%" }}>
                            <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "7em", paddingRight: "7em" } : null}>
                                <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={{ fontSize: "17px", color: "#fff" }}>
                                        We are recruiting!
                                    </h2>

                                    <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "13px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                        {/* <span>We have taken some serious steps to create job opportunities for our vibrant youths.

                                            </span> */}
                                        <br />
                                        <br />
                                        {!isMobile ?
                                            <>
                                                <br />
                                            </>
                                            : null
                                        }
                                        <div className="text-center"
                                        // style={{ display: "flex", gap: "8px" }}
                                        >
                                            {/* <center>
                                <Link to={"/recruitment"}>
                                                        <button className="btn btn-outline-primary monte" style={{
                                                            width: "220px", float: "left", fontSize: "16px",
                                                        }}>Join our youth wing</button>
                                                    </Link>

                                                    <span>
                                                        
                                                        <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginLeft: "-14px", marginTop: "3px" }} />
                                                    </span>
                                                    </center> */}
                                            <Link to={"/recruitment"}>
                                                <button type="button" className="btn btn-outline-primary" style={{
                                                    width: "100%", float: "left", fontSize: "13px", marginTop: "0em"
                                                }}>Apply Here <i className="fa fa-arrow-right" /></button>
                                            </Link>
                                            <br />
                                            <br />
                                            <p onClick={closeYouthWing} style={{ fontSize: "12px", marginTop: "45px", cursor: "pointer" }}>Close and continue to website</p>
                                            {/* <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginTop: "2px" }} onClick={() => handleRegister()} /> */}
                                        </div>



                                    </p>

                                </div>
                            </div>

                        </div>
                        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

                    </center>
                </div>
            </div>
            <div id="preloader4"
                style={{ display: "none" }}
            >
                <div id="status row container" style={{ marginTop: "5em" }}>
                    <div className="col-sm-8 text-white container" style={{ textAlign: "right", width: "85%" }}>
                        <i className="fa fa-times" style={{ marginLeft: "-20px" }} onClick={closeYouthWing} />
                    </div>
                    <center className="col-sm-12 text-white">
                        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", minHeight: "75vh", paddingBottom: "71px", paddingTop: "20px" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px", width: "72vw" }}>
                            <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "10em", paddingRight: "10em" } : null}>
                                <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={{ fontSize: "18px", color: "#fff" }}>
                                        {/* Women Wing */}
                                        {state.fadeTitle}
                                    </h2>
                                    <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "17px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                        <span>
                                            {/* Join Our Women Wing */}
                                            {state.fadeText}

                                        </span>
                                        <br />
                                        <br />
                                        {!isMobile ?
                                            <>
                                                <br />
                                            </>
                                            : null
                                        }
                                        <div className="text-center"
                                        // style={{ display: "flex", gap: "8px" }}
                                        >
                                            {!state.submissionType == "YOUTH_WING" ? <>

                                                <Upload
                                                    listType="picture-card"
                                                    fileList={state.fileList}
                                                    // onPreview={handlePreview}
                                                    onChange={handleChange}
                                                    customRequest={dummyRequest}
                                                    beforeUpload={beforeUpload}
                                                    maxCount={1}
                                                    accept=".png,.jpg,.jpeg"
                                                >
                                                    {state.fileList.length >= 1 ? null :
                                                        <div style={{ color: "#fff" }}>
                                                            {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                                                            <div style={{ marginTop: 8, fontSize: "10px" }}>Upload Passport</div>
                                                        </div>}

                                                </Upload>
                                                <Input className="" onChange={(e) => { setState({ personName: e.target.value }) }} color="#ffffffd6"
                                                    placeholder="Name*" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} />

                                                <Input onChange={(e) => { setState({ phone: e.target.value }) }} placeholder="Phone"

                                                    color="#ffffffd6" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "20px" }} />
                                            </> : null}


                                            <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }}
                                                // onChange={(e) => { setState({ lga: e.target.value }) }}
                                                onChange={(e) => changeLga(e)}
                                            >
                                                <option value="">Select your LGA</option>

                                                {allLgas && allLgas.map(x => {
                                                    return (
                                                        <option value={x}>{x}</option>

                                                    )
                                                })}
                                            </select>
                                            {state.loadingYouthWing ? <div className="mt-2">
                                                <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={15} />
                                            </div> : null}
                                            {state.submissionType == "WOMEN_WING" ?

                                                // <select onChange={(e) => { setState({ wingtype: e.target.value }) }} style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} 
                                                // >
                                                //     <option value="">Select Women Wing</option>

                                                // </select>

                                                <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} onChange={(e) => { setState({ lga: e.target.value }) }}>
                                                    <option value="">Select Women Wing</option>

                                                    {/* {youthWingList && youthWingList.map(x => {
                                                    return (
                                                        <option value={x}>{x}</option>

                                                    )
                                                })} */}
                                                </select>

                                                :
                                                <>
                                                    {state.hideWingSelect ? <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} onChange={handleWingSelection} name="wing">
                                                        <option value="">Select Youth Group</option>

                                                        {state.youthWingList && state.youthWingList.map(x => {
                                                            return (
                                                                <option value={x.title}>{x.title}</option>
                                                            )
                                                        })}
                                                        <option value={"OTHERS"}>Not Listed? Create</option>

                                                    </select> : null}



                                                    <Input className="" id="other_wing_type" onChange={changeWingName} color="#ffffffd6"
                                                        placeholder="Organization Name" style={{ background: "transparent", display: "none", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "10px" }} />
                                                </>
                                                // <select onChange={(e) => { setState({ wingtype: e.target.value }) }} style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} 
                                                // >
                                                //     <option value="">Select Youth Wing</option>

                                                // </select>

                                            }
                                            {state.submissionType == "YOUTH_WING" ? <button type="button" id="createbtn" onClick={() => postNewYouthWing()} className="btn btn-outline-primary" style={{
                                                width: "100%", float: "left", fontSize: "10px", marginTop: "10em", display: "none"
                                            }}>Next &nbsp;<i className="fa fa-arrow-right" /></button> :

                                                <button type="button" onClick={() => handleRegister()} className="btn btn-outline-primary" style={{
                                                    width: "100%", float: "left", fontSize: "10px", marginTop: "10em"
                                                }}>Submit <i className="fa fa-arrow-right" /></button>


                                            }
                                            {/* <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginTop: "2px" }} onClick={() => handleRegister()} /> */}
                                        </div>



                                    </p>

                                </div>
                            </div>

                        </div>
                        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

                    </center>
                </div>
            </div>
            <div id="joinYouth"
                style={{ display: "none" }}
            >
                <div id="status row container" style={{ marginTop: "5em" }}>
                    <div className="col-sm-8 text-white container" style={{ textAlign: "right", width: "85%" }}>
                        <i className="fa fa-times" style={{ marginLeft: "-20px" }} onClick={closeYouthWing} />
                    </div>
                    <center className="col-sm-12 text-white">
                        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", minHeight: "75vh", paddingBottom: "71px", paddingTop: "20px" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px", width: "72vw" }}>
                            <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "10em", paddingRight: "10em" } : null}>
                                <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={{ fontSize: "14px", color: "#fff" }}>
                                    {state.wing} Youth Organization
                                    </h2>

                                    <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "17px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                        <span>Fill form to continue</span>
                                        <br />
                                        <br />
                                        {!isMobile ?
                                            <>
                                                <br />
                                            </>
                                            : null
                                        }


                                        <div className="text-center"
                                        // style={{ display: "flex", gap: "8px" }}
                                        >
                                            {/* <center>
                                <Link to={"/recruitment"}>
                                                        <button className="btn btn-outline-primary monte" style={{
                                                            width: "220px", float: "left", fontSize: "16px",
                                                        }}>Join our youth wing</button>
                                                    </Link>

                                                    <span>
                                                        
                                                        <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginLeft: "-14px", marginTop: "3px" }} />
                                                    </span>
                                                    </center> */}
                                            <Upload
                                                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={state.fileList}
                                                // onPreview={handlePreview}
                                                onChange={handleChange}
                                                customRequest={dummyRequest}
                                                beforeUpload={beforeUpload}
                                                maxCount={1}
                                            >
                                                {state.fileList.length >= 1 ? null :
                                                    <div style={{ color: "#fff" }}>
                                                        {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                                                        <div style={{ marginTop: 8, fontSize: "10px" }}>Upload Passport</div>
                                                    </div>}
                                                {/* {this.state.imageUrl && fileList.length >= 1 ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                                                {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
                                            </Upload>
                                            <Input className="" onChange={(e) => { setState({ firstname: e.target.value }) }} color="#ffffffd6"

                                                placeholder="First name*" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} />
                                                   
                                                   <Input className="" onChange={(e) => { setState({ lastname: e.target.value }) }} color="#ffffffd6"

                                            placeholder="Last Name*" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "20px" }} />

                                            <Input onChange={(e) => { setState({ phone: e.target.value }) }} placeholder="Phone"

                                                color="#ffffffd6" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "20px" }} />


                                <Input className="" onChange={(e) => { setState({ VIN: e.target.value }) }} color="#ffffffd6"

                                            placeholder="VIN (Voter's Identity Number)*" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "20px" }} />
                                            {/* <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} onChange={(e) => { setState({ lga: e.target.value }) }}>
                                                <option value="">LGA</option>

                                                {allLgas && allLgas.map(x => {
                                                    return (
                                                        <option value={x}>{x}</option>

                                                    )
                                                })}
                                            </select> */}
                                            {/* <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} 
                                            >
                                                <option value="">Select Youth Wing</option>
                                            </select> */}
                                            <button type="button" onClick={() => handleRegister()} className="btn btn-outline-primary" style={{
                                                width: "100%", float: "left", fontSize: "10px", marginTop: "10em"
                                            }}>Submit <i className="fa fa-arrow-right" /></button>
                                            {/* <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginTop: "2px" }} onClick={() => handleRegister()} /> */}
                                        </div>

                                    </p>

                                </div>
                            </div>

                        </div>
                        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

                    </center>



                </div>
            </div>
            <div id="preloader3"
                style={{ display: "none" }}
            >
                <div id="status row container" style={{ marginTop: "5em" }}>
                    <div className="col-sm-8 text-white container" style={{ textAlign: "right", width: "85%" }}>
                        <i className="fa fa-times" style={{ marginLeft: "-20px" }} onClick={closeYouthWing} />
                    </div>
                    <center className="col-sm-12 text-white">
                        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", minHeight: "75vh", paddingBottom: "71px", paddingTop: "20px" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px", width: "72vw" }}>
                            <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "10em", paddingRight: "10em" } : null}>
                                <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={{ fontSize: "20px", color: "#fff" }}>
                                        Volunteer
                                    </h2>

                                    <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "17px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                        <span>Become a part of our 5000+ volunteers</span>
                                        <br />
                                        <br />
                                        {!isMobile ?
                                            <>
                                                <br />
                                            </>
                                            : null
                                        }


                                        <div className="text-center"
                                        // style={{ display: "flex", gap: "8px" }}
                                        >
                                            {/* <center>
                                <Link to={"/recruitment"}>
                                                        <button className="btn btn-outline-primary monte" style={{
                                                            width: "220px", float: "left", fontSize: "16px",
                                                        }}>Join our youth wing</button>
                                                    </Link>

                                                    <span>
                                                        
                                                        <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginLeft: "-14px", marginTop: "3px" }} />
                                                    </span>
                                                    </center> */}
                                            <Upload
                                                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={state.fileList}
                                                // onPreview={handlePreview}
                                                onChange={handleChange}
                                                customRequest={dummyRequest}
                                                beforeUpload={beforeUpload}
                                                maxCount={1}
                                            >
                                                {state.fileList.length >= 1 ? null :
                                                    <div style={{ color: "#fff" }}>
                                                        {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                                                        <div style={{ marginTop: 8, fontSize: "10px" }}>Upload Passport</div>
                                                    </div>}
                                                {/* {this.state.imageUrl && fileList.length >= 1 ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                                                {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
                                            </Upload>
                                            <Input className="" onChange={(e) => { setState({ personName: e.target.value }) }} color="#ffffffd6"

                                                placeholder="Name*" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} />

                                            <Input onChange={(e) => { setState({ phone: e.target.value }) }} placeholder="Phone"

                                                color="#ffffffd6" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "20px" }} />


                                            <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} onChange={(e) => { setState({ lga: e.target.value }) }}>
                                                <option value="">LGA</option>

                                                {allLgas && allLgas.map(x => {
                                                    return (
                                                        <option value={x}>{x}</option>

                                                    )
                                                })}
                                            </select>
                                            {/* <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} 
                                            >
                                                <option value="">Select Youth Wing</option>
                                            </select> */}
                                            <button type="button" onClick={() => handleRegister()} className="btn btn-outline-primary" style={{
                                                width: "100%", float: "left", fontSize: "10px", marginTop: "10em"
                                            }}>Submit <i className="fa fa-arrow-right" /></button>
                                            {/* <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginTop: "2px" }} onClick={() => handleRegister()} /> */}
                                        </div>

                                    </p>

                                </div>
                            </div>

                        </div>
                        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

                    </center>



                </div>
            </div>

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
                        <div className="hero-image" id="slide__one">
                            <div className={"container"} style={HeroContent}>
                                <div className={"row"}>
                                    <div className="col-lg-6">

                                    </div>
                                    <div className={isMobile ? "col-lg-6 col-sm-12" : "col-lg-6 col-sm-12"} style={isMobile ? {
                                        marginTop: `${height}`
                                    } : { marginTop: "10em" }}>
                                        <div style={!isMobile ? VertCenter : VertCenterMobile}>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {isMobile ? <div className="" style={{ position: "absolute", top: "44vh", width: "100%", display: "flex", paddingLeft: "10px" }}>

                </div> : null}
                <div className="text-center" style={{ width: "100%", height: "29px", background: "#8f0d22", marginTop: "0px", paddingTop: "0px", paddingBottom: "0px" }}>
                    <Marquee gradient={false} speed={40} style={{ zIndex: "9" }}>
                        {newsArr && newsArr.map((x) => {
                            return (
                                <p style={{ fontSize: "13px", color: "#f3f3f3cf" }} className="text-white">
                                    {x}
                                    <i className="fa fa-star" /> &nbsp; &nbsp; &nbsp;
                                </p>
                            )
                        })}
                    </Marquee>
                </div>
                <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", height: "auto", paddingBottom: "71px" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px" }}>
                    <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "25em", paddingRight: "25em" } : null}>
                        <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "20px", color: "#fff" }}>
                                Help Ensure Accelerated Development For Abia State
                            </h2>
                            <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "17px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                <span>Join Our Movement</span>
                                <br />
                                <br />
                                {!isMobile ?
                                    <>
                                        <br />
                                    </>
                                    : null
                                }
                                <div className="text-center" style={{ display: "flex", gap: "8px" }}>

                                    <button className="btn btn-outline-primary" type="button" onClick={() => showWomenWing("YOUTH_WING")} style={{
                                        width: "32%", float: "left", fontSize: "10px",
                                    }}>Youth wing <i className="fa fa-arrow-right" /></button>

                                    <button onClick={() => showWomenWing("WOMEN_WING")} className="btn btn-outline-primary" style={{
                                        width: "32%", float: "left", fontSize: "10px"

                                    }}>Women wing <i className="fa fa-arrow-right" /></button>
                                    <button onClick={showVolunteer} className="btn btn-outline-primary" style={{
                                        width: "32%", float: "left", fontSize: "10px",
                                    }}>Volunteer <i className="fa fa-arrow-right" /></button>

                                </div>
                                {!isMobile ? <span style={{ marginTop: "15px" }}>
                                    <br />
                                    <br />
                                    Within a decade, Abia will become Nigeria’s export capital, double its economy, reduce joblessness by half, and improve the quality of life for NDI ABIA! Our plan is to build a stronger ABIA by building a more robust economy, a modern community with a cleaner environment and more modern infrastructure.

                                </span> :
                                    <>

                                        <br />
                                        <span style={{ fontSize: "11px" }}>
                                            Within a decade, Abia will become Nigeria’s export capital, double its economy, reduce joblessness by half, and improve the quality of life for NDI ABIA! Our plan is to build a stronger ABIA by building a more robust economy, a modern community with a cleaner environment and more modern infrastructure.
                                        </span>
                                    </>

                                }


                            </p>
                            <p>
                                <span className="text-white">
                                    <a href="https://web.facebook.com/EUcheIkonne" className="text-white" target={"_blank"}>
                                        <i className="fa fa-facebook-official" style={{ fontSize: "28px", marginRight: "25px" }} />
                                    </a>
                                </span>


                                <span className="text-white">
                                    <a href="https://twitter.com/ikonne_uche?t=3_aLzAbeB-U9ypSsp2e5Lg&s=09" className="text-white" target={"_blank"}>
                                        <i className="fa fa-twitter-square" style={{ fontSize: "28px", marginRight: "25px" }} />
                                    </a>
                                </span>

                                <span className="text-white">
                                    <a href="https://vm.tiktok.com/ZMNBaosmA/" className="text-white" target={"_blank"}>

                                        <i className="fa fa-instagram" style={{ fontSize: "28px", marginRight: "25px" }} />

                                    </a>

                                </span>


                                <span className="text-white">
                                    <a href="https://vm.tiktok.com/ZMNBaosmA/" className="text-white" target={"_blank"}>

                                        <img src={TikTok2} style={{ width: "30px", marginTop: "-12px" }} />


                                    </a>

                                </span>
                            </p>
                        </div>
                    </div>

                </div>

                {/*         
            <span class="image full-bg" style={{backgroundImage: `url(https://cdn.donaldjtrump.com/djtweb/general/callout_about.jpeg)`}}>


            </span>
            */}

                <div className="bg-sky py-6">
                    <div className="container" style={!isMobile ? { marginTop: "6rem" } : { marginTop: "-50px" }}>
                        <h2 className="font-weight-bold monte text-center" style={{ fontSize: "16px" }}>
                            Get Involved.
                        </h2>
                        <p style={{ fontSize: "14px" }} className="text-center">
                            We would love to have you as part of our campaign community. Check out the various ways to get involved below and help us secure a brighter future for the NDI ABIA.
                            <br />
                            Become our voice, and help us spread verified campaign materials, rallies & party events news via your social media platforms: WhatsApp, Instagram, Facebook, Blogs e.t.c, let the world hear your voice.
                        </p>
                    </div>
                </div>

                <div className={isMobile ? "container" : null} style={isMobile ? { background: "#213875", height: "auto", padding: "24px" } : { background: "#213875", padding: "65px", marginTop: "6rem" }}>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 mb-5">
                            <h2 className="monte text-center text-white" style={{ fontSize: "26px" }}>
                                Our Five(5) Point Agenda
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#fff" }}>
                                #1

                                {/* Trade */}
                            </h2>
                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>T</span> */}

                                Good governance that is participatory, transparent, accountable, effective, efficient, equitable, responsive, inclusive and respects rule of law.




                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#fff" }}>
                                #2
                                {/* Industrialization */}
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>I</span> */}

                                Education and human capital development with a focus on all decisions to improve Elife expectancy, per capita income, and overall quality of lives.

                            </p>
                        </div>

                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#fff" }}>
                                #3
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>G</span> */}

                                Industrialisation enabled by economic infrastructure, access to cutting edge knowledge, talent and resources to ensure productivity and competitiveness.


                            </p>
                        </div>




                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#fff" }}>
                                #4
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>E</span> */}
                                Rural developement and integration focused on improved socio-economic well-being of those living in our rural areas and closing the decades old disparities.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#fff" }}>
                                #5
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>R</span> */}

                                Trade promotion with a focus on access to finance, market access, regional linkages, trade and investment promotion, ease of doing business.

                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-sky py-6 mb-5">
                    <div className="container">
                        <h2 className="font-weight-bold mt-2 monte text-center" style={{ fontSize: "17px" }}>
                            Volunteer
                        </h2>
                        <p style={{ fontSize: "14px" }} className="text-center">
                            Get active and become a part of our 5000 volunteer voices, and help amplify our voice, and our quest for a better and prosperous future for NDI ABIA, whether at the grassroots level or at the state level, our efforts put together compound to a great ABIA.
                        </p>
                        <div className="text-center" style={{ display: "flex", gap: "8px" }}>

                            <button className="btn btn-outline-primary" type="button" onClick={showYouthWing} style={{
                                width: "32%", background: "#8f0d22", float: "left", fontSize: "10px",
                            }}>Youth wing <i className="fa fa-arrow-right" /></button>

                            <button onClick={showWomenWing} className="btn btn-outline-primary" style={{
                                width: "32%", background: "#8f0d22", float: "left", fontSize: "10px"

                            }}>Women wing <i className="fa fa-arrow-right" /></button>
                            <button onClick={showVolunteer} className="btn btn-outline-primary" style={{
                                width: "32%", background: "#8f0d22", float: "left", fontSize: "10px",
                            }}>Volunteer <i className="fa fa-arrow-right" /></button>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
