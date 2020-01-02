import React, { Component } from 'react'
import {Navbar,Form,FormControl,Nav,Button,DropdownButton,Dropdown,Image} from 'react-bootstrap';
import logo from '../../assets/eu-logo.png';
import profilePic from '../../assets/profile/me.jpeg';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {url} from '../../assets/URL';

const Styles=styled.div`
    .bg-custom-1 {
        background-color: #85144b;
    }
    
    .bg-custom-2 {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    }
    .profileImage{
        max-height: 101px
        max-width : 110px

    }
`;
export default class NavbarUser extends Component {

    constructor(props){
        super(props);
        this.state={
            auth:0,
            anchorEl:null,
            open:false
            
        }
    }



    handleMenu = (event) => {
        
        this.setState({open:!(this.state.open),anchorEl:event.currentTarget});
    };
    
    handleClose = () => {
        this.setState({open:!(this.state.open)});
    };


    render() {
        return (
        <Styles>

            <Navbar bg="dark" variant="dark">
                <img
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">Euphoria</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href={url.concat("/user/feed")}>Feed</Nav.Link>
                    <Nav.Link href={url.concat("/user/counselors")}>Counselors</Nav.Link>
                </Nav>
                
                <Nav className="justify-content-end">

                    
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        >
                    <Image src={profilePic} roundedCircle className="profileImage" />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    </Menu> 
                    
                </Nav>
            </Navbar>
        </Styles>
        )
    }
}
