import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class AdminNavbar extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">EUPHORIA</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/admin/administrators">Administrators</Nav.Link>
                <Nav.Link href="/admin/counselors">Counselors</Nav.Link>
                <Nav.Link href="/admin/users">Users</Nav.Link>
                <Nav.Link href="/user/stats">Statistics</Nav.Link>
                </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="/admin/adminProfile">NipuniYR</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AdminNavbar;