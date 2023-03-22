import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { userType, PaymentCheck } from "../../utils/Identifiers";
import { getUser, loadUserInfo, userLoggedIn } from "../../utils/auth";

export const AuthRoute = withRouter(({ component: Component, path, authorized = [], ...rest }) => {
    if (userLoggedIn()) {

        const user = getUser();

        if (!user) {
            //Update full details from server
            loadUserInfo();
        }

        return <Route path={path} component={Component} {...rest} />;
    } else return <Redirect from={path} to={`/admin_signin`} />;
});

export const UnAuthRoute = withRouter(({ component: Component, path, ...rest }) => {
    const user = getUser();
    if (userLoggedIn() && user) {
        if (user.roleName === userType.superadmin) {
            return <Redirect from={path} to={`/admin/dashboard`} />;
        } else if (user.roleName === userType.schooladmin) {
            return <Redirect from={path} to={`/schooladmin/dashboard`} />;
        } else {
            return <Redirect from={path} to={`/home`} />;
        }
    } else return <Route path={path} component={Component} {...rest} />;
});
