import React, { useState, useEffect } from "react"
import "../../assets/css/staffForm.css"
import { Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import Endpoint from "../../utils/endpoint";
import { PulseSpinner } from "react-spinners-kit";
import $ from "jquery"
import { enquireScreen } from "enquire-js";

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

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const StaffIdentityCard = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [ward, setward] = useState("")
    const [pollingunit, setpollingunit] = useState("")
    const [lga, setlga] = useState("")
    const [codenumber, setcodenumber] = useState("")
    const [fileList, setFileList] = useState([])
    const [loading, setLoading] = useState(false)

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

        return isJpgOrPng && isLt2M;
    };
    const handleFirstNameInput = (event) => {
        const target = event.target.value;
        setfirstname(target)
    };
    const handleLastName = (event) => {
        const target = event.target.value;
        setlastname(target)
    };
    const handlePollingUnit = (event) => {
        const target = event.target.value;
        setpollingunit(target)
    };
    const handleWard = (event) => {
        const target = event.target.value;
        setward(target)
    };
    const handleCodeNumber = (event) => {
        const target = event.target.value;
        setcodenumber(target)
    };
    const handleLGA = (event) => {
        console.log(event)

        const target = event.target.value;
        console.log(target)
        setlga(target)

    };
    const handleChange = ({ fileList }) => {
        setFileList(fileList);
        setTimeout(() => {
            console.log(fileList);
        }, 2000);
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (fileList == null || fileList.length <= 0) {
            alert("Upload passport to continue")
            return;
        }
        $("#preloader").fadeIn()

        let formData = new FormData;
        formData.append("Name", lastname + " " + firstname);
        formData.append("LGA", lga);
        formData.append("Polling_Unit", pollingunit);
        formData.append("Ward", ward);
        formData.append("Code_Number", codenumber);
        formData.append("Passport", fileList[0].originFileObj);

        Endpoint.postStaffDetails(formData)
            .then((res) => {
                console.log(res)
            $("#preloader").fadeOut()
            $("#recruitment__pop").fadeIn()

            })
            .catch((err) => {
                console.log(err)
                $("#preloader").fadeOut()
            })

    }
    const closeCard = () => {
        setlastname("")
        setfirstname("")
        $("#recruitment__pop").fadeOut();
        window.location.reload(true)
    }
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
    useEffect(() => {

    }, []);
    return (
        <>
            {/* <h2>{firstname}</h2> */}
          <div style={{ background: "9de0a3" }} className="pt-4 ">
                <h2 className="monte" style={{ fontSize: "18px", fontWeight: "500" }}>Uche Ndi Abia <br /> Staff Identity Card Form</h2>
                <form onSubmit={(e) => handleSubmitForm(e)}>

                    <section className="" style={{marginLeft:"auto", marginRight:"auto"}}>
                        <center>
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                // onPreview={handlePreview}
                                onChange={handleChange}
                                customRequest={dummyRequest}
                                beforeUpload={beforeUpload}
                                maxCount={1}
                                accept=".png,.jpg,.jpeg"
                            >
                                {fileList?.length >= 1 ? null :
                                    <div style={{ color: "#fff" }}>
                                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                        <div style={{ marginTop: 8, fontSize: "10px" }}>Upload Passport</div>
                                    </div>}

                            </Upload>
                        </center>
                        <div className="input-container">
                            <label >First Name</label>
                            <input name="firstname" required onChange={handleFirstNameInput} type="text" />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input required onChange={handleLastName} name="lastname" type="text" />
                        </div>
                        <div className="input-container">
                            <label>LGA</label>
                            {/* <input required onChange={handleLGA} name="lastname" type="text" /> */}
                            <select className="input-container" style={{width:"100%"}} onChange={(e) => handleLGA(e)}>
                                <option >Select LGA</option>
                                {allLgas && allLgas.map((x) => {
                                    return(
                                        <option value={x}>{x}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="input-container">
                            <label  >Polling Unit</label>
                            <input required onChange={handlePollingUnit} name="polling_unit" type="text" />
                        </div>
                        <div className="input-container">
                            <label name="">Ward</label>
                            <input required onChange={handleWard} name="ward" type="text" />
                        </div>
                        <div className="input-container">
                            {/* <label name="code_number">Staff Code Number</label> */}
                            <label name="code_number">Phone Number</label>
                            <input required onChange={handleCodeNumber} type="text" name="code_number" />
                        </div>
                    </section>

                   <center> <div className="send-container mt-4">
                        <input style={{ background: "#6f0303", marginTop: "30px", fontSize: "14px" }} type="submit" defaultValue="Submit" />
                    </div>
                    </center>

                </form>
            </div>
            <div id="preloader" style={{display:"none"}}>
                <div id="status">
                    <center>
                        <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />

                    </center>
                </div>
            </div>
            <div id="recruitment__pop"
                style={{ display: "none" }}
            >
                <div id="status row container" style={{ marginTop: "5em" }}>

                    <center className="col-sm-12 text-white">
                        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", minHeight: "25vh", paddingBottom: "0px", paddingTop: "20px", width: "92%" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px", width: "30%" }}>
                            <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "7em", paddingRight: "7em" } : null}>
                                <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={{ fontSize: "15px", color: "#fff" }}>
                                        Successfully Submitted!
                                    </h2>

                                    <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "13px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                                        <br />
                                        <br />
                                        {!isMobile ?
                                            <>
                                                <br />
                                            </>
                                            : null
                                        }
                                        {/* <div className="text-center"
                                        > */}

                                          
                                               <center>
                                               <button onClick={closeCard} type="button" className="btn btn-outline-primary" style={{
                                                    width: "50%", fontSize: "13px", marginTop: "0em"
                                                }}>Ok </button>
                                               </center>
                                            
                                            {/* <p onClick={closeCard} style={{ fontSize: "12px", marginTop: "45px", cursor: "pointer" }}>Close and continue to website</p> */}

                                        {/* </div> */}



                                    </p>

                                </div>
                            </div>

                        </div>
                        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

                    </center>
                </div>
            </div>
        </>
    )
}

export default StaffIdentityCard;