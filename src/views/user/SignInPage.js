import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import SignIn from '../../components/SignIn';
import NavBarLandingPage from '../../components/NavBarLandingPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Counselors from './Counselors'
export default class SignInPage extends Component {
    render() {
        const page="signIn";
        const {history}=this.props;
        return (
        <React.Fragment>
            <Row >
                <Col xs={12}>
                    <NavBarLandingPage page={page}></NavBarLandingPage>
                </Col>
            </Row>
            <Row >
                <Col xs={12}>
                        <SignIn history={history}></SignIn>

                </Col>
            </Row>
            
        </React.Fragment>
        )
    }
}
