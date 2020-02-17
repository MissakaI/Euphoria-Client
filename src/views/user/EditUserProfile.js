import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import NavBarUser from '../../components/user/NavbarUser'
import UserData from '../../components/user/UserData'
import {Grid} from '@material-ui/core';

export default class EditUserProfile extends Component {
    render() {
        return (
            <React.Fragment>

                <NavBarUser></NavBarUser>
               <Grid container>
                <Container>
                    <div style={{marginTop:'200px'}}>

                    <UserData ></UserData>
                    </div>
                </Container>
               </Grid>
            </React.Fragment>    
        )
    }
}
