import React, {Component} from 'react'

import {Button} from '@material-ui/core'
import {Form, Image, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/eu-logo.png';
import {url} from "../../assets/URL";
const axios = require('axios').default;

class CounselorNavBar extends Component {

    logOut = () => {
        localStorage.setItem("JWT", null);
        axios.defaults.headers.common['Authorization'] = null;
    };

    render() {
        return (
            <>
                {/*Navbar-Start*/}
                <Navbar expand={'md'} sticky={'top'} variant={"dark"} bg={"primary"} style={{marginBottom: "10px"}}
                        collapseOnSelect>
                    {/*<Container>*/}

                    <Image src={Logo}
                           alt={"Euphoria Logo"}
                           width={"4%"}
                           fluid={true}
                    />

                    <Navbar.Brand>Euphoria</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={"mr-auto"}>
                            <Nav.Link href={url.concat("/counselor/homepage")}>Home</Nav.Link>
                            <Nav.Link href={url.concat("/counselor/questions")}>Questions</Nav.Link>
                            <Nav.Link href={url.concat("/counselor/appointments")}>New Appointments</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outlined" onClick={this.logOut}>Sign Out</Button>
                        </Form>
                    </Navbar.Collapse>
                    {/*</Container>*/}
                </Navbar>
                {/*Navbar-End*/}
            </>
        );
    };
}

export default CounselorNavBar;
// export default connect(null,{CounselorSignIn});