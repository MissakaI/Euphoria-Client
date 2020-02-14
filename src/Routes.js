import React, {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUpPage from './views/user/SignUpPage';
import HomePageUser from './views/user/HomePageUser';
import NoMatch from './views/user/NoMatch';
import Counselors from './views/user/Counselors';
import CounselorAppointments from "./views/counselor/CounselorAppointments";
import CounselorViewPatientRecords from "./views/counselor/CounselorViewPatientRecords";
import CounselorSignIn from "./views/counselor/CounselorSignIn";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/user/login" component={SignIn}/>
                <Route exact path="/user/signup" component={SignUpPage}/>
                <Route exact path="/user/homepage" component={HomePageUser}/>
                <Route exact path="/user/feed" component={HomePageUser}/>
                <Route exact path="/user/counselors" component={Counselors}/>

                <Route exact path={"/counselor/appointments"} component={CounselorAppointments}/>
                <Route exact path={"/counselor/patients/records"} component={CounselorViewPatientRecords}/>
                <Route exact path={"/counselor/sign-in"} component={CounselorSignIn}/>
                {/*<Route component={NoMatch}/>*/}
                <Redirect to="/counselor/sign-in"/>
            </Switch>
        )
    }
}
