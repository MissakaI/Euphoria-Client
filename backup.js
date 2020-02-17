import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormControl,FormGroup,Button,Box,Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import {Form,Tab,Nav,Row,Col} from 'react-bootstrap';

import {validateFormalSignUp} from '../../validate/PatientSignUpValidation';
import {useStyles} from '../../assets/Styles';


class FormalRegistration extends Component {
    constructor(props){
        super(props);
        this.state={
            gender:'',
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            contactNumber:'',
            dob:'',
            nic:'',
            city:'',
            district:'',
            errors:{},
            isLoading:false
        }
    }
    onChange=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state)
    }
    isValid=()=>{
        const{errors,isValid}=validateFormalSignUp(this.state);
        console.log(isValid);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("shit");
        
        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{},accountType:'quick'});

            this.props.userSignUpRequest(this.state).then( result => {
                alert("success");
             }, function(error) {
                console.log(error);
             });
        }else{
            this.setState({})
        }
    }
    
    render() {
        
        const {errors} =this.state;
        return (
                <Form onSubmit={this.onSubmit}>
                    
                <Form.Row>

<Form.Group as={Col} md="4" controlId="validationCustom01">
  <Form.Label>First name</Form.Label>
    <TextField
                id="firstname"
                label="First Name"
                className={useStyles.textField}
                type="text"
                name="firstname"
                autoComplete="firstname"
                margin="none"
                variant="outlined"
                style={{ width: '50vh' }}
                onChange={this.onChange}
                value={this.state.firstname}
                style={{width:'300px',height:'50px'}}
            />
  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
</Form.Group>
{errors.firstname && <span style={{color:'red'}} className="help-block">{errors.firstname}</span>}

<Form.Group as={Col} md="4" controlId="validationCustom02">
  <Form.Label>Last name</Form.Label>
        <TextField
                id="lastname"
                label="Last Name"
                className={useStyles.textField}
                type="text"
                name="lastname"
                autoComplete="lastname"
                margin="none"
                variant="outlined"
                style={{ width: '50vh' }}
                onChange={this.onChange}
                value={this.state.lastname}

            />
            <Form.Control id="lastname"
                label="Last Name"
                className={useStyles.textField}
                type="text"
                name="lastname"
                autoComplete="lastname"
                margin="none"
                variant="outlined"
                style={{ width: '50vh' }}
                onChange={this.onChange}
                value={this.state.lastname} />
            <Form.Label>Address</Form.Label>
  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
</Form.Group>
{errors.lastname && <span style={{color:'red'}} className="help-block">{errors.lastname}</span>}


<Form.Group as={Col} md="4" controlId="validationCustomUsername">
      <Form.Label>Gender</Form.Label>
            <Form.Control as="select" name="gender" onChange={this.onChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
      </Form.Control>
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="6" controlId="validationCustom03">
  <Form.Label>Username</Form.Label>
      <TextField
            id="email"
            label="Email"
            className={useStyles.textField}
            type="email"
            
            name="email"
            autoComplete="email"
            margin="none"
            variant="outlined"
            style={{ width: '50vh' }}
            onChange={this.onChange}
            value={this.state.email}

        />
</Form.Group>
{errors.email && <span style={{color:'red'}} className="help-block">{errors.email}</span>}


<Form.Group as={Col} md="3" controlId="validationCustom04">
  <TextField
      id="password"
      label="Password"
      className={useStyles.textField}
      type="password"
      name="password"
      autoComplete="email"
      margin="none"
      variant="outlined"
      style={{ width: '50vh' }}
      onChange={this.onChange}
      value={this.state.password}
  />
</Form.Group>
{errors.password && <span style={{color:'red'}} className="help-block">{errors.password}<br></br></span> }


<Form.Group as={Col} md="3" controlId="validationCustom05">
  <Form.Label>Zip</Form.Label>
  <TextField

      id="passwordConfirmation"
      label="Re-type Password"
      className={useStyles.textField}
      type="password"
      name="passwordConfirmation"
      autoComplete="password"
      margin="none"
      variant="outlined"
      style={{ width: '50vh' }}
      onChange={this.onChange}
      value={this.state.passwordConfirmation}
    />
</Form.Group>
{errors.passwordConfirmation && <span style={{color:'red'}} className="help-block">{errors.passwordConfirmation}<br></br></span> }

<Form.Row>
    <Form.Group as={Col} md="6" controlId="validationCustom03">
      <Form.Label>Username</Form.Label>
          <TextField
                    id="contactNumber"
                    label="Contact Number"
                    className={useStyles.textField}
                    type="text"
                    name="contactNumber"
                    autoComplete="contactNumber"
                    margin="none"
                    variant="outlined"
                    style={{ width: '50vh' }}
                    onChange={this.onChange}
                    value={this.state.contactNumber}
            />
    </Form.Group>
    {errors.contactNumber && <span style={{color:'red'}} className="help-block">{errors.contactNumber}</span>}


    <Form.Group as={Col} md="3" controlId="validationCustom04">
        <TextField
                id="date"
                label="Birthday"
                type="date"
                name="dob"
                defaultValue="2020-01-01"
                className={useStyles.textField}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={this.onChange}
            />
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom05">
      <Form.Label>Zip</Form.Label>
          <TextField
                    id="nic"
                    label="NIC"
                    className={useStyles.textField}
                    type="text"
                    name="nic"
                    autoComplete="nic"
                    margin="none"
                    variant="outlined"
                    style={{ width: '50vh' }}
                    onChange={this.onChange}
                    value={this.state.nic}
            />
    </Form.Group>
    {errors.nic && <span style={{color:'red'}} className="help-block">{errors.nic}</span>}

</Form.Row>
<Form.Row>
    <Form.Group as={Col} md="6" controlId="validationCustom03">
      <Form.Label>Username</Form.Label>
          <TextField
                id="city"
                label="City"
                className={useStyles.textField}
                type="text"
                name="city"
                autoComplete="city"
                margin="none"
                variant="outlined"
                style={{ width: '50vh' }}
                onChange={this.onChange}
                value={this.state.city}
            />
    </Form.Group>
    {errors.city && <span style={{color:'red'}} className="help-block">{errors.city}</span>}
                

    <Form.Group as={Col} md="3" controlId="validationCustom04">
            <TextField
                id="district"
                label="District"
                className={useStyles.textField}
                type="text"
                name="district"
                autoComplete="district"
                margin="none"
                variant="outlined"
                style={{ width: '50vh' }}
                onChange={this.onChange}
                value={this.state.district}
            />
    </Form.Group>
    {errors.district && <span style={{color:'red'}} className="help-block">{errors.district}</span>}


    <Form.Group as={Col} md="3" controlId="validationCustom05">
     
      
    </Form.Group>
    </Form.Row>


    </Form.Row>
    <Form.Group>
        <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        />
    </Form.Group>
    <Button
    variant="contained"
    color="primary"
    style={{ width: '10vh' }}
    type="submit"
    >
    Send
    </Button>
                            
                    </Form> 
            
        )
    }
}


export default FormalRegistration;