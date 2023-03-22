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
import { Button, Modal } from 'antd';
import sanityClient from "../../client"
import { styled } from '@mui/material/styles';
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

const newsJson = [
    {
        id: 1,
        title: "ISUIKWUATO PEOPLE DECLARES TOTAL SUPPORT FOR PROF. IKONNE HONOURS HIM WITH A CHIEFTAINCY TITLE ",
        news: "The Palace of His Eminence, Eze Sir Dr. Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, was agog on Saturday, June 11, 2022, as the people of Isuikwuato Local Government trooped out in their numbers to declare support and endorse the People's Democratic Party (PDP) gubernatorial candidate in Abia State, Professor Uche Ikonne as their sole governorship candidate for 2023 general elections. The royal venue which was filled to capacity had illustrious sons and daughters from all clans that made up Isuikwuato, members of the clergy, traditional rulers, political office holders, captains of industry, various women, youth groups and students, in attendance. Eulogies poured in for  Professor Ikonne, their adopted son, as speaker after speaker commended him for the quality leadership he rendered in his over 30years service at Abia State University, Uturu, Isuikwuato LGA. In his speech while conferring The ala di uru Chieftancy title on professor Ikonne, His Eminence, Eze Ezo Ukandu, The Enyi na Obiangwu 1 of Imenyi Kingdom, said that the entire ndi eze Isuikwuato decided to honour Professor Ikonne in appreciation of his immense contributions to human capital development especially in the educational advancement of their children in Abia State University and beyond. Also speaking, the PDP woman Leader in Abia State Lolo Charity Emenike, former TC Chairperson Isuikwuato Dame Amarachi Dede, former State Treasurer of the PDP in Abia State, Chief Chinoyerem Uwadinjor expressed satisfaction on the aspirations of Professor Ikonne, noting that the state under his watch would witness massive development.  Ndi Isuikwuato, led by the Chairman of the stakeholders forum Chief Emma Ibegbulam, and the Executive Chairman, Hon.Chima Agbaeze endorsed Professor Uche Ikonne as their sole Governorship candidate come 2023.",
        date: "2023"
    },
    {
        id: 2,
        title: "2023: ABIA PROGRESSIVES PLEDGES SUPPORT FOR PROFESSOR IKONNE, VOWS TO MOBILIZE VOTERS ACROSS 17 LGA'S  ",
        news: "As the race for who succeeds Governor Ikpeazu continues to gather momentum, Abia Progressives, a frontline PDP pro-group has pledged its support to the Gubernatorial Candidate of the People's Democratic Party in Abia State, Professor Uche Ikonne.The group which vows to also mobilize its members and other electorates across the 17 local government areas of the state and beyond for Prof. Ikonne, said they're convinced that Prof. Ikonne remains the best man for the job as he possesses the requisite qualities to succeed as governor if elected. The group, led by the State Coordinator, Prince Ugboaja Innocent, made this known during a solidarity visit to Professor Ikonne at his Umuahia residence. Speaking during the visit, the Secretary of the association, Barr.Chizuru Kanu louded Professor Ikonne's leadership qualities, especially in the areas of human and capacity development with an affirmation that he will surely bring those qualities to bear. Also speaking, the coordinators: Hon.Kelechi Dede(Abia South) Prince Obinna Okey(Abia Central) and Hon.Orji Udeagha(Abia North), appealed to Abians to embrace this golden opportunity, for a better Abia. Professor Ikonne in his response, thanked Abia Progressives for their thoughtfulness as well as promised to consolidate on the peaceful atmosphere created by the incumbent Governor.He also revealed that his administration will run an all- inclusive government where every Abian will feel a sense of belonging regardless of 'their idiosyncrasies and different backgrounds'.He enjoined the Abia Progressive, whom he identified as veritable partner for development, to reach out to Abians with informed opinions about him, order than biased assessment that is predicated on domestic sympathy. In a vote of thanks, the immediate past Executive Chairman of Aba North LGA, Prince Stanley Ogbonna thanked Professor Ikonne for the warmth reception, with an assurance of his victory come 2023. The Deputy Chairman Isiala Ngwa North, Chuks Amaike, Dr.Nwaezuoke, Prince Ahamefula Ogbonna, Hon.Innocent Willson, Barr Frank Enyioma and, other notable members of the association were present during the visit.#UcheNdiAbia2023",
        date: "2023"
    }
]
let newsArr = [];
let mainNewsArr = [];
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const NewsAndEvents = (props) => {

    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],
        newsOpen: false,
        newsTitle: "",
        newsValue: "",
        myPosts: []
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

    const getData = () => {
        sanityClient.fetch(`*[_type == "flashews"]{
            news,
       
        }`)
            .then((data) => {
                newsArr = data
                setState({
                    myPosts: data
                })

                setTimeout(() => {
                    // console.log(data, state.myPosts)
                    // console.log(state.myPosts, newsArr)

                }, 3000);
            })
            .catch((err) => console.log(err))
    }

    const getMainNews = () => {
        sanityClient.fetch(`*[_type == "events"]{
            title,
            newstext,
            dateposted,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt{

                }
            }
        }`)
            .then((data) => {
                mainNewsArr = data
                setState({
                    myPosts: data
                })

                setTimeout(() => {
                    console.log(data, state.myPosts)
                    console.log(state.myPosts, mainNewsArr)

                }, 3000);
            })
            .catch((err) => console.log(err))
    }
    const handleNewsOpen = (data) => {
        console.log(data)
        setState({
            newsOpen: !state.newsOpen,
            newsTitle: data.title,
            newsValue: data.newstext

        })


    }
    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index,
        });
    };

    useEffect(() => {
        getData();
        getMainNews()
        setTimeout(() => {
            $("#preloader").fadeOut()
        }, 2000);
    }, []);
    require("antd/dist/antd.css");

    return (
        <>
            <Modal title={state.newsTitle} visible={state.newsOpen} onOk={handleNewsOpen} onCancel={handleNewsOpen}>
                <p>
                    {state.newsValue}
                </p>

            </Modal>
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

                                            <h1 className="h1-custom home-title" style={isMobile ? { color: "#ffffffde", marginTop: "60px", fontSize: "23px" } : { color: "#ffffffde", marginTop: "60px" }}>
                                                <span className="monte" style={isMobile ? { fontSize: "19px" } : null}>
                                                    Events
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
                        {newsArr && newsArr.map((x) => {
                            return (
                                <p style={{ fontSize: "13px", color: "#f3f3f3cf" }} className="text-white">
                                    {x.news}
                                    <i className="fa fa-star" /> &nbsp; &nbsp; &nbsp;

                                </p>
                            )
                        })}

                        <p>&nbsp;</p>
                    </Marquee>
                </div>

                <div className="bg-sky" style={isMobile ? { padding: "40px" } : { padding: "63px" }}>
                    <div className="row">


                        {mainNewsArr && mainNewsArr.map((x) => {
                            let initialString = x.title.split(" ");
                            let initials = initialString[0].split("")
                            console.log(initials, "init")
                            return (
                                <>
                                    <div className="col-sm-12 col-lg-3">
                                        <Card sx={{ maxWidth: 345 }} style={isMobile ? { marginTop: "30px" } : null}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                        {initials[0] + initials[1]}
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        {/* <MoreVertIcon /> */}
                                                    </IconButton>
                                                }
                                                title={x.title.length > 30 ? x.title.substring(0, 30).toLowerCase() + "..." : x.title}
                                                subheader={x.dateposted}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image={x.mainImage?.asset?.url}
                                                alt="uche ikonne"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {x.newstext?.length > 250 ? x.newstext.substring(0, 250) + " ..." : x.newstext}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites" style={{ fontSize: "16px" }} onClick={() => handleNewsOpen(x)}>
                                                    <small> view more <i className="fa fa-arrow-right " /></small>
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    {/* <ShareIcon /> */}
                                                </IconButton>

                                            </CardActions>

                                        </Card>
                                    </div>
                                    {/* <div className="col-sm-12 col-md-4" style={isMobile ? { marginBottom: "20px" } : null}>
                                        <h2 className="font-weight-bold mt-1 monte" style={{ fontSize: "16px" }}>
                                            {x.title.length > 200 ? x.title.substring(0, 200) + "........" : x.title}
                                        </h2>
                                        <p style={{ fontSize: "14px" }} className="">
                                            {x.newstext?.length > 300 ? x.newstext.substring(0, 300) + "......." : x.newstext}
                                        </p>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleNewsOpen(x)}>
                                            View more <i className="fa fa-arrow-right " />
                                        </button>
                                    </div> */}
                                    {isMobile ? <>
                                        <br />
                                        <br />
                                    </> : null}
                                </>
                            )
                        })}



                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAndEvents);
