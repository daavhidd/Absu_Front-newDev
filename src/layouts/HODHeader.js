import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Avatar from "../assets/images/avatar.png";
import {getUser, logOutUser} from "../utils/auth";
import logo from "../assets/images/home/logo.png"
import * as Unicons from '@iconscout/react-unicons';
import Logo from "../assets/images/Abia_State_University_logo.svg.png";

// reactstrap components
import {
	Collapse,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Media,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col
} from "reactstrap";
import {useMergeState} from "../utils/helpers";
import { stateKeys } from '../redux/actions';

const HODHeader = (props) => {
	
	const [navValues, setNavValues] = useMergeState({
		collapseOpen: false,
		redirect: false,
		payLoad: JSON.parse(localStorage.getItem('user')),
		drop1: false,
		activeClasses: [false, false, false, false],
		user: JSON.parse(localStorage.getItem(stateKeys.USER)),
	});
	
	// toggles collapse between opened and closed (true/false)
	const toggleCollapse = () => {
		setNavValues({
			collapseOpen: !navValues.collapseOpen
		});
	};
	
	const toggleDrop1 = () => {
		setNavValues({
			drop1: !navValues.drop1
		})
	};
	
	const logout = () => {
		localStorage.clear();
		setNavValues({
			redirect:true
		})
	};
	
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem(stateKeys.USER));
		console.log(user, "loval")
		setNavValues({payLoad: user});
	}, []);
	
	return (
		<>
			<Navbar className="navbar-vertical fixed-left navbar-dark" style={{backgroundColor: "#1e175e"}} expand="md" id="sidenav-main" >
				<Container fluid>
					{/* Toggler */}
					<button className="navbar-toggler" type="button" onClick={toggleCollapse} >
						<span className="navbar-toggler-icon" />
					</button>
					
					{/* Brand */}
					{/* {logo ? ( */}
					<NavbarBrand className="py-0" style={{fontSize:"15px", color:"#fff"}}>
						<img alt={'logo'} className="navbar-brand-img mr-2" src={Logo} />
						{/* <Link className="h4 mb-0 text-white d-none d-md-inline-block" to="/" >
							Uche Ndi Abia 2023
						</Link> */}
					</NavbarBrand>
					{/* ) : null} */}
					
					{/* User */}
					<Nav className="align-items-center d-md-none">
						
						<UncontrolledDropdown nav>
							<DropdownToggle nav>
								<Media className="align-items-center">
									<span className="avatar avatar-sm rounded-circle">
										<img alt="avatar" src={Avatar}/>
										{/* Uche Ndi Abia 2023 */}
									</span>
								</Media>
							</DropdownToggle>
							
							<DropdownMenu className="dropdown-menu-arrow" right>
								<DropdownItem className="noti-title" header tag="div">
									<h6 className="text-overflow m-0">Welcome!</h6>
								</DropdownItem>
								
								<DropdownItem divider />
								
								<DropdownItem onClick={logOutUser}>
									<Unicons.UilSignout size="20"/>
									<span>Logout</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					{/* Collapse */}
					<Collapse navbar isOpen={navValues.collapseOpen}>
						{/* Collapse header */}
						<div className="navbar-collapse-header d-md-none">
							<Row>
								<Col className="" xs="9">
									{/* <img alt={'logo'} className="navbar-brand-img mr-2" src={logo} /> */}
									<span className="font-weight-bold">ABSU</span>
								</Col>
								
								<Col className="collapse-close" xs="3">
									<button
										className="navbar-toggler"
										type="button"
										onClick={toggleCollapse}
									>
										<span />
										<span />
									</button>
								</Col>
							</Row>
						</div>
						
						{/* Navigation */}
						{/* Divider */}
						
						{/* Navigation */}
						<Nav className="mt-md-4 mb-md-3" navbar style={{zIndex:"999"}}>
							<NavItem className='text-white'>
								<NavLink href="/admin/dashboard" className='text-white'>
								<i className='fa fa-dashboard'/> 
									Dashboard
								</NavLink>
							</NavItem>
							
							<NavItem>
							<NavLink className='text-white' href="/admin/manageposts">
								<i className='fa fa-edit'/> Posts
							</NavLink>
							<NavLink className='text-white' href="/admin/stafflist">
								<i className='fa fa-users'/> Academic Staff Mgt
							</NavLink>
						</NavItem>

{/* 							
						<NavItem>
							<NavLink className='text-white' href="/admin/academicstaff">
								<i className='fa fa-edit'/> Posts
							</NavLink>
						</NavItem> */}
						
							{/* {navValues.user?.userName.includes("contentadmin") ? null :  */}
							{/* <NavItem>
								<NavLink href="/admin/applicants" className='text-white'>
									<Unicons.UilUsersAlt size="20"/>
									Manage Applicants
								</NavLink>
							</NavItem>  */}
							
						
							<NavItem>
								<NavLink className='text-white' href="#" onClick={logOutUser}>
									<Unicons.UilSignout size="20"/> &nbsp;
									Logout
								</NavLink>
							</NavItem>
						</Nav>
						{/* <h3 className='triggerRotate' style={{marginLeft:"0px"}}>Online Learning</h3> */}
					
					</Collapse>
				</Container>
			</Navbar>
			
			<div className="main-content">
				<Navbar className="navbar-top navbar-light bg-lighter d-none d-md-block" expand="md" id="navbar-main">
					<div className="container-fluid">
						<Link className="h4 mb-0 d-none d-lg-inline-block" to="/" >
							 Absu
						</Link>
						
						<Nav className="align-items-center d-none d-md-flex" navbar>
							<UncontrolledDropdown nav>
								<DropdownToggle className="pr-0" nav>
									<Media className="align-items-center">
									<span className="avatar avatar-sm rounded-circle">
										<img alt="..." src={Avatar} />
									</span>
										<Media className="ml-2 d-none d-lg-block">
										<span className="mb-0 text-sm font-weight-bold">
											Absu
										</span>
										</Media>
									</Media>
								</DropdownToggle>
								<DropdownMenu className="dropdown-menu-arrow" right>
									<DropdownItem className="noti-title" header tag="div">
										<h6 className="text-overflow m-0">Welcome!</h6>
									</DropdownItem>
									
									{/* <DropdownItem to="/hod/profile" tag={Link}>
										<i className="ni ni-single-02" />
										<span>My profile</span>
									</DropdownItem>
									
									<DropdownItem divider /> */}
									
									<DropdownItem onClick={logOutUser}>
										<i className="ni ni-user-run" />
										<span>Logout.</span>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</div>
				
				</Navbar>
			</div>
		
		</>
	);
};

export default HODHeader;