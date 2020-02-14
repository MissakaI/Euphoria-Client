import React, {Component} from 'react'
import {Button, Form, Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/eu-logo.png';

export default class NavBarLandingPage extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <img
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">Euphoria</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>

                <Form inline>
                    <Button variant="outline-info">Sign In</Button>
                </Form>
            </Navbar>

        )
    }
}
