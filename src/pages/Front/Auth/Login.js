import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, stateKeys } from "../../../redux/actions";
import axios from "axios";
import { Link } from "react-router-dom";
import { handleFormSubmissionError } from "../../../utils/helpers";
import Endpoint from "../../../utils/endpoint";
import { URL, postData } from "../../../utils/config";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { loginUser } from "../../../utils/auth";
import bg from "../../../assets/images/auth2.png";
import * as Unicons from "@iconscout/react-unicons";
import { userLoggedIn } from "../../../utils/auth";
import toast, { Toaster } from "react-hot-toast";
import lgImg from "../../../assets/images/bg_1.jpg";
import $ from "jquery";
import Logo from "../../../assets/images/customLogo.png";
import Spinner from "../Spinner";
import { Input, Button, Col, Row, Select, InputNumber, Modal, message, DatePicker, Upload, AutoComplete, Result, Cascader, Tooltip, Space, Alert, Slider } from "antd";
import { Slide, Fade, AttentionSeeker } from "react-awesome-reveal";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { ThemeProvider } from "react-bootstrap";
import { enquireScreen } from "enquire-js";
import { PulseSpinner } from "react-spinners-kit";
import Header from "../../../layouts/FrontHeader";
import { PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";



const FORGOT_PASSWORD = 'forgot_password'
const OTP_REQUEST = 'otp_request'
const CREATE_NEW_PASSWORD = 'new_password'
const LOGIN = 'login'
let isMobile;

// enquireScreen((b) => {
//     isMobile = b;
// });
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
class Login extends Component {
    state = {
        fileList:[],
        username: "",
        dateOfBirth:"",
        password: "",
        remember_me: false,
        formIncomplete: false,
        loading: false,
        success: false,
        pageLoading: true,
        loginForm: true,
        headText: null,
        headText: "Sign In",
        buttomText: "Carefully fill in details",
        // buttomText:null,
        otpSection: false,
        resetSuccessful: false
    };
    handleDOB = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        const presentYear = 2022;
        var splitDate = value.split("-")
        var ss = presentYear - splitDate[0]
        console.log(value)
        console.log(ss)
        if((presentYear - splitDate[0]) > 30){
            alert("Currently recruiting for applicants below the age of 30years")
            this.setState({
                dateOfBirth:null
            })
            $("#txtDate").val("")
            $("#apply_btn").fadeOut()
        }
        else{
            $("#apply_btn").fadeIn()

        }
        this.setState({
            [name]: value,
        });
    };
    handleInput = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };
    onChange = (e) => {
        console.log(e)
        this.setState({
            newValue: e
        })
        // setInputValue(newValue);
    };
    loadDataError = (error) =>
        toast.error(error, {
            style: {
                border: "1px solid #DC2626",
                padding: "16px",
                background: "#DC2626",
                color: "#fff",
                borderRadius: "3rem",
            },
            iconTheme: {
                primary: "#FFFAEE",
                secondary: "#DC2626",
            },
        });

    InitiateForgotPassword = (e) => {
        e.preventDefault();

        if (!this.state.email) {
            this.setState({ error: true, loading: false });
            this.loadDataError("Please enter an email address")
            return;
        }
        this.setState({ loading: true, success: false, error: false });
        $("#reset_password").attr('disabled', true)


        Endpoint.resetPassword(this.state.email)
            .then((res) => {
                console.log(res, "result11");
                if (res.status === 200) {
                    console.log(res, "result");
                    this.setState({ otpSection: true, forgotPassword: false, loginForm: false, loading: false, buttomText: null });
                    //$("#reset_password").attr('disabled', true)

                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loading: false });

                // this.loadDataError(error.message);
            });

        return false;
    };

    handleRegister = (e) => {
        e.preventDefault();
        if(this.state.firstname == null || this.state.surname == null || this.state.lga == null){
            alert("required fields cannot be left empty")
            return;
        }
        if(this.state.fileList == null || this.state.fileList.length <= 0){
            alert("Upload passport to continue")
            return;
        }
        if(this.state.facebook != null || this.state.twitter != null || this.state.instagram != null){
            // if(!this.state.facebook.includes("facebook.com/") || !this.state.twitter.includes("twitter.com/") != null || !this.state.instagram.includes("instagram.com/"))
            // {
            //     alert("A social media handle entered is valid")
            //     return
            // }
        }
        else{
            alert("Enter atleast one social media handle to continue")
                return
        }
        $("#preloader").fadeIn()

        let formData = new FormData;
		formData.append("firstName", this.state.firstname + " " + this.state.othername != null ? this.state.othername : "",);
		formData.append("lastName", this.state.surname);
		formData.append("email", this.state.email);
		formData.append("phoneNumber", this.state.phone);
		formData.append("gender", this.state.gender);
		formData.append("address", this.state.address);
		formData.append("dateOfBirth", this.state.dateOfBirth);
		formData.append("higestQualification", this.state.highestqual);
		formData.append("isComputerLiterate", this.state.newValue !=null ? this.state.newValue.toString() : "-");
		formData.append("lga", this.state.lga);
		formData.append("formType", "RECRUITMENT");
		formData.append("hasPvc", this.state.hasPvc);
		formData.append("PassportUrl", this.state.fileList[0].originFileObj);
		formData.append("Twitter", this.state.twitter);
		formData.append("Facebook", this.state.facebook);
		formData.append("Instagram", this.state.instagram);
		formData.append("wingtype", "null");
		formData.append("wing", "null");

        
        // const regProps = {
        //     "firstName": this.state.firstname + " " + this.state.othername != null ? this.state.othername : "",
        //     "lastName": this.state.surname,
        //     "email": this.state.email,
        //     "phoneNumber": this.state.phone,
        //     "gender": this.state.gender,
        //     "address": this.state.address,
        //     "dateOfBirth": this.state.dateOfBirth,
        //     "higestQualification": this.state.highestqual,
        //     "isComputerLiterate": this.state.newValue.toString(),
        //     "lga": this.state.lga,
        //     "formType": "RECRUITMENT",
        //     hasPvc: this.state.hasPvc
        //   }

        Endpoint.registerUser(formData)
            .then((res) => {
               console.log(res)
               if(res.data == true){
                this.setState({
                    successShow:true
                })
                     $("#preloader").fadeOut()
               }
               else{
                alert("A user with the entered email and phone number already exists")
                     $("#preloader").fadeOut()
               }
               

            })
            .catch((error) => {
        $("#preloader").fadeOut()

                this.loadDataError("Oops, something went wrong")
                this.setState({ loading: false })
            });

        return false;
    };
    clearInputFields() {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        this.setState({ pageLoading: false });
    }
    fetchLgas = () => {
        Endpoint.getAllLgas((res) => {
            console.log(res, "LGAS")
            this.setState({
                allLgas: res
            })
        })
        .catch((err) => {
            console.log(err, "error")
        })
    }
    handleModal = () => {
        this.setState({
            successShow: !this.state.successShow
        })
    }

    handleSuccessModal = () => {
        $("#preloader").fadeIn()
        this.setState({
            successShow: !this.state.successShow
        })
        setTimeout(() => {
            window.location.href = "/recruitment"
        }, 1000);
    }
    

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: b
            })
        });
    
        setTimeout(() => {
            this.setState({ pageLoading: false });
            $("#preloader").fadeOut()
            console.log(this.state.isMobile)
        this.fetchLgas();


    //     var dtToday = new Date();
    
    // var month = dtToday.getMonth() + 1;
    // var day = dtToday.getDate();
    // var year = dtToday.getFullYear();
    // if(month < 10)
    //     month = '0' + month.toString();
    // if(day < 10)
    //     day = '0' + day.toString();
    
    //var maxDate = year + '-' + month + '-' + day;
    // var maxDate = "1992-01-01";
    // alert(maxDate);
    // $('#txtDate').attr('min', maxDate);
            // this.clearInputFields();
        }, 2000);
        // window.addventListener('focus', setClear(true));

        this.props.setState("login", stateKeys.PAGE_CLASS);

        if (localStorage.getItem("user") && localStorage.getItem("token")) {
            let user = JSON.parse(localStorage.getItem("user"));
            let token = localStorage.getItem("token");
            console.log(user);

            // if (user.userId) {
            //     this.setState({ pageLoading: true });

            //     loginUser(token, user, true);

            // }
        }
    }

    beforeUpload = (file) => {
        const isJpgOrPng = true;
        // const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "doc/pdf" || file.type === "doc/docx";
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
    validateFacebook = (e) => {
        var target = e.target.value;
        this.setState({
            facebook:e.target.value
        })
        if(!target.includes("facebook.com/")){
            console.log("fail")
            $("#faceboolval").fadeIn()
        }
        else{
            $("#faceboolval").fadeOut()
        }
        console.log(this.state.facebook)

    }

    validateTwitter = (e) => {
        var target = e.target.value;
        this.setState({
            twitter:e.target.value
        })
        if(!target.includes("twitter.com/")){
            console.log("fail")
            $("#twitterval").fadeIn()
        }
        else{
            $("#twitterval").fadeOut()
        }
        console.log(this.state.facebook)

    }

    validateInstagram = (e) => {
        var target = e.target.value;
        this.setState({
            instagram:e.target.value
        })
        if(!target.includes("instagram.com/")){
            console.log("fail")
            $("#instagramval").fadeIn()
        }
        else{
            $("#instagramval").fadeOut()
        }
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList });
        setTimeout(() => {
            console.log(this.state.fileList);
        }, 2000);
    };
    dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
    render() {
        require("../../../assets/css/login.css");
        require("antd/dist/antd.css");
        const { previewVisible, previewImage, fileList, previewTitle, isMobile } = this.state;
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8, fontSize:"10px" }}>Upload Passport</div>
            </div>
          );
        return (
            <>
                 {/* <Modal title="Success" visible={this.state.successShow} onOk={this.handleSuccessModal} onCancel={this.handleModal}>
        <p>Your details were submitted successfully!</p>
    
      </Modal> */}
     <center style={{marginTop:"10em"}}>
     {this.state.headText ? <center>
                        <img src={Logo} style={{ height: "100px" }} />
                        <br />
                        <br />
                       
                        <br />
                        <br />
                    </center> : null}
        <h2 style={{fontSize:"30px"}}>Registration has closed!</h2>
     </center>

            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
