import React, {Suspense} from 'react';
import Header from "./HODHeader";
import {Route, Switch} from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps, stateKeys} from "../redux/actions";

import HODDashboard from "../pages/HOD/Dashboard";
import HODInstructors from "../pages/HOD/Instructors";
// import ManageInstructors from "../pages/HOD/manage_instructors";
import ManageContents from "../pages/HOD/managecontents";
import HODProfile from "../pages/HOD/Profile";
import Admin from "../pages/Front/admin";
import Users from "../pages/Front/users";
import ManageAdmin from "../pages/HOD/createadmin";
import MyEditor from "../pages/HOD/drafttest";
import ManagePosts from "../pages/HOD/manageposts";

const HODBody = (props) => {
	return (
		<>
			<div className={props[stateKeys.PAGE_CLASS]}>
				<section className="sidenav-enabled pb-3 pb-md-4">
					<Header/>
					<ErrorBoundary>
						<Suspense fallback={<p>Loading...</p>}>
							<div className="main-content pt-md-5">
								<Switch>
									<Route path={'/admin/dashboard'} component={HODDashboard} exact={true}/>
									<Route path={'/admin/stafflist'} component={HODInstructors} exact={true}/>
									{/* <Route path={'/hod/announcements'} component={HODAnnouncements} exact={true}/> */}
									{/* <Route path={'/hod/profile'} component={HODProfile} exact={true}/> */}
									{/* <Route path={'/hod/manage_instructor'} component={ManageInstructors} exact={true}/> */}
									<Route path={'/admin/manage__users'} component={Users} exact={true}/>
									<Route path={'/admin/academicstaff'} component={ManageContents} exact={true}/>
									<Route path={'/admin/manageadmin'} component={ManageAdmin} exact={true}/>
									<Route path={'/admin/manageposts'} component={ManagePosts} exact={true}/>
									<Route path={'/admin/draft'} component={MyEditor} exact={true}/>
								</Switch>
							</div>
						</Suspense>
					</ErrorBoundary>
				</section>
			</div>
		</>
	)
};

export default connect(mapStateToProps, mapDispatchToProps)(HODBody);