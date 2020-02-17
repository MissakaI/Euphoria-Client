import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormControl,FormGroup,Button,Box,Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import {Form,Tab,Nav,Row,Col,Container} from 'react-bootstrap';

import {useStyles} from '../../assets/Styles';

import axios from 'axios';


class UserData extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:'',
            account_type:'',
            city:'',
            contactNumber:'',
            dob:'',
            district:'',
            email:'',
            firstname:'',
            lastname:'',
            nic:'',
            status:'',
            pic_name:'',
            timestamp:'',
            activated:'',
            gender:'',
            deleted:false,
            oldpassword:'',
            newpassword:'',
            newpassconfirmation:'',
            errors:{},
            isLoading:false
        }
    }
    componentDidMount(){
        const uid=3;
        axios.get('http://localhost:8080/api/user/getuser'+'/'+uid,{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            const user=res.data;
            this.setState({
                gender:user.gender,
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                contactNumber:user.contactNumber,
                dob:user.dob,
                nic:user.nic,
                city:user.city,
                district:user.district,
                uid:user.uid,
                account_type:user.account_type,
                status:user.status,
                pic_name:user.pic_name,
                timestamp:user.timestamp,
                activated:user.activated,
                deleted:user.deleted
            })
            
        }).catch(err=>{
            console.log(err);
        })
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/updateuser',JSON.stringify(this.state),{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
        })

    }
    changePassword=e=>{
        e.preventDefault();
        const request=[this.state.email,this.state.oldpassword,this.state.newpassword,this.state.newpassconfirmation];
        axios.post('http://localhost:8080/api/user/changepassword',JSON.stringify(request),{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            alert('successfully changed password')
            this.setState({oldpassword:'',newpassword:'',newpassconfirmation:''})
            console.log(res);
            
        }).catch(err=>{
            alert('Error Occurred');
            this.setState({oldpassword:'',newpassword:'',newpassconfirmation:''})
            console.log(err);
        })
    }
    
    render() {
        const {errors} =this.state;
        return (
            <React.Fragment>
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                >
                <Grid container justify="center">
                    <h3 style={{margin:'50px',marginTop:'-60px'}}>Update User Data</h3>
                </Grid>
                <Grid container>
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
                                </Form.Group>


                            

                                

                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Contact Number</Form.Label>
                                    
                                            <Form.Control 
                                                label="Contact Number"
                                                className={useStyles.textField}
                                                type="text"
                                                name="contactNumber"
                                                autoComplete="contactNumber"
                                                margin="none"
                                                variant="outlined"
                                                onChange={this.onChange}
                                                value={this.state.contactNumber} 
                                                style={{width:'70%'}}
                                                
                                            />
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
                                                style={{ width: '50vh' }}
                                                onChange={this.onChange}
                                                value={this.state.city}
                                            />
                                            {errors.city && <span style={{color:'red'}} className="help-block">{errors.city}</span>}
                                    </Form.Group>
                                                

                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        
                                    <Form.Label>District</Form.Label>
                                            <Form.Control 
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
                                            {errors.district && <span style={{color:'red'}} className="help-block">{errors.district}</span>}
                                    </Form.Group>


                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    
                                    
                                    </Form.Group>
                                    </Form.Row>


                                    </Form.Row>
                                    
                                    <Button
                                            variant="contained"
                                            color="primary"
                                            style={{ width: '10vh' }}
                                            type="submit"
                                            >
                                            Update
                                    </Button>
                                                            
                            </Form> 
                    </Grid>
                    <Grid container justify="center">
                        <h3 style={{marginTop:'50px'}}>Change Password</h3>
                    </Grid>
                    <Grid container>
                        <Container>
                            <div style={{margin:'300px',marginTop:'50px'}}>

                            <Form>
                                

                                <Form.Group controlId="formBasicPassword1">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control name="oldpassword" value={this.state.oldpassword} onChange={this.onChange} type="password" placeholder="Enter Current Password" />
                                </Form.Group>
                               

                                <Form.Group controlId="formBasicPassword2">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control name="newpassword" value={this.state.newpassword} onChange={this.onChange} type="password" placeholder="Enter New Password" />
                                </Form.Group>
                            

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>New Password Confirmation</Form.Label>
                                    <Form.Control name="newpassconfirmation" value={this.state.newpassconfirmation} onChange={this.onChange} type="password" placeholder="Confirm New Password" />
                                </Form.Group>
                                
                                    <Button
                                            variant="contained"
                                            color="primary"
                                            style={{ width: '10vh' }}
                                            type="submit"
                                            onClick={this.changePassword}
                                            >
                                            Change
                                    </Button>
                            </Form>
                            </div>
                        </Container>    
                    </Grid>
                </Grid>
            </React.Fragment>
            
        )
    }
}


export default UserData;