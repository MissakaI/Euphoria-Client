import React, {Component} from 'react'
import {connect} from 'react-redux';

import {Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import {userSignUpRequest} from '../../actions/signUpActions';

import PropTypes from 'prop-types';

import SignUpFormUser from '../../components/user/SignUpFormUser';
import NavBarLandingPage from '../../components/NavBarLandingPage';
// import FooterLandingPage from './FooterLandingPage';
import Footer from '../../components/Footer';
import {Helmet} from 'react-helmet';
import Paper from '@material-ui/core/Paper';
import Image from '../../assets/img/signup/Image.jpg';


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height : '600px',
        width :'700px',
        padding : 20
    }
};

class SignUpPage extends Component {
    render() {
        const {userSignUpRequest}=this.props;
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
            >
                <Grid item xs={1}></Grid>
                <Grid item xs={3} style={{ padding:'20' }}>
                        <Paper style={styles.paperContainer}>
                                
                        </Paper>
                </Grid>
                <Grid item xs={8}>
                            <Grid
                                container
                                spacing={3}
                                direction="column"
                                alignItems="center"
                                justify="center"
                                style={{ minHeight: '70vh',marginTop:'0' }}
                            >
                                <div style={{backgroundColor:'white',padding:'100px',marginTop:'0'}}>
                                    <Grid container xs={12} direction="column" justify="center" alignItems="center" >
                                        <Typography  variant="h4" gutterBottom>
                                        Get started!
                                        </Typography>
                                    </Grid>   
                                    <Grid item xs={12} style={{ minWidth: '50vh' }}>
                                        <Helmet>
                                            <style>{'body { background-color: white; }'}</style>
                                        </Helmet>
                                        
                                        <SignUpFormUser userSignUpRequest={userSignUpRequest} />
                                    </Grid>   
                                </div>
                            </Grid> 
                    </Grid>
            </Grid>
            <Grid container spacing={3}>

                    <Grid item xs={12} style={{ marginBottom:'0' }}
                                alignItems="center"
                                justify="center"
                    >
                        <Footer></Footer>
                        {/* <FooterLandingPage></FooterLandingPage> */}
                    </Grid>
            </Grid>
        </React.Fragment> 
        )
    }
    
}

SignUpFormUser.propTypes={
    userSignUpRequest : PropTypes.func.isRequired
}

export default connect(null,{userSignUpRequest})(SignUpPage);