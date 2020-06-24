import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import logo from '../assets/eu-logo.png';
import axios from 'axios';

import UserProfile from '../assets/UserProfile';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Euphoria
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const styles=theme=>({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});



class SignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      'email':'',
      'password':''
    }
  }
   
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleClick=(e)=>{
    e.preventDefault();
    console.log("redirect");
    
    axios.post('http://localhost:8080/api/user/signin',JSON.stringify(this.state),{headers: {
        'Content-Type': 'application/json',
    }})
    .then((res)=>{
        const dat=res.data;
        console.log(dat)
        UserProfile.setEmail(this.state.email);
        UserProfile.setName(dat.firstname);
        UserProfile.setPic(dat.pic_name);
        UserProfile.setUserType(dat.account_type);
        UserProfile.setActivated(dat.activated);
        window.location.replace('/user/homepage')
    }).catch(err=>{
      alert("Invalid combination of username and password");
      this.setState({"email":'',"password":''});

    })
    

  }
  render(){
      const {classes}=this.props;
      return(
        <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                
                <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} /> <h2>Euphoria</h2>
                {/* <Typography component="h1" variant="h5">
                  Euphoria
                </Typography> */}
                <form className={classes.form} noValidate onSubmit={this.handleClick} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChange}

                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button

                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/user/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
      )


  }

}
SignIn.propTypes={
  classes:PropTypes.object.isRequired,
};
export default withStyles(styles)(SignIn);
// SignIn.propTypes = {
//   signIn : PropTypes.func.isRequired
// }
// const mapStateToProps=(state)=>({
//   sign : state.sign
// });
