import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'

import {userSignUpRequest} from '../../actions/signUpActions';

import PropTypes from 'prop-types';

import SignUpFormUser from '../../components/user/SignUpFormUser';
import NavBarLandingPage from '../../components/NavBarLandingPage';
// import FooterLandingPage from './FooterLandingPage';


import {Container} from 'react-bootstrap';


class SignUpPage extends Component {
    render() {
        return (

        <React.Fragment>

            <Grid
                container
                spacing={3}
            >
                <Grid item xs={12} style={{ marginBottom:'0' }}>
                    <NavBarLandingPage></NavBarLandingPage>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '70vh',marginTop:'0' }}
            >
                <div style={{backgroundColor:'white',padding:'100px',marginTop:'0'}}>
                       
                    <Grid container>
                        <SignUpFormUser/>
                    </Grid>   
                </div>
            </Grid> 
                
           
        </React.Fragment> 
        )
    }
    
}



export default SignUpPage;