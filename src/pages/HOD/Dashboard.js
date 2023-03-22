import React, { Component } from 'react';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, stateKeys } from "../../redux/actions";
import illustration from "../../assets/images/illus.png"
import * as Unicons from '@iconscout/react-unicons';
import Endpoint from "../../utils/endpoint";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import Spinner from "../Front/Spinner"
import { enquireScreen } from "enquire-js";
import $ from "jquery"
import { PulseSpinner } from "react-spinners-kit";
import { MDBDataTableV5 } from "mdbreact";

let isMobile;


class HODDashboard extends Component {
	state = {
		pageLoading: false,
		departmentDetails: [],
		departmentMaterials: [],
		departmentCourses: [],
		profile: [],
		userList: [],
		lgas: [],
		user: JSON.parse(localStorage.getItem(stateKeys.USER)),
	};

	loadDataError = (error) => toast.error("Something went wrong, pls check your connection.", {
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
	loadUsers = () => {
		Endpoint.getAllPerson()
			.then((rep) => {
				console.log(rep.data);
				$("#preloader").fadeOut()
				var dataReal = rep?.data;
				let mappedData = dataReal.map((x, i) => {
					if (!x?.firstName?.includes("null")) {
						return {
							sNo: i + 1,
							name: x.lastName == null || x.firstName == null ? "-" : x.lastName + " " + x.firstName,
							email: x.email,
							actions:
								<div>
									<button className="btn btn-sm btn-primary"
										style={{ background: "#ff4d4f" }}
										onClick={() => this.handlePreview(x)}>
										<i className='fa fa-eye' />
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
				// userArr = tableData
				this.setState({ userList: tableData });
				setTimeout(() => {
					console.log(this.state.userList?.length)
				}, 2000);
			})
	}
	loadDataFromServer = () => {
		this.setState({ pageLoading: true });

		let user = JSON.parse(localStorage.getItem('user'));
		this.setState({ user: user });

		Endpoint.getUserProfile()
			.then((res) => {
				this.setState({
					profile: res.data,
				});
				localStorage.setItem("ELearnUserProfilre", JSON.stringify(res.data))
				// this.setState({pageLoading: false,});
				console.log(res.data);

				Endpoint.getDepartmentDetails(res.data.department.id)
					.then((res2) => {
						this.setState({ departmentDetails: res2.data, pageLoading: false })
					})
					.catch((error) => {
						this.loadDataError(error, this);
						this.setState({ pageLoading: false });
					});

				Endpoint.getCourseMaterialsByDepartment(res.data.department.id)
					.then((res3) => {
						let materialPreview = res3.data.slice(0, 4);
						this.setState({ departmentMaterials: materialPreview, pageLoading: false })
					})
					.catch((error) => {
						this.loadDataError(error, this);
						this.setState({ pageLoading: false });
					});

				Endpoint.getCoursesByDepartment(res.data.department.id)
					.then((res4) => {
						console.log(res4.data);
						let coursePreview = res4.data.slice(0, 4);
						this.setState({ departmentCourses: coursePreview, pageLoading: false });
					})
					.catch((error) => {
						this.loadDataError(error, this);
						this.setState({ pageLoading: false });
					});
			})
			.catch((error) => {
				this.loadDataError(error, this);
				this.setState({ pageLoading: false });
			});

	};
	loadStat = () => {
		Endpoint.getStats()
			.then((res) => {
				$("#preloader").fadeOut()

				console.log(res.data)
				console.log(res?.data?.lgaCounts)
				this.setState({
					statPad: res.data,
					// lgaCountState: res?.data?.lgaCounts
				})
				let alllgas = res?.data?.lgaCounts;
				let holdArr = []
				for (var x = 0; x < alllgas.length; x++) {
					if (alllgas[x].name != "kkkkk") {
						holdArr.push(alllgas[x])
					}
				}
				this.setState({
					lgas: alllgas
				})
				setTimeout(() => {
					console.log(this.state.lgas, alllgas)
				}, 2000);
				$("#preloader").fadeOut()

				var mapReportData = res.data?.lgaCounts.map((x, i) => {
					return {
						sn: i + 1,
						lgaName: x.name,
						totalCount: x.count,
						noWithPvc: x.noWithPvc
					}
				})
			})
			.catch((err) => {

			})
	}
	componentDidMount() {
		enquireScreen((b) => {
			isMobile = b;
		});
		// this.loadUsers()
		// this.loadStat();
		// this.loadDataFromServer();
	}

	render() {
		return (
			<>
				{/* <div id="preloader">
					<div id="status">
						<center>
							<PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />
						</center>
					</div>
				</div> */}
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
					{/* <h1 className="mb-3 text-primary">
						<Unicons.UilApps size="24" className="mr-2"/>
						Dashboard
					</h1> */}

					<div className="row mb-3">
						<div className="col-lg-12 res-pull" >
							{!this.state.user?.userName?.includes("contentadmin") ? <div className="row mt-1 ">
								<div className="col-12 col-sm-6 col-xl-4 mt-1 mt-xl-0">
									<Link to={{ pathname: "/admin/applicants" }}>
										<div className="card flex-fill">
											<div className="card-body p-3">
												<div className="media">
													<div className="media-body">
														<p style={{ color: "#000", fontSize: "12px" }} className="mb-0">Posts</p>
														<h1>{this.state.statPad?.totalApplicants}</h1>
													</div>

													<div className="ml-2">
														<div className="stat">
															<Unicons.UilBuilding style={{ color: "#fff" }} size="24" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>

								<div className="col-sm-12 col-lg-4 mt-4 mt-xl-0">
									<Link to={{ pathname: "/admin/applicants" }}>
										<div className="card flex-fill">
											<div className="card-body p-3">
												<div className="media">
													<div className="media-body">
														<p style={{ color: "#000", fontSize: "12px" }} className="mb-0">Academic Staff</p>
														<h1>{this.state.statPad?.dailyApplicants}</h1>

													</div>

													<div className="ml-2">
														<div className="stat">
															<Unicons.UilUserCheck style={{ color: "#fff" }} size="24" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>

								<div className="col-sm-12 col-lg-4 mt-4 mt-xl-0">
									<Link to={{ pathname: "/admin/applicants" }}>
										<div className="card flex-fill">
											<div className="card-body p-3">
												<div className="media">
													<div className="media-body">
														<p style={{ color: "#000", fontSize: "12px" }} className="mb-0">Media</p>
														<h1>{this.state.statPad?.totalUsersWithPvc}</h1>
													</div>

													<div className="ml-2">
														<div className="stat">
															<Unicons.UilBookReader size="24" style={{ color: "#fff" }} />
														</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
{/* 
								<div className={isMobile ? "col-sm-12 col-lg-12 mt-4 mt-xl-0" : null}>
									<div className={isMobile ? "overflow-scroll" : null}>
										<div class="container">

											<table class="table table-striped">
												<thead>
													<tr style={{ fontSize: "12px" }}>
														<th>LGA</th>
														<th>Total count</th>
														<th>Male count</th>
														<th>Female count</th>
														<th>With PVC</th>
														<th>Without PVC</th>
													</tr>
												</thead>
												<tbody>
													{this.state.lgas && this.state.lgas.map((x, i) => {
														return (
															<tr>
																<td>{x.name}</td>
																<td>{x.count}</td>
																<td>{x.male}</td>
																<td>{x.feMale}</td>
																<td>{x.noWithPvc}</td>
																<td>{x.count - x.noWithPvc}</td>

															</tr>
														)
													})}

												</tbody>
											</table>
										</div>
										
									</div>
								</div> */}
							</div> : "Hello Admin"}


						</div>



					</div>
				</div>
			</>

		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(HODDashboard);