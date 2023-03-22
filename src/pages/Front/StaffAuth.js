import "../../assets/css/staffForm.css"
import { enquireScreen } from "enquire-js";
import $ from "jquery"
import Endpoint from "../../utils/endpoint";
import React, { useState, useEffect } from "react"
import { PulseSpinner } from "react-spinners-kit";
import { Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import {jsonLgas} from "../../utils/lgaforjson";
import {wardArr} from "../../utils/wardjson";
import {pollingArr} from "../../utils/pollingforjson";


let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
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

export default function StaffAuth() {
    const [codenumber, setcodenumber] = useState("")
    const handleCodeNumber = (event) => {
        const target = event.target.value;
        setcodenumber(target)
    };

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phoneNumber, setphone] = useState("")
    const [ward, setward] = useState("")
    const [pollingunit, setpollingunit] = useState("")
    const [pollingList, setpollinList] = useState([])
    const [_id, setId] = useState("")
    const [lga, setlga] = useState("")
    // const [codenumber, setcodenumber] = useState("")
    const [fileList, setFileList] = useState([])
    const [wardList, setWardList] = useState([])
    const [loading, setLoading] = useState(false)


    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
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
        let target = event.target.value;
        var splitTarget = target.split("|")
        if(splitTarget != null){
            target = splitTarget[0]
            setward(splitTarget[1])
            console.log(splitTarget[0], splitTarget[1])
            var filter = pollingArr.filter(x => x.wardCode == target)
            setpollinList(filter)
            console.log(filter)
        }
        
    };
    // const handleCodeNumber = (event) => {
    //     const target = event.target.value;
    //     setcodenumber(target)
    // };
    const closeCard = () => {
        setlastname("")
        setfirstname("")
        $("#recruitment__pop").fadeOut();
        window.location.reload(true)
    }
    const handleLGA = (event) => {
        console.log(event)

        let target = event.target.value;
        var splitTarget = target.split("|")
        if(splitTarget != null){
            target = splitTarget[0]
            setlga(splitTarget[1])
            console.log(splitTarget[0], splitTarget[1])
            // var filter = pollingArr.filter(x => x.wardCode == target)
            var filter = wardArr.filter(x => x.lGAId == target)
            setWardList(filter)
            console.log(filter)
        }




        // console.log(target)
        // var filter = wardArr.filter(x => x.lGAId == target)
        // setWardList(filter)

    };
    const handleChange = ({ fileList }) => {
        setFileList(fileList);
        setTimeout(() => {
            console.log(fileList);
        }, 2000);
    };
    const handleFormEdit = (e) => {
        e.preventDefault();
        
        if(codenumber == null || codenumber == ""){
            alert("Enter code number")
            return
        }
        console.log(codenumber)
        $("#preloader").fadeIn()
        var formData = new FormData()
        formData.append('_id', _id)
        formData.append('Name', firstname)
        formData.append('Lga', lga)
        formData.append('Polling_Unit', pollingunit)
        formData.append('Ward', ward)
        formData.append('Code_Number', codenumber)
        formData.append('PhoneNumber', phoneNumber)
        formData.append('Passport', fileList[0].originFileObj)
        
        Endpoint.postEditStaff(formData)
            .then((res) => {
                console.log(res)
                if(res.data == null || res?.data ==""){
                    alert("Code number not found!")
                    $("#preloader").fadeOut()
                    return;
                }
                alert("Saved and submitted successfully!")
                window.location.href = "/"

                setfirstname(res?.data.name)
                setphone(res?.data?.phoneNumber)
            $("#preloader").fadeOut()
            $("#recruitment__pop").fadeIn()
            $("#code_auth").hide()
            $("#edit_form").fadeIn()
            })
            .catch((err) => {
                console.log(err)
                $("#preloader").fadeOut()
            })

    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if(codenumber == null || codenumber == ""){
            alert("Enter code number")
            return
        }
        console.log(codenumber)
        $("#preloader").fadeIn()

        Endpoint.postCodeNumber(codenumber)
            .then((res) => {
                console.log(res)
                if(res.data == null || res?.data ==""){
                    alert("Code number not found!")
                    $("#preloader").fadeOut()
                    return;
                }
                setfirstname(res?.data.name)
                setphone(res?.data?.phoneNumber)
                setId(res?.data?._id)
                setcodenumber(res?.data?.code_Number)
            $("#preloader").fadeOut()
            $("#recruitment__pop").fadeIn()
            $("#code_auth").hide()
            $("#edit_form").fadeIn()

            

            })
            .catch((err) => {
                console.log(err)
                $("#preloader").fadeOut()
            })

    }
  return (
    <div>
            <div id="preloader" style={{display:"none"}}>
                <div id="status">
                    <center>
                        <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />

                    </center>
                </div>
            </div>
        <div style={!isMobile ? {marginTop:"12vh"} : {marginTop:"12vh"}} className='pt-4' id="code_auth">
            <form style={{}} onSubmit={(e) => handleSubmitForm(e)}>
                <section className="" style={{marginLeft:"auto", marginRight:"auto", paddingBottom:'81px'}}>
                    <center>
                        <h2 className='monte text-white' style={!isMobile ? {fontSize:"27px"} : null}>Staff Authentication</h2>
                        <div className="input-container " style={{marginTop: '10vh'}}>
                            <label className='text-white text-left'>Code Number/Phone Number</label>
                            <input style={{fontSize:"14px"}} name="firstname" onChange={handleCodeNumber} type="text" placeholder='Enter code number or phone number' />
                        </div>
                    </center>
                </section>
                <center>
                    <div className="send-container" style={!isMobile ? {marginTop: '-30px'} : {marginTop: '-18px'}}>
                        <input type={'submit'} style={!isMobile ? {background: "#6f0303", marginTop: "30px", fontSize: "14px", width:"46%"} : { background: "#6f0303", marginTop: "30px", fontSize: "14px" }} value='Authenticate' />
                    </div>
                </center>
            </form>
           

        </div>
      




        <div style={{display:"none"}} id="edit_form">
            {/* <h2>{firstname}</h2> */}
          <div style={{ background: "9de0a3" }} className="pt-4 ">
                <h2 className="monte" style={{ fontSize: "18px", fontWeight: "500" }}>Uche Ndi Abia <br /> Staff Identity Card Form</h2>
                <form onSubmit={(e) => handleFormEdit(e)}>

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
                            <label >Full Name</label>
                            <input name="firstname" defaultValue={firstname} required onChange={handleFirstNameInput} type="text" />
                        </div>
                        {/* <div className="input-container">
                            <label>Last Name</label>
                            <input required onChange={handleLastName} name="lastname" type="text" />
                        </div> */}
                        <div className="input-container">
                            <label>LGA</label>
                            {/* <input required onChange={handleLGA} name="lastname" type="text" /> */}
                            <select className="input-container" style={{width:"100%"}} onChange={(e) => handleLGA(e)}>
                                <option >Select LGA</option>
                                {jsonLgas && jsonLgas.map((x) => {
                                    return(
                                        <option value={x.id + "|" + x.lgaName}>{x.lgaName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="input-container">
                            <label name="">Ward</label>
                            <select className="input-container" required style={{width:"100%"}} onChange={(e) => handleWard(e)}>
                                <option >Select Ward</option>
                                {wardList && wardList.map((x) => {
                                    return(
                                        <option value={x.wardCode + "|" + x.wardName}>{x.wardName}</option>
                                    )
                                })}
                            </select>
                            {/* <input required onChange={handleWard} name="ward" type="text" /> */}
                        </div>
                        <div className="input-container">
                            <label name="">Polling Unit</label>
                            <select className="input-container" required style={{width:"100%"}} onChange={(e) => handlePollingUnit(e)}>
                                <option >Select Polling Unit</option>
                                {pollingList && pollingList.map((x) => {
                                    return(
                                        <option value={x.pollingUnitName}>{x.pollingUnitName}</option>
                                    )
                                })}
                            </select>
                            {/* <input required onChange={handleWard} name="ward" type="text" /> */}
                        </div>
                     
                        <div className="input-container">
                            {/* <label name="code_number">Staff Code Number</label> */}
                            <label name="code_number">Phone Number</label>
                            <input required defaultValue={phoneNumber} onChange={handleCodeNumber} type="text" name="code_number" />
                        </div>
                        <div className="input-container ">
                            <label className='text-white text-left'>Code Number</label>
                            <input name="firstname" value={codenumber}  onChange={handleCodeNumber} type="text" placeholder='example: QWERT1234' />
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
          
        </div>



    </div>
  )
}

