import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps, stateKeys} from "../../redux/actions";
import illustration from "../../assets/images/illus.png"
import * as Unicons from '@iconscout/react-unicons';
import Endpoint from "../../utils/endpoint";
import toast, {Toaster} from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
// import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Modal, Avatar, Col, Divider, Drawer, List, Row} from "antd"
import {MDBDataTableV5} from "mdbreact";
import $, { data } from "jquery"
import Spinner from "../Front/Spinner"
import { PulseSpinner } from "react-spinners-kit";
import { enquireScreen } from "enquire-js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Link} from "react-router-dom";
let userArr = []

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
class ManagePosts extends Component {
	state = {
		pageLoading: false,
		allInstructors: [],
		newInstructor: false,
		newInstructorFormIncomplete: false,
		newFirstName: '',
		newLastName: '',
		newOtherName: '',
		newEmail: '',
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
	
	openNewInstructor = () => {
		this.setState({newInstructor: true})
	};
	
	createInstructor = (e) => {
		e.preventDefault();
		
		if (!this.state.newFirstName || !this.state.newLastName || !this.state.newOtherName || !this.state.newEmail) {
			this.setState({newInstructorFormIncomplete: true});
			
			setTimeout(() => {
				this.setState({newInstructorFormIncomplete: false});
			}, 3000);
			
			return;
		}
		
		this.setState({
			newInstructorLoading: true, success: false, error: false
		});
		
		const InstructorProps = {
			firstname: this.state.newFirstName,
			othername: this.state.newOtherName,
			surname: this.state.newLastName,
			email: this.state.newEmail,
			departmentId: this.state.profile.department.id,
			roleId: 3,
		};
		
		Endpoint.createInstructor(InstructorProps)
			.then((res) => {
				if(res.data.statusCode == 208){
					this.loadDataError(res.data.message)
					this.setState({ newInstructorLoading: false});

					return;
				}
				this.setState({error: false, success: true, newInstructorLoading: false, newInstructor: false, newInstructorTitle: ''});
				
				this.newInstructorSuccess();
				
				setTimeout(() => {
					this.loadDataFromServer()
				}, 2000);
			})
			.catch((error) => {
				this.loadDataError(error, this);
				this.setState({pageLoading: false, newInstructorLoading: false});
			})
	};


    deletePost = (data) => {
        Endpoint.deletePost(data)
        .then((res) => {
            alert('deleted')
            this.fetchAllPost()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    fetchAllPost = () => {
        // Endpoint.getPosts()
        Endpoint.getAllPost()
            .then((res) => {
                console.log(res.data)
                var dataReal = res?.data;
                let mappedData = dataReal.map((x, i) => {
                    if (!x?.firstName?.includes("null")) {
                        return {
                            sNo: i + 1,
                            name: <> <Link to={{
                                pathname: "/newspage",
                                state: { dataPass: x }
                            }}><div style={{fontSize:"14px"}}>{x.post_title}<br />{x.post_date != null ? x.post_date.substring(0, 10) : null}</div></Link></>,
                            email: x.email,
                            actions:
							<div>
								<a className="text-primary"
								style={{background:"", fontSize:"14px"}}
								onClick={() => this.handlePreview(x)}>
									edit
								</a>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <a className="text-danger"
								style={{background:"", fontSize:"14px"}}
								onClick={() => this.deletePost(x.id)}>
									delete
								</a>
							</div>
                            // actions:
                            //     <div>
                            //         <Link to={{
                            //             pathname: "/newspage",
                            //             state: { dataPass: x }
                            //         }}>View more</Link>
                            //     </div>
                        }
                    }
                });
                // userArr = tableData
                let tableData = {
                    columns: [
                        // {
                        //     label: 'S/No',
                        //     field: 'sNo',
                        // },
                        {
                            label: ' ',
                            field: 'name',
                        },
                        {
                            label: ' ',
                            field: 'actions',
                        }
                        // {
                        //     label: ' ',
                        //     field: 'actions',
                        // },
                    ],
                    rows: mappedData,
                };

                this.setState({newsArr: tableData})


            })
            .catch((err) => {
                console.log(err)
            })
    }

loadUsers = () => {
     
		Endpoint.getAllPerson()
			.then((rep) => {
				console.log(rep.data);
				$("#preloader").fadeOut()
				var dataReal = rep?.data;
				let mappedData = dataReal.map((x, i) => {
					if(!x?.firstName?.includes("null")){
						return{
							sNo: i + 1,
							name: x.lastName == null || x.firstName==null ? "-" : x.lastName + " " + x.firstName,
							email: x.email,
							actions:
								<div>
									<button className="btn btn-sm btn-primary"
									style={{background:"#ff4d4f"}}
									onClick={() => this.handlePreview(x)}>
										<i className='fa fa-eye'/>
									</button>
								</div>
						}
					}
				});
				console.log(mappedData, "mapp");
				let tableData = {
					columns: [
						{
							label: 'S/No',
							field: 'sNo',
						},
						{
							label: 'Name',
							field: 'name',
						},
						{
							label: ' ',
							field: 'actions',
						},
					],
					rows: mappedData,
				};
				userArr = tableData
				this.setState({userList: tableData});
				setTimeout(() => {
				   console.log(this.state.userList) 
				}, 2000);
			})
	
}
loadUsersByLGA = (data) => {
	$("#preloader").fadeIn()
	this.setState({userList: []});
	Endpoint.getPersonByLGA(data)
		.then((rep) => {
			console.log(rep.data);
			$("#preloader").fadeOut()
			var dataReal = rep?.data;
			let mappedData = dataReal.map((x, i) => {
				if(!x?.firstName?.includes("null")){
					return{
						sNo: i + 1,
						name: x.lastName == null || x.firstName==null ? "-" : x.lastName + " " + x.firstName,
						email: x.email,
						actions:
							<div>
								<button className="btn btn-sm btn-primary"
								style={{background:"#ff4d4f"}}
								onClick={() => this.handlePreview(x)}>
									<i className='fa fa-eye'/>
								</button>
							</div>
					}
				}
			});
			console.log(mappedData, "mapp");
			let tableData = {
				columns: [
					{
						label: 'S/No',
						field: 'sNo',
					},
					{
						label: 'Name',
						field: 'name',
					},
					{
						label: ' ',
						field: 'actions',
					},
				],
				rows: mappedData,
			};
			userArr = tableData
			this.setState({userList: tableData, filterOpen:false});
			setTimeout(() => {
			   console.log(this.state.userList) 
			}, 2000);
		})

}

loadUsersByFormType = (data) => {
	$("#preloader").fadeIn()
	this.setState({userList: []});
	Endpoint.getPersonByFormType(data)
		.then((rep) => {
			console.log(rep.data);
			$("#preloader").fadeOut()
			var dataReal = rep?.data;
			let mappedData = dataReal.map((x, i) => {
				if(!x?.firstName?.includes("null")){
					return{
						sNo: i + 1,
						name: x.lastName == null || x.firstName==null ? "-" : x.lastName + " " + x.firstName,
						email: x.email,
						actions:
							<div>
								<button className="btn btn-sm btn-primary"
								style={{background:"#ff4d4f"}}
								onClick={() => this.handlePreview(x)}>
									<i className='fa fa-eye'/>
								</button>
							</div>
					}
				}
			});
			console.log(mappedData, "mapp");
			let tableData = {
				columns: [
					{
						label: 'S/No',
						field: 'sNo',
					},
					{
						label: 'Name',
						field: 'name',
					},
					{
						label: ' ',
						field: 'actions',
					},
				],
				rows: mappedData,
			};
			userArr = tableData
			this.setState({userList: tableData, filterOpen:false});
			setTimeout(() => {
			   console.log(this.state.userList) 
			}, 2000);
		})

}

loadUsersByGender = (data) => {
	$("#preloader").fadeIn()
	this.setState({userList: []});
	Endpoint.getPersonByGender(data)
		.then((rep) => {
			console.log(rep.data);
			$("#preloader").fadeOut()
			var dataReal = rep?.data;
			let mappedData = dataReal.map((x, i) => {
				if(!x?.firstName?.includes("null")){
					return{
						sNo: i + 1,
						name: x.lastName == null || x.firstName==null ? "-" : x.lastName + " " + x.firstName,
						email: x.email,
						actions:
							<div>
								<button className="btn btn-sm btn-primary"
								style={{background:"#ff4d4f"}}
								onClick={() => this.handlePreview(x)}>
									<i className='fa fa-eye'/>
								</button>
							</div>
					}
				}
			});
			console.log(mappedData, "mapp");
			let tableData = {
				columns: [
					{
						label: 'S/No',
						field: 'sNo',
					},
					{
						label: 'Name',
						field: 'name',
					},
					{
						label: ' ',
						field: 'actions',
					},
				],
				rows: mappedData,
			};
			userArr = tableData
			this.setState({userList: tableData, filterOpen:false});
			setTimeout(() => {
			   console.log(this.state.userList) 
			}, 2000);
		})

}

loadDataFromServer = (data) => {
	$("#preloader").fadeIn()
	this.setState({userList: []});
	Endpoint.getAllPosts()
		.then((rep) => {
			console.log(rep.data?.result);
			$("#preloader").fadeOut()
			var dataReal = rep?.data?.result;
			let mappedData = dataReal.map((x, i) => {
				if(!x?.firstName?.includes("null")){
					return{
						sNo: i + 1,
						name: x.staffname,
						email: x.email,
						actions:
							<div>
								<button className="btn btn-sm btn-primary"
								style={{background:""}}
								onClick={() => this.handlePreview(x)}>
									<i className='fa fa-eye'/>
								</button>
							</div>
					}
				}
			});
			console.log(mappedData, "mapp");
			let tableData = {
				columns: [
					{
						label: 'S/No',
						field: 'sNo',
					},
					{
						label: 'Name',
						field: 'name',
					},
					{
						label: ' ',
						field: 'actions',
					},
				],
				rows: mappedData,
			};
			userArr = tableData
			this.setState({userList: tableData, filterOpen:false});
			setTimeout(() => {
			   console.log(this.state.userList) 
			}, 2000);
		})

}

	handlePreview = (data) => {
		// $("#recruitment__pop").fadeIn()
				console.log(data)
				this.setState({
					content:data.post_content,
					// viewOppen: !this.state.viewOppen,
					showDraw:true,
					staffname: data.post_title,
					id: data._id,
					// passport: data.passportUrl,
					// email: data.email,
					// lga: data.lga,
					// higestQualification:data.higestQualification,
					// dateOfBirth: data.dateOfBirth,
					// phoneNumber:data.phoneNumber,
					// gender: data.gender,
					// createdDate: data.createdDate,
					// address: data.address,
					// higestQualification: data.higestQualification,
					// hasPvc: data.hasPvc
		
				})
			}
			setEditorValue = (e) => {
				console.log(e)
				this.setState({
					content: e
				})
			}
	componentDidMount() {
		enquireScreen((b) => {
            this.setState({
                isMobile: b
            })
        });
        this.fetchAllPost()
		setTimeout(() => {
			$("#preloader").fadeOut()
		}, 2000);
		//this.loadUsers();

		// this.loadDataFromServer();
	}
	postQueryRequest = () => {
		if(this.state.filtertype == "lga"){
			this.loadUsersByLGA(this.state.lga)
		}
		else if(this.state.filtertype == "formtype"){
			this.loadUsersByFormType(this.state.selectformtype)
		}
		else if(this.state.filtertype == "gender"){
			this.loadUsersByGender(this.state.gender)
		}
		else if(this.state.filtertype == "haspvc"){
			this.loadUsersByPVC(this.state.pvcSelect)
		}
	}
	handleShowSelectModal = () => {
		this.setState({
			filterOpen:!this.state.filterOpen
		})
	}

	postEditContent = (e) => {
		e.preventDefault()
		const payload = {
			content: this.state.content,
			staffname: this.state.staffname
		}
		Endpoint.editPost(this.state.id, payload)
		.then((res) => {
			console.log(res)
			alert("Saved")
			this.loadDataFromServer()
			
		})
		.catch((err) => {
			console.log(err)
		})
	}
	render() {
		const {isMobile} = this.state
		return (
			<>
			<Drawer width={isMobile ? "93vw" : '50vw'} placement="right" closable={true} onClose={this.onClose} visible={this.state.showDraw}>
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
		{this.state.staffname}
        </p>

		<Row>
         
         
        </Row>
       
		<br/>
       
		
       

        <Row>

          <Col span={24}>
       <input className='form-control' onChange={(e) => this.setState({staffname:e.target.value})} defaultValue={this.state.staffname}/>
			  <ReactQuill theme="snow" 
            value={this.state.content} onChange={(e) => this.setEditorValue (e)} required
             />
          </Col>
		  <Divider />

		  <Col span={24}>
       
	   <button onClick={(e) => this.postEditContent(e)} className='btn btn-primary' type='button'><i className='fa fa-save'/>&nbsp; Save</button>
   </Col>
        </Row>
        {/* <p className="site-description-item-profile-p">Company</p> */}
      

        
        {/* <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row> */}
        <Divider />
       
       
      </Drawer>
			   <div id="recruitment__pop"
                style={{ display: "none" }}
            >
                <div id="status row container" style={{ marginTop: "5em" }}>
                    <div className="col-sm-8 text-white container" style={{ textAlign: "right", width: "85%" }}>
                        <i className="fa fa-times" style={{ marginLeft: "-20px" }} onClick={this.closePop} />
                    </div>
                    <center className="col-sm-12 text-white">
                        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#fff", minHeight: "25vh", paddingBottom: "0px", paddingTop: "20px", width:"92%" } : { background: "#fff", height: "auto", paddingBottom: "60px", width:"40%" }}>
                            <div className="row" style={!isMobile ? { paddingLeft: "7em", paddingRight: "7em" } : null}>
                                <div className="col-lg-12 col-sm-12 text-left" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "14px", color: "#000" } : { fontSize: "17px", color: "#000" }}>
                                       <span style={{fontSize:"10px"}}>Name:</span> 
									   
									   &nbsp;
									  
									   {this.state.personName}
                                    </h2>

                                  

                                </div>

								<div className="col-lg-12 col-sm-12 text-left" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "15px", color: "#000" } : { fontSize: "17px", color: "#000" }}>
                                       <span style={{fontSize:"10px"}}>Email:</span> 
									   &nbsp;
									
									   
									    {this.state.email}
                                    </h2>

                                  

                                </div>

								<div className="col-lg-12 col-sm-12 text-left" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "15px", color: "#000" } : { fontSize: "17px", color: "#000" }}>
                                       <span style={{fontSize:"10px"}}>Phone:</span> 
									   &nbsp;
									 
									   {this.state.phoneNumber}
                                    </h2>

                                  

                                </div>

								<div className="col-lg-12 col-sm-12 text-left" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "15px", color: "#000" } : { fontSize: "17px", color: "#000" }}>
                                       <span style={{fontSize:"10px"}}>Gender:</span> 
									   &nbsp;
									   
									   {this.state.gender}
                                    </h2>

                                  

                                </div>

								<div className="col-lg-12 col-sm-12 text-left" style={!isMobile ? { marginTop: "6rem" } : null}>
                                    <h2 className="font-weight-bolder monte " style={isMobile ? { fontSize: "15px", color: "#000" } : { fontSize: "17px", color: "#000" }}>
                                       <span style={{fontSize:"10px"}}>LGA:</span> 
									   
									   &nbsp;
									   &nbsp;
									   &nbsp;
									   &nbsp;
									   {this.state.lga}
                                    </h2>

                                  

                                </div>
								
                            </div>

                        </div>
                        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

                    </center>
                </div>
            </div>
<Modal title={this.state.personName} visible={this.state.filterOpen} onOk={this.postQueryRequest} onCancel={this.handleShowSelectModal}>
                <div className="row">
					<div className="col-sm-12">
						<div className="form-group">
							<label className="label-control">
								Filter by
							</label>
							<select className="form-control" onChange={this.handleInput} name="filtertype">
								<option value="">Select filter type</option>
								<option value="lga">LGA</option>
								<option value="gender">Gender</option>
								<option value="haspvc">Has PVC</option>
								<option value="formtype">Form Type</option>
							</select>
						</div>

					</div>


					{this.state.filtertype == "lga" ? <div className="col-sm-12">
						<div className="form-group">
							<label className="label-control">
								Select LGA
							</label>
							<select className="form-control" name="lga" onChange={this.handleInput}>
								<option value="">Select LGA</option>
								{allLgas && allLgas.map(x => {
                                                    return (
                                                        <option value={x}>{x}</option>

                                    	)
                                   })}
							</select>
						</div>

					</div> 
					: 
					this.state.filtertype == "gender" ? 
					<div className="col-sm-12">
						<div className="form-group">
							<label className="label-control">
								Select Gender
							</label>
							<select className="form-control" name="gender"  onChange={this.handleInput}>
								<option value="">Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								
							</select>
						</div>

					</div>
					:
					this.state.filtertype == "haspvc" ? 
					<div className="col-sm-12">
						<div className="form-group">
							<label className="label-control">
								Select
							</label>
							<select className="form-control" name="pvcSelect" onChange={this.handleInput}>
								<option value="">Select</option>
								<option value="Yes">Has PVC</option>
								<option value="No">No PVC</option>
								
							</select>
						</div>
					</div>
					
					:

					this.state.filtertype == "formtype" ? 
					<div className="col-sm-12">
						<div className="form-group">
							<label className="label-control">
								Select form type
							</label>
							<select className="form-control" name="selectformtype" onChange={this.handleInput}>
								<option value="">Select</option>
								<option value="RECRUITMENT">Recruitment</option>
								<option value="YOUTH_WING">Youth Wing</option>
								<option value="WOMEN_WING">Women Wing</option>
								<option value="VOLUNTEER">Volunteer</option>
								
							</select>
						</div>
					</div>

					:
					null}

				</div>
            </Modal>
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
				
				<div className="container-fluid py-5">
					<div className="d-flex flex-wrap justify-content-between">
						<h1 className="mb-3 mr-2 my-auto" style={{fontSize:"16px"}}>
							<Unicons.UilBookAlt size="26" className="mr-2"/>
							All Posts
						</h1>
						{/* <Link to={"/admin/academicstaff"}> */}
                        <Link to={{
                                pathname: "/admin/academicstaff",
                                state: { dataPass: 'news' }
                            }}>
						<button className="btn btn-primary" type='button'>
							<i className="fa fa-plus"/> &nbsp; Add New
						</button>
						</Link>
					</div>
					
					<hr/>
					
                    <div className="overflow-scroll">
                            <MDBDataTableV5
                                hover
                                striped
                                // entriesOptions={[10, 20, 25]}
                                entries={10}
                                pagesAmount={4}
                                pagingTop={false}
                                searchTop
                                searchBottom={false}
                                data={this.state.newsArr}
                                sortRows={['name']}
                            />
                        </div>
				</div>
				
				{/* <Modal isOpen={this.state.newInstructor} toggle={this.toggleNewInstructor} className="mt-5 md" size="lg">
					<form onSubmit={(e) => this.createInstructor(e)}>
						<ModalHeader toggle={this.toggleNewInstructor}>
							<span className="h2">Add New Instructor</span>
						</ModalHeader>
						
						<ModalBody>
							<div className="form-group row">
								<div className="col-md-6">
									<label className="mt-2 mr-2 ">
										<b>First Name:</b>
									</label>
									
									<input id="fName" type="text" className="form-control"
										   value={this.state.newFirstName}
										   onChange={(e) => this.setState({
											   newFirstName: e.target.value,
										   }) }
									/>
								</div>
								
								<div className="col-md-6">
									<label className="mt-2 mr-2 ">
										<b>Last Name:</b>
									</label>
									
									<input id="lName" type="text" className="form-control"
										   value={this.state.newLastName}
										   onChange={(e) => this.setState({
											   newLastName: e.target.value,
										   }) }
									/>
								</div>
								
								<div className="col-md-6 mt-3">
									<label className="mt-2 mr-2 ">
										<b>Other Name:</b>
									</label>
									
									<input id="oName" type="text" className="form-control"
										   value={this.state.newOtherName}
										   onChange={(e) => this.setState({
											   newOtherName: e.target.value,
										   }) }
									/>
								</div>
								
								<div className="col-md-6 mt-3">
									<label className="mt-2 mr-2 ">
										<b>Email:</b>
									</label>
									
									<input id="email" type="email" className="form-control"
										   value={this.state.newEmail}
										   onChange={(e) => this.setState({
											   newEmail: e.target.value,
										   }) }
									/>
									
									{this.state.newInstructorFormIncomplete ?
										<div className="bg-danger border-rad-full text-center p-2 my-3">
											<p className="small text-white mb-0">
												<Unicons.UilExclamationCircle size="20"/> Please fill in all fields.
											</p>
										</div>
										: null
									}
									
									{this.state.error ?
										<div className="bg-danger border-rad-full text-center p-2 my-3">
											<p className="small text-white mb-0">
												<Unicons.UilBell size="20"/> {this.state.errorMessage}
											</p>
										</div>
										: null
									}
								</div>
							</div>
						</ModalBody>
						
						<ModalFooter>
							<button className="btn btn-primary">
								Add Instructor
								{
									this.state.newInstructorLoading ?
										<span className="ml-2">
										<ClipLoader size={20} color={"#fff"}
													Loading={this.state.newInstructorLoading}/>
									</span>
										:
										null
								}
							</button>
							
							<button type="button" className="btn btn-danger" onClick={this.toggleNewInstructor}>Close</button>
						</ModalFooter>
					</form>
				</Modal> */}
			
			</>
		
		)
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePosts);