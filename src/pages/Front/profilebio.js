import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import { PulseSpinner } from "react-spinners-kit";
import Ikonne from "../../assets/images/ikedited22.jpg";
import Igwe from "../../assets/images/igwe2.jpeg";

import Particles from "react-particles-js";
import Test from "../../assets/images/home/test.svg";
import Report from "../../assets/images/home/report.svg";
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
const ProfileBio = (props) => {
    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],
        passedParam:props?.location?.state?.dataPass
        

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

         console.log(props?.location?.state?.dataPass)
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
                                                {state.passedParam == "uche" ? 
                                                <span className="monte" style={isMobile ? { fontSize: "19px" } : null}>
                                                  Prof. Eleazar Uche Ikonne
                                                </span>
                                                :
                                                <span className="monte" style={isMobile ? { fontSize: "19px" } : null}>
                                                 Hon. Philip Okey Igwe
                                                </span>
                                                }
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
                {state.passedParam == "uche" ?
                
                <div className="row justify-content-center">
                        <div className="col-sm-12 col-lg-6 mb-4">
                            <img src={Ikonne} style={{width:"384px"}}/>
                        </div>
                         
                        <div className="col-sm-12 col-lg-6">
                        
                            <p style={{ fontSize: "14px" }} className="mb-4">
                            <span className="monte" style={{fontWeight:"bold"}}>Prof. Uchenna Eleazar Ikonne</span>,
                            is a Nigerian professor of optometry. In December 2015 he became the 7th Substantive Vice-Chancellor of the Abia State University. having previously served as the Rector, Abia State Polytechnic, Aba – (on Rescue Mission) 2014–2015.
                            </p>
                            <p className="monte">Early Life And Education</p>
                            <p style={{ fontSize: "14px" }}>
Ikonne was born in Agburuike, Nsulu in Isiala Ngwa North, Abia State. After attending Ngwa High School in Aba of Abia State, he studied optometry at Manila Central University, Philippines. He also graduated from a specialist master's degree programme in Hospital Administration at St. Jude College, also in the Philippines, and on his return to Nigeria in 1985, served as consulting optometrist at the Park Lane General Hospital, Enugu, and obtained a Doctor of Philosophy degree in Environmental Health Science from Abia State University.

                            </p>

                            <p className="monte">Careers And Position Held</p>
                            <p style={{ fontSize: "14px" }}>
                            Prior to his appointment as the 7th Substantive Vice-Chancellor, Abia State University, 1st December 2015 by the Visitor to the University and Governor, Abia State, Okezie Victor Ikpeazu Ph.D, Professor Ikonne held several Administrative offices including:

                            </p>
                            <ul style={isMobile ? { fontSize: "13px", color: "#000" } : {fontSize:"14px"}}>
                            
                            <li>Rector, Abia State Polytechnic, Aba (on Rescue Mission)</li>
                            <li>Deputy Vice-Chancellor (Academic), ABSU- 2010-2014</li>
                            <li>Deputy Provost, College of Medicine and Health Sciences</li>

                            <li>Dean, Faculty of Health Sciences</li>
                            <li>Director, Institute of Distance Education (IDEA)</li>
                            <li>Head, Department of Optometry, ABSU.</li>
                            <li>Member, Optometrists and Dispensing Opticians Registration Board of Nigeria from 1993 to date</li>
                            <li>Chairman of the Education Committee, 1993 to date</li>

                            <li>Chairman, Disciplinary Committee, 2007 to date</li>

                            <li>Vice-Chairman, Optometrists and Dispensing Opticians Registration Board of Nigeria, 2009 to date</li>
                            <li>Registrar, Nigerian Postgraduate College of Optometrists</li>
                        </ul>





                            <p style={{ fontSize: "14px" }}>
                            A worthy Knight of St. Christopher, Church of Nigeria, Anglican Communion, an Apostle of “Our Story Must Change” and 18th Inaugural Lecture Laureate of ABSU, “….Seeing is Believing”, Professor Ikonne is widely published in Local and International peer-reviewed Journals and Books.

                            </p>

                            <p style={{ fontSize: "14px" }}>
                            Professor Ikonne has taken Abia State University from 93rd position, on assumption of Office in 2015, to 27th and 2nd Best State University in Nigeria in the 2020 Nigerian University Ranking and has practically changed the Story of Abia State University, Academically and Infrastructurally, into an enviable Citadel of Learning.

                            </p>




                            <p style={{ fontSize: "14px" }}>
                            Professor Ikonne’s positive impact to the Society and Humanity is incomparable. As a Role Model, we are determined to emulate his Worthy Legacies and Giant Strides.

                            </p>


                            <p className="monte">Performance Record</p>
                            <p style={{ fontSize: "14px" }} className="mb-4">
Professor Uchenna Eleazar Ikonne held public office as Ag Rector of the Abia State Polytechnic for 14 months and Vice-Chancellor of the Abia State University for five years.

                            </p>

                            <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "13px", color: "#000" } : { fontSize: "14px" }}>
                                ABIA STATE UNIVERSITY
                            </h2>
                            <ul style={isMobile ? { fontSize: "14px", color: "#000" } : { fontSize: "14px" }} className="mb-4">
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





                            <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "13px", color: "#000" } : { fontSize: "14px" }}>
                                ABIA STATE POLYTECHNIC
                            </h2>
                            <ul style={isMobile ? { fontSize: "14px", color: "#000" } : { fontSize: "14px" }}>
                                <li>Cleared the arrears of N2b debt the school owed</li>
                                <li>Used internally generated revenue and subvention to pay the backlog of nine months' salary owed to workers.</li>
                                <li>Enhanced the environment and the school’s aesthetics</li>
                                <li>Secured NBTE accreditation for Unaccredited courses.</li>
                                <li>Enabled staff to access TETFUND funds for conferences and seminars.</li>
                                <li>Started efforts with TETFUND to enable Abia Poly to access infrastructure funds from TETFUND.</li>
                            </ul>




                            <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "14px", color: "#000" } : { fontSize: "14px" }}>
                                Awards and Recognition
                            </h2>
                            <ul style={isMobile ? { fontSize: "14px", color: "#000" } : { fontSize: "14px" }} className="mb-4">
                                <li>Professor Ikonne won the African Optometric Educator Award of the year 2003 and the Distinguished merit Award of the Nigerian Optometric Association, 2006</li>
                                <li>Most Outstanding Vice-Chancellor in Nigeria, 2019</li>
                                <li>Best Performing Vice-Chancellor (South-East) on Staff Welfare and Development.</li>
                                <li>Ikemba 1 of Agburuezeukwu</li>
                                <li>Ugo Mmuta of Abia State</li>
                                <li>Icon of Nigerian Students</li>
                                <li>Senior Course Rep. of ABSU Students etc</li>
                            </ul>




                           
                            <p className="monte">Brief Biography</p>
                            <p style={{ fontSize: "14px" }}>
                            Professor E. Uchenna Ikonne, from Agburuke – Nsulu in Isiala Ngwa North, LGA, Abia State has had a flourishing career in teaching, research and administration in tertiary education spanning for a period of 29 years. A career that had a humble beginning in 1986 as a lecturer II in the school of Pre-professional sciences of then Imo State University and rose to the height of a professor of Optometry in 2006 at the Abia State University, Uturu. Within this period, he taught at both undergraduate and graduate levels playing a pioneering role in the development of Optometry curriculum course content and clinical structure of a programme that became the flagship of then Imo state University in company of expatriate faculty members. In 1994, he became the first indigenous head of department, Department of Optometry following the exit of the expatriate Dean, school of medicine and head of department, Department of Optometry, Prof. B.S. Mencias. Prof Ikonne was head of Department of Optometry for an unprecedented consecutive 10 years, during which he built the programme to an enviable height of professional training and community service; producing and mentoring young competent and clinically proficient Optometry graduates for the National health care Delivery system and beyond the borders. He had a brief break from the Department when he served as director, institute for distant education. He turned the fortunes of this institute around positively and was unexpectedly returned as the head of department in Optometry. He performed a feat by being the first and only head of department that mobilized staff and students of Optometry to construct a block of lecture halls and offices through self-effort and direct labour for the department of Optometry named Vision Hall.
                            </p>


                            <p style={{ fontSize: "14px" }}>
                            He obtained his O.D (Doctor of Optometry) degree from Manila central University, Philippines and Masters in Hospital administration from St Jude College, Manila Philippines.
                            </p>

                            <p style={{ fontSize: "14px" }}>
                            He successfully completed the 4 year residency programme in primary care Optometry and obtained a fellowship, FNCO (Fellow of the Nigerian College of Optometrists). He earned a Ph.D in Environmental health sciences.
                            </p>

                            <p style={{ fontSize: "14px" }}>
                            Professor Ikonne was appointed the first Ag. Dean Faculty of health science and served as Deputy Provost, college of medicine and health sciences. He has served in various senate committees as member and other times as Chairman. He was an elected member of the Governing board of the Abia State University Teaching Hospital, Aba, representing the senate.
                            </p>

                            <p style={{ fontSize: "14px" }}>
                            He is a recipient of many awards from diverse bodies in recognition of academic achievements, administrative ingenuity and service oriented disposition to humanity including an Award from the Abia Newspapers and Publishing house as the tertiary level Education Administrator of the year 2015.
                            </p>

                            <p style={{ fontSize: "14px" }}>
                            Professor Ikonne was elected the deputy Vice Chancellor by the University Senate as nominated by the Vice Chancellor; Professsor Chibuzo Ogbuagu. As the deputy Vice Chancellor, he discharged himself very creditably and brought dignity and decorum to the office as a veritable assistant to the Vice Chancellor. He has served as a Resource person to many academic, social and political events including a guest lecturer on the 22nd Anniversary of Abia State by the Abia State government at Okpara Auditorium Umahaia. His diligent service as the deputy Vice Chancellor attracted the attention of the visitor, Chief T.A Orji, the executive Governor of the State, who announced him as the acting Rector, Abia State Polytechnic, Aba on a “recuse mission (2014-2015)”. In 1 December 2015 he became the 7th substantive Vice Chancellor of Abia State University.
                            </p>

                            <p style={{ fontSize: "14px" }}>
                            Professor Ikonne has published widely in peer reviewed journals both nationally and internationally. He has two professional books to his credit. He delivered a ground breaking 18th Inaugural Lecture of Abia State University, titled “SEEING IS BELIEVING (AHUNANYA EKWE): A PARADIGM OF CHILD DEVELOPMENT”. This is the height of academic exposition of any Professor. He lives a pious life and devotes much of his time to church activities where he serves as the Pastor’s Waden Church at the Good Shepherd, Ehimiri, Umuahia, Abia State. He is a knight of Saint Christopher (KSC) of the Anglican Communion.
                            </p>

                            <p style={{ fontSize: "14px" }}>
                            Professor Ikonne, is married to Barr (Mrs.) U.G Uche-Ikonne, a Permanent Secretary in the Abia State Government with two sons: Dr. Chikezie Uche-Ikonne and Mr. Okezie Uche- Ikonne. Professor Ikonne and his wife, Barrister Lady Uzoamaka Ikonne, built a Church hall at St Andrews Anglican Church, Agburuke – Nsulu, Isiala Ngwa Diocese, as well as, expanded the Altar of the existing Church to an Ultra-modern one, described as one of the best, so far, in the Diocese.
                            </p>
                    
                        </div>
                        

                 
                     


                    </div>
                    
                    :
                    
                     
                <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6 mb-4">
                    <img src={Igwe} style={!isMobile ? {width:"530px"} : {width:"384px"}}/>
                    {/* <h3 className="monte mt-4">
                        Hon. Philip Igwe Okey
                    </h3> */}
                </div>
                 
                <div className="col-sm-12 col-lg-6">
                
                {/* Member Representing 
Umunneochi State Constituency
Abia State House of Assembly  */}
<p style={{ fontSize: "14px" }} className="mb-4">
                            <span className="monte" style={{fontWeight:"bold"}}>Barr. Phillip Okey Igwe</span>,
                            Is Currently a Member Representing Umunneochi State Constituency Abia State House of Assembly.
                            </p>
                    <p className="monte">Early Life And Education</p>
                    <p style={{ fontSize: "14px" }}>
                    Barr. Phillip Okey Igwe was born of very noble parentage to the late Elder Joseph Igwe & Ezinne Oyiridiya Roselyn Igwe of Umuogele in Amuda Isuochi, Umunneochi LGA of Abia State.
Okey is the fourth son in a family of five boys and two girls. Born and bred in his hometown of Isuochi, he started his early education by attending Isuochi Central School where he obtained his (FSLC) in flying colors. He attended Commercial school to acquire vocational skills for a couple of years in Owerri before taking the entrance exam to secondary education (this was largely due to hardship occasioned by his father’s recent passing at the time). After a brief stay at Isuochi Secondary School where he spent two years, he subsequently completed his secondary education at the prestigious Dennis Memorial Grammar School (DMGS) Onitsha for his (WAEC/SSCE). He gained admission to study pharmacy at the renowned University of Ibadan (U.I.) where he spent two years. The prolonged ASUU strike around the late 1990s period did not allow him finish at UI. 

                    </p>




                    <p style={{ fontSize: "14px" }}>
                    In the year 2000, Okey's desire for knowledge took him outside the shores of this country and to the United States.  He attended Chapman University, Orange County, in California, U.S.A. for a Bachelors (BA) Degree in Criminal Justice in 2004.
His intense drive to succeed took him to North Carolina where he obtained his Jurist Doctor (JD) in Law, from the North Carolina Central University School of Law in 2009. He obtained his license to practice law in the state of New York in 2010 and practiced for a while in New York City at the prestigious law firm of Shaw & Associates. Subsequently, he returned home to obtain his BL degree from the Nigerian Law School and Nigerian law license in 2011 and 2012 respectively.

                    </p>







                    <p className="monte">Professional Background</p>
                    <p style={{ fontSize: "14px" }}>
                    He is a veteran of US Military having served four years of active duty in the United States Air Force during the Iraq combat years and in the years immediately after the September 11, 2001 terrorist attacks in New York. 
He was called to the New York State Bar in 2010 and is a member of the American Bar Association; New York Bar Association, & American Immigration Lawyers Association.
                    </p>


                    <p style={{ fontSize: "14px" }} className="mb-4">
                    He came back to Nigeria in 2011 to attend the Nigerian Law School, Abuja, where he distinguished himself, for his Bachelor of Laws (BL) qualification to be called equally to the Nigerian Bar, and is a very outspoken member of the Nigerian Bar Association, based in Lagos.
He founded and is the Principal Partner of Lagem Firma & Partners, an internationally reputable firm of highly respectable and seasoned attorneys.
He was the Executive Director of Chrisnak Group including the trail-blazing Mainland Oil & Gas of International repute. He founded and was the pioneer publisher/CEO of The Oracle Today Newspapers Ltd.
                    </p>







                    <p className="monte">Politics & Public Service</p>
                    <p style={{ fontSize: "14px" }}>
                    Buoyed by a strong desire to render public service, In 2016, he contested and was elected the Executive Chairman of Umunneochi LGA where he carved out a niche for himself in local administration by delivering critical local infrastructures to the people, especially the restoration of electricity to the local government after decades without electricity. At the end of his tenure as executive chairman, his good works spoke loudly as he was overwhelmingly elected to the state house of assembly in a hotly contested election where he unseated a formidable incumbent and other strong contenders. In the House of Assembly, he is distinguishably one of the leading voices of the Seventh Abia House of Assembly. His landmark bill (HAB-12) aimed at liberalizing the power sector and establishing an energy policy for Abia State is at Committee of the Whole and due for final passage soon. Hon. Okey has also focused on road rehabilitation, energizing local communities, attracting laudable projects, indigent widows’ direct cash  empowerment and getting young constituents employed among other remarkable achievements in his three years in office so far. 
                    </p>


                    <p className="monte">Personal & Christian Life</p>
                    <p style={{ fontSize: "14px" }}>
                    Barr. Okey Igwe is 49 years old, happily married to Mrs. Kimberly Igwe (nee Simpson). The couple is blessed with two lovely boys and a beautiful daughter.His brothers include the philanthropist, Chief Chris O. Igwe a.k.a Chrisnak, MD/CEO of Mainland Oil and Gas Ltd. 
                    </p>
                    <p style={{ fontSize: "14px" }} className="mb-4">
                    His parents are original Methodists that later converted to the United Church of Christ (UCC) - he actively attends both churches in Isuochi. In Lagos, he worships at Dominion Faith International Ministry where his elder brother, Pst. Paul Igwe is the presiding pastor. In the United States he worships at both the Brooklyn Tabernacle and Elevation Church - both powerful gospel/music-based Ministries. 
                    </p>




                    <p className="monte">Hobbies & Interest</p>
                    <p style={{ fontSize: "14px" }}>
                    Okey is an avid sports lover - soccer, football, basketball, baseball, tennis. He plays each of this sports especially tennis regularly.  He loves reading and writing and has authored many articles on National issues. He is widely traveled and loves exploring different cultures and foods. Lately, his passion for music has seen him develop into an intermediate level piano player.
                    </p>
                  





             







                   
               
            
                </div>
                

         
             


            </div>
                    
                    
                    }

                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBio);
