import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormControl,FormGroup,Button,Box,Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import {Form,Tab,Nav,Row,Col} from 'react-bootstrap';

import {validateFormalSignUp} from '../../validate/PatientSignUpValidation';
import {useStyles} from '../../assets/Styles';
import axios from 'axios';

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
            this.setState({errors:{}});
            console.log(this.state);
            axios.post('http://localhost:8080/api/user/formalsignup',JSON.stringify(this.state),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                    window.location.replace("/user/signupsuccess");
                }, function(error) {
                    console.log(error);
                }).catch(err=>{
                    alert("something went wrong with the registration");
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
                                    <Form.Control 
                                        label="First Name"
                                        className={useStyles.textField}
                                        type="text"
                                        name="firstname"
                                        autoComplete="firstname"
                                        margin="none"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value={this.state.firstname} 
                                    />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        {errors.firstname && <span style={{color:'red'}} className="help-block">{errors.firstname}</span>}
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                                
                                    <Form.Control 
                                        label="Last Name"
                                        className={useStyles.textField}
                                        type="text"
                                        name="lastname"
                                        autoComplete="lastname"
                                        margin="none"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value={this.state.lastname} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        {errors.lastname && <span style={{color:'red'}} className="help-block">{errors.lastname}</span>}
                        </Form.Group>


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
                        <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    label="Email"
                                    className={useStyles.textField}
                                    name="email"
                                    autoComplete="email"
                                    margin="none"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    style={{width:'60%',}}
                                />
                        {errors.email && <span style={{color:'red'}} className="help-block">{errors.email}</span>}
                        </Form.Group>


                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <div style={{marginLeft:'-200px'}}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" 
                                placeholder="Password" 
                                label="Password"
                                className={useStyles.textField}
                                name="password"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                onChange={this.onChange}
                                value={this.state.password}
                                style={{width:'50%'}}
                            />
                        {errors.password && <span style={{color:'red'}} className="help-block">{errors.password}<br></br></span> }
                        </div>
                        </Form.Group>


                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <div style={{marginLeft:'-230px'}}>
                        
                                <Form.Label>Re-type password</Form.Label>

                                    <Form.Control
                                    type="password" 
                                    placeholder="Password Confirmation" 
                                    label="Re-type Password"
                                    className={useStyles.textField}
                                    name="passwordConfirmation"
                                    autoComplete="password"
                                    margin="none"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    value={this.state.passwordConfirmation}
                                    style={{width:'50%'}}
                                />
                                {errors.passwordConfirmation && <span style={{color:'red'}} className="help-block">{errors.passwordConfirmation}<br></br></span> }
                            </div>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Contact Number</Form.Label>
                            
                                    <Form.Control 
                                        label="Contact Number"
                                        className={useStyles.textField}
                                        type="number"
                                     
                                        name="contactNumber"
                                        autoComplete="contactNumber"
                                        margin="none"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value={this.state.contactNumber} 
                                        style={{width:'70%'}}
                                        
                                    />
                                    {errors.contactNumber && <span style={{color:'red'}} className="help-block">{errors.contactNumber}</span>}
                            </Form.Group>


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
                                        style={{marginLeft:'-70px',marginTop:'10px'}}
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>NIC</Form.Label>

                                    <Form.Control 
                                            label="NIC"
                                            className={useStyles.textField}
                                            type="text"
                                            name="nic"
                                            autoComplete="nic"
                                            margin="none"
                                            variant="outlined"
                                            style={{width:'250%'}}
                                            onChange={this.onChange}
                                            value={this.state.nic} 
                                    />
                                <div style={{width:'200px'}}>
                                    {errors.nic && <span style={{color:'red'}} className="help-block">{errors.nic}</span>}
                                </div>

                            </Form.Group>
                             <Form.Group as={Col} md="3" controlId="validationCustom05">
                            
                            
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                                
                                    <Form.Control 
                                        label="City"
                                        className={useStyles.textField}
                                        type="text"
                                        name="city"
                                        autoComplete="city"
                                        margin="none"
                                        variant="outlined"
                                        style={{ width: '40vh' }}
                                        onChange={this.onChange}
                                        value={this.state.city}
                                    />
                                    {errors.city && <span style={{color:'red'}} className="help-block">{errors.city}</span>}
                            </Form.Group>
                                        

                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                
                                    <Form.Label style={{marginLeft:'100px'}}>District</Form.Label>
                                   
                                    <Form.Control style={{marginLeft:'100px'}} as="select" name="district" onChange={this.onChange}>
                                        <option> Ampara	</option>
                                        <option>Anuradhapura</option>	
                                        <option> Badulla	</option>
                                        <option> Batticaloa	</option>
                                        <option> Colombo</option>	
                                        <option> Galle	</option>
                                        <option> Gampaha</option>	
                                        <option>Hambantota</option>	
                                        <option> Jaffna	</option>
                                        <option> Kalutara</option>	
                                        <option> Kandy	</option>
                                        <option> Kegalle	</option>
                                        <option> Kilinochchi</option>	
                                        <option> Kurunegala	</option>
                                        <option> Mannar	</option>
                                        <option> Matale	</option>
                                        <option> Matara	</option>
                                        <option> Moneragala	</option>
                                        <option> Mullaitivu	</option>
                                        <option> Nuwara Eliya</option>	
                                        <option>  Polonnaruwa	</option>
                                        <option> Puttalam	</option>
                                        <option> Ratnapura	</option>
                                        <option> Trincomalee</option>	
                                        <option> Vavuniya</option>
                                        </Form.Control>
                                    {errors.district && <span style={{color:'red'}} className="help-block">{errors.district}</span>}
                            </Form.Group>


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