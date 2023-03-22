import React, {Component} from 'react';
import Footer from "./Footer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import {Route, Switch} from "react-router-dom";

import "../assets/css/Front.css";

import ForgotPassword from "../pages/Front/ForgotPassword";
import Home from "../pages/Front/Home";
import NewsAndEvents from "../pages/Front/newsandevent";
import Apply from "../pages/Front/apply";
import AboutUche from "../pages/Front/aboutuche";
import TheParty from "../pages/Front/theparty";
import Register from "../pages/Front/Auth/Register";
import Login from "../pages/Front/Auth/Login";
import PaymentSuccess from "../pages/Front/PaymentSuccess";
import PageNotFound from "../pages/PageNotFound";

import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps, stateKeys} from "../redux/actions";
import Dialog from "../components/Dialog/Dialog";
import FrontHeader from "./FrontHeader";
import {UnAuthRoute} from "../components/Authenticator/Authenticate";
import theparty from '../pages/Front/theparty';
import mymandate from '../pages/Front/mymandate';
import nativemedia from '../pages/Front/nativemedia';
import honors from '../pages/Front/honors';
import achievements from '../pages/Front/achievements';
import contactus from '../pages/Front/contactus';
import SigninMain from '../pages/Front/signinMain';
import ProfileBio from '../pages/Front/profilebio';
import StaffIDCard from '../pages/Front/StaffIDCard';
import StaffAuth from '../pages/Front/StaffAuth';
import IdentityValidation from '../pages/Front/IdentityValidation';
import Indexpage from '../pages/Front/indexpage';
import DepartmentList from '../pages/Front/deptList';
import StaffPage from '../pages/Front/staffpage';
import StaffDept from '../pages/Front/stafflist';
import News from '../pages/Front/portalnews';
import NewsPage from '../pages/Front/newspage';
import Tetfund from '../pages/Front/tetfund';
import Schools from '../pages/Front/schools';
import Admission from '../pages/Front/admission';
import OER from '../pages/Front/oer';
import Administration from '../pages/Front/administration';

import Admin from '../pages/Front/admin';

export class FrontBody extends Component {
    render() {
        return (
            <>
                {/* <FrontHeader/> */}
                <main className={this.props[stateKeys.PAGE_CLASS]}>
                    <ErrorBoundary>
                        <Switch>
                            <Route path={'/'} component={Indexpage} exact={true}/>
                            {/* <Route path={'/home'} component={Home}/> */}
                            
                            {/* <Route path={'/forgot'} component={ForgotPassword}/> */}
                            {/* <UnAuthRoute path={'/register'} component={Register}/> */}
                            {/* <Route path={'/recruitment'} component={Login}/> */}
                            {/* <Route path={'/paymentfeed'} component={PaymentSuccess}/> */}
                            {/* <Route path={'/apply'} component={Apply}/> */}
                            {/* <Route path={'/events'} component={NewsAndEvents}/> */}
                            {/* <Route path={'/profiles_'} component={AboutUche}/> */}
                            {/* <Route path={'/theparty'} component={theparty}/> */}
                            {/* <Route path={'/stafflist'} component={mymandate}/> */}
                            <Route path={'/stafflist'} component={nativemedia}/>
                            {/* <Route path={'/honors'} component={honors}/> */}
                            {/* <Route path={'/achievements'} component={achievements}/>
                            <Route path={'/contactus'} component={contactus}/> */}
                            <Route path={'/admin_signin'} component={SigninMain}/>
                            {/* <Route path={'/profile_bio'} component={ProfileBio}/> */}
                            {/* <Route path={'/staff_form'} component={StaffIDCard}/>
                            <Route path={'/staff_authentication'} component={StaffAuth}/>
                            <Route  path={'/identity_validation'} component={IdentityValidation}/> */}
                            <Route  path={'/deptList'} component={DepartmentList}/>
                            <Route  path={'/staffpage'} component={StaffPage}/>
                            <Route  path={'/staffdepts'} component={StaffDept}/>
                            <Route  path={'/news'} component={News}/>
                            <Route  path={'/newspage'} component={NewsPage}/>
                            <Route  path={'/Tetfund'} component={Tetfund}/>
                            <Route  path={'/Schools'} component={Schools}/>
                            <Route  path={'/Admission'} component={Admission}/>
                            <Route  path={'/OER'} component={OER}/>
                            <Route  path={'/Administration'} component={Administration}/>
                            {/* <Route  path={'/indexpage'} component={Indexpage}/> */}
                            {/* <Route path={'/admin'} component={Admin}/> */}
                            <Route component={PageNotFound}/>
                        </Switch>
                    </ErrorBoundary>
                    <Dialog/>
                </main>
                {/* <Footer/> */}
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontBody);
