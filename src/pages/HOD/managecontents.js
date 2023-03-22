import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps, stateKeys} from "../../redux/actions";
import illustration from "../../assets/images/illus.png"
import * as Unicons from '@iconscout/react-unicons';
import Endpoint from "../../utils/endpoint";
import toast, {Toaster} from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
// import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Modal, Avatar, Col, Divider, Drawer, List, Row, message, Upload} from "antd"
import {MDBDataTableV5} from "mdbreact";
import $, { data } from "jquery"
import Spinner from "../Front/Spinner"
import { PulseSpinner } from "react-spinners-kit";
import { enquireScreen } from "enquire-js";
import {Link} from "react-router-dom";
import { PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import {Editor, EditorState} from 'draft-js';
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { BoldPlugin, BoldButton } from '@slate-editor/bold-plugin'
import {facList} from "../../utils/dbstore"
import axios from "axios"

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const plugins = [BoldPlugin()]
let userArr = []


const styles = {
    editor: {
      border: '1px solid gray',
      minHeight: '6em'
    }
  };
  
const DescriptionItem = ({ title, content }) => (
	<div className="site-description-item-profile-wrapper mb-2">
	  <p className="site-description-item-profile-p-label" style={{fontSize:"13px", fontWeight:"700"}}>{title}:</p>
	  {content}
	</div>
  );
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

const storageFac = JSON.parse(localStorage.getItem(stateKeys.USER));

class ManageContents extends Component {
	state = {
		pageLoading: false,
		allInstructors: [],
		newInstructor: false,
		newInstructorFormIncomplete: false,
		newFirstName: '',
		newLastName: '',
		newOtherName: '',
		newEmail: '',
        facultyArr: facList.ArrayOfFacultyDTO.FacultyDTO,
        userPayload: JSON.parse(localStorage.getItem(stateKeys.USER)),
        dataPass: this.props?.location?.state?.dataPass
	};
	handleInput = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };
	 showDrawer = () => {
		this.setState({
		showDraw:true	
		})
	  };
	
	   onClose = () => {
		this.setState({
			showDraw:false	
			})
	  };

	closePop = () => {
$("#recruitment__pop").fadeOut()

	}
	newInstructorSuccess = () => toast.success("Instructor added successfully", {
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
	
	loadDataError = (error) => toast.error(error, {
		style: {
			border: '1px solid #DC2626',
			padding: '16px',
			background: '#DC2626',
			color: '#fff',
			borderRadius: '3rem',
		},
		iconTheme: {
			primary: '#FFFAEE',
			secondary: '#DC2626',
		},
	});
	closeYouthWing = () => {
        $("#recruitment__pop").fadeOut()
        this.setState({submissionType:null})

    }
	toggleNewInstructor = () => {
		this.setState({newInstructor: !this.state.newInstructor})
	};
	
     handleChange = ({ fileList }) => {
        this.setState({ fileList });
        setTimeout(() => {
            console.log(fileList);
        }, 2000);
    };
     dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
    beforeUpload = (file) => {
        const isJpgOrPng = true;
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        console.log(file, "file before");
        setTimeout(() => {
        }, 1500);

        return isJpgOrPng && isLt2M;
    };
 
    handleSaveNews = (e) => {
        e.preventDefault()
    
        $("#preloader").fadeIn()
		const username  = "miracle.godspeed"
        const password  = "abia@2022webd"
        const payload = {
            staffname: this.state.staffname,
            content: this.state.editorValue,
            category :this.state.facultyId
        }

        const url =
          "https://c4-na.altogic.com/e:6373addaea9f94c58832bfbe/ContentPosts";
        axios.post(url, payload)
        .then(res => {
          
          console.log(res.data, "resss")
          $("#preloader").fadeOut()
          alert("Saved!")
          window.location.reload(true)
        //   this.setState({ games: data.items.item });
        });

        return;
        const headers = new Headers();
        headers.set("Content-Type", "application/json")
        headers.set("Authorization", "Basic " + Buffer.from(`${username}:${password}`).toString("base64"))
        fetch("https://abiastateuniversity.edu.ng/wp-json/wp/v2/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then((res) => {
            console.log(res.json())
        })
        .catch(err => {
            console.log(err.json())
        })
        Endpoint.createPost(payload)
            .then((res) => {
                console.log(res)
                alert("Content saved and uploaded!")
                $("#preloader").fadeOut()
            })
            .catch((error) => {
                $("#preloader").fadeOut()
                alert("Oops, something went wrong")
                this.setState({ loading: false })
            });
    }
	componentDidMount() {
        $("#preloader").fadeOut();
        console.log(this.state.dataPass)
		enquireScreen((b) => {
            this.setState({
                isMobile: b
            })
        });
        console.log(this.state.facultyArr, "facArr")
        console.log(this.state.userPayload, "usp")
        // const filterFac = this.state.facultyArr.filter(x => x.FacultyId == this.state.userPayload?.FacultyId)
        // console.log(filterFac[0]?.Departments?.DepartmentDTO, "fil")
		//this.loadUsers();

		// this.loadDataFromServer();
	}
	
	handleShowSelectModal = () => {
		this.setState({
			filterOpen:!this.state.filterOpen
		})
	}
    handleAttachment = (e) => {
        console.log(e.target)
        console.log(e)
        console.log(e.target.files[0])
        this.setState({
            newsAttachment: e.target.files[0]
        })
    }
    setEditorValue = (e) => {
        console.log(e)
        this.setState({
            editorValue: e
        })
    }
    createNewPost = (e) => {
        e.preventDefault()
        const payload = {
            "title": this.state.staffname,
            "content": this.state.editorValue,
            "postType": this.state.facultyId
        }

        Endpoint.createPost(payload)
        .then((res) => {
            alert("Post successfully added!")
            window.location.href = "/admin/manageposts"
        })
        .catch((err) => {
            console.log(err)
        })
    }
	render() {
		const {isMobile} = this.state
        const filterFac = this.state.facultyArr.filter(x => x.FacultyId == this.state.userPayload?.FacultyId)
        console.log(filterFac[0]?.Departments?.DepartmentDTO, "fil")
		return (
			<>
		
			

<div id="preloader">
                <div id="status">
                    <center>
                        <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />

                    </center>
                </div>
            </div>
				{this.state.pageLoading ?
					<Spinner
						message={"Just a moment"}
					/>
					: null
				}
				
				<Toaster
					position="top-center"
					reverseOrder={false}
				/>
				<form onSubmit={(e) => this.createNewPost(e)}>
				<div className="container py-5">
					<div className="d-flex flex-wrap justify-content-between">
						<h1 className="mb-3 mr-2 my-auto" style={{fontSize:"16px"}}>
							<Unicons.UilBookAlt size="26" className="mr-2"/>
							Post Management
						</h1>
						
						{/* <button className="btn btn-primary btn-sm" style={{background:"#410d0d"}} onClick={this.handleShowSelectModal}>
							<i className="fa fa-filter"/> Filter
						</button> */}
					</div>
					
					<hr/>
                    {this.state.dataPass == 'news' ?<div className="row justify-content-center">
              <div className="col-sm-12">
                <div className="form-group">
                  {/* <label className="label-control">Select Department</label> */}
                  <select
                    onChange={this.handleInput}
                    name="facultyId"
                    className="form-control"
                    required
                  >
                    <option>Select Post Type</option>
                    <option value={"revision"}>News</option>
                    <option value={""}>Academic Staff Profile</option>
                    {/* {filterFac[0]?.Departments?.DepartmentDTO &&
                      filterFac[0]?.Departments?.DepartmentDTO.map((x) => {
                        return (
                          <option value={x.DepartmentId}>{x.DepartmentName}</option>
                        );
                      })} */}
                  </select>
                </div>
              </div>
            </div> : null}
					{this.state.dataPass != 'news' ? <div className='row justify-content-center'>
                        <div className='col-sm-12'>
                            <div className='form-group'>
                                <label className='label-control'>Staff Name</label>
                                <input required onChange={this.handleInput} name="staffname" type={"text"} className="form-control"/>

                            </div>
                        </div>
                       
                    </div> : <div className='row justify-content-center'>
                        <div className='col-sm-12'>
                            <div className='form-group'>
                                <label className='label-control'>Post Title</label>
                                <input required onChange={this.handleInput} name="staffname" type={"text"} className="form-control"/>

                            </div>
                        </div>
                       
                    </div>}
                    {/* <div className='row justify-content-center'>
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label className='label-control'>Staff Phone Number</label>
                                <input required onChange={this.handleInput} name="staffphone" type={"text"} className="form-control"/>

                            </div>
                        </div>
                       
                    </div> */}
                    {/* <div className='row justify-content-center'>
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label className='label-control'>Staff Qualifications/Achievements</label>
                                <input required onChange={this.handleInput} name="staffqual" type={"text"} className="form-control"/>

                            </div>
                        </div>
                       
                    </div> */}

                    {/* <div className='row justify-content-center'>
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label className='label-control'>Staff Email</label>
                                <input required onChange={this.handleInput} name="staffemail" type={"text"} className="form-control"/>

                            </div>
                        </div>
                       
                    </div> */}
                  
              

            <ReactQuill theme="snow" 
            value={this.state.editorValue} onChange={(e) => this.setEditorValue (e)} required
             />
                    <div className='row justify-content-center mt-5'>
                        <div className='col-sm-5'>
                           <button type='submit' className='btn btn-primary' style={{width:"100%"}}>Save</button>
                        </div>

                    </div>
				</div>
				
				</form>
			
			</>
		
		)
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContents);
