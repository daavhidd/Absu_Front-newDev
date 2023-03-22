import { exp } from "prelude-ls";
import React, { Component } from "react";
// import imgs from "../images/download.jpeg";
// import Header from "./Layouts/Header";
// import Footer from "./Layouts/Footer";
// import HeroLogo from "../images/HeroLogo.svg"
import TextField from '@mui/material/TextField';
import Header from '../../layouts/FrontHeader';

// import sanityClient from "../client";
// import { WhisperSpinner } from "react-spinners-kit";
import $ from "jquery";
// import bar1 from "../images/matt3.jpg";
// import lady from "../images/lady1.jpg";
import { enquireScreen } from "enquire-js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Col, InputNumber, Row, Slider, Modal } from 'antd';
import { Header as Hedo} from "antd/lib/layout/layout";
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
class Apply extends Component {
    state = {
        myPosts: [],
    };
    // getData = () => {
    //     sanityClient
    //         .fetch(
    //             `*[_type == "abboutus"]{
    //         title,
    //         body
       
    //     }`
    //         )
    //         .then((data) => {
    //             this.setState({ myPosts: data });
    //             setTimeout(() => {
    //                 $("#preloader").delay(450).fadeOut("slow");
    //             }, 700);
    //             console.log(this.state.myPosts);
    //         })
    //         .catch((err) => console.log(err));
    // };
    componentDidMount() {
        window.scroll(0, 0);
        // this.getData();
        enquireScreen((b) => {
            this.setState({
                isMobile: b,
            });
        });
    }
     onChange = (e) => {
         console.log(e)
         this.setState({
             newValue:e
         })
        // setInputValue(newValue);
      };
      handleModal = () => {
          this.setState({
              modalShow: !this.state.modalShow
          })
      }
    render() {
        require("antd/dist/antd.css");
        return (
            <main className="main-content">
                <Hedo>
                {/* <h2 className="entry-title prompt-t monte text-center text-white mt-5" style={this.state.isMobile ? { fontSize: "20px" } : { fontSize: "25px" }}>
                            Uche Ndi Abia 2023
                        </h2> */}
                </Hedo>
                <Header/>
                 <Modal title="System Information" visible={this.state.modalShow} onOk={this.handleModal} onCancel={this.handleModal}>
        <p>Your request was not processed! Kidnly try after some minutes</p>
    
      </Modal>
                {/* <div id="preloader">
                    <div id="status">
                        <WhisperSpinner color="white" backColor="#FFF" frontColor="#FFF" size={60} />
                    </div>
                </div> */}
                {/* <Header /> */}
                <div className="fullwidth-block content">
                {/* <h2 className="entry-title prompt-t monte text-center" style={this.state.isMobile ? { fontSize: "20px" } : { fontSize: "25px" }}>
                            Uche Ndi Abia 2023
                        </h2> */}
                    <div className="container" style={{marginTop:"10em"}}>
                        {/* <h2 className="entry-title prompt-t">{this.state.myPosts[0]?.title}</h2> */}
                        <h2 className="entry-title prompt-t monte text-cente mb-5r" style={this.state.isMobile ? { fontSize: "17px" } : { fontSize: "20px" } }>
                            Registration Form
                        </h2>
                        
                        <div className="container">
                        <div>
        <TextField
        //   required
          id="standard-required"
          label="Firstname"
          fullWidth  sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}
        //   defaultValue="Hello World"
          variant="standard"
        />

        <TextField
        //   required
          id="standard-required"
          label="Lastname"
          fullWidth 
          sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}
        //   defaultValue="Hello World"
          variant="standard"
        />
       
        
      </div>

      <div>
        <TextField
        //   required
          id="standard-required"
          label="Email address"
          fullWidth  sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}
        //   defaultValue="Hello World"
          variant="standard"
        />

        <TextField
        //   required
          id="standard-required"
          label="Phone number"
          fullWidth 
          sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}
        //   defaultValue="Hello World"
          variant="standard"
        />
       
        
      </div>

      <div>
        <TextField
        //   required
          id="standard-required"
          label="Permanent home address"
          fullWidth 
          sx={!this.state.isMobile ? { m: 1, width: '100ch'} :{ m: 1 }}
        //   defaultValue="Hello World"
          variant="standard"
        />

      
       
        
      </div>
      <div style={{marginTop:"30px"}}>
      <FormControl fullWidth sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Gender"
        //   onChange={handleChange}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="date"
        label="Date of birth"
        type="date"
        // defaultValue="2017-05-24"
        sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    {/* </Box> */}

    <FormControl fullWidth sx={!this.state.isMobile ? { m: 1, width: '50ch' } :{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">Highest Educational Qualification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Highest Educational Qualification"
        //   onChange={handleChange}
        >
          <MenuItem value={"Fist school leaving cert."}>Fist school leaving cert.</MenuItem>
          <MenuItem value={"SSCE"}>SSCE</MenuItem>
          <MenuItem value={"OND"}>OND</MenuItem>
          <MenuItem value={"HND"}>HND</MenuItem>
          <MenuItem value={"University Degree"}>University Degree</MenuItem>

        </Select>
      </FormControl>
      </div>
      <div>
          <p style={{color:"#000", marginTop:"20px"}}>Computer Proficiency (1 - 10) </p>
          <span className="text-success" style={{fontSize:"12px"}}>use the slider to indicate your proficiency level</span>
      <Row style={{marginTop:"25px"}}>
      <Col span={12}>
        <Slider
          min={1}
          max={10}
          onChange={(e) => this.onChange(e)}
          //value={typeof this.state.newValue === 'number' ? this.state.newValue : 0}
        />
      </Col>

      <Col span={4}>
          
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
        value={this.state.newValue}
        disabled
        //   onChange={onChange}
        />
      </Col>
    </Row>
      </div>

      <div>
          <button onClick={this.handleModal} className="btn btn-primary" style={{background:"#0d0d38", color:"#fff", width:"100%", height:"62px", marginTop:"20px"}}>
                Submit
          </button>
      </div>
                        </div>

                        {/* <div className="team">
            <figure className="team-image"><img src={imgs} alt="person-1" /></figure>
            <h3 className="team-name">Matthew Onojighofia Omonade</h3>
            <small className="team-desc">SAN</small>
            <p>Matthew Omonade & Associates is the Coast’s team of allied professionals offering you peace-of-mind and confidence through our legal services.</p>
          </div>
          <div className="team">
            <figure className="team-image"><img src={imgs} alt="person-2" /></figure>
            <h3 className="team-name">Bar. Aghogho Philip</h3>
            <small className="team-desc">SAN</small>
            <p>Matthew Omonade & Associates is the Coast’s team of allied professionals offering you peace-of-mind and confidence through our legal services.</p>
          </div>
          <div className="team">
            <figure className="team-image"><img src={imgs} alt="person-3" /></figure>
            <h3 className="team-name">Miguel Omonade</h3>
            <small className="team-desc">SAN</small>
            <p>Matthew Omonade & Associates is the Coast’s team of allied professionals offering you peace-of-mind and confidence through our legal services.</p>
          </div>
          <div className="team">
            <figure className="team-image"><img src={imgs} alt="person-4" /></figure>
            <h3 className="team-name">Bar. Meghan O.M</h3>
            <small className="team-desc">SAN</small>
            <p>Matthew Omonade & Associates is the Coast’s team of allied professionals offering you peace-of-mind and confidence through our legal services.,</p>
          </div> */}
                    </div>
                </div>
                {/* <Footer /> */}
            </main>
        );
    }
}

export default Apply;
