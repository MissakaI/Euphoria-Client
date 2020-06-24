import React, {Component} from 'react';
import {Button,Form} from 'react-bootstrap';
import Card from "../../components/admin/Card";
import Validator from 'validator';
import axios from 'axios';

class AddAdminForm extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            adminUsername:'',
            adminPassword:'',
            errors:{}

        }
        this.handleChange = this.handleChange.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    addAdmin(){
        if(Validator.isEmpty(this.state.firstName)){
            this.state.errors.firstName="This field is required"
            
        }
        if(Validator.isEmpty(this.state.lastName)){
            this.state.errors.lastName="This field is required"
            
        }
        if(Validator.isEmpty(this.state.email)){
            this.state.errors.email="This field is required"
            
        }
        if(Validator.isEmpty(this.state.adminUsername)){
            this.state.errors.adminUsername="This field is required"
            
        }
        if(Validator.isEmpty(this.state.adminPassword)){
            this.state.errors.firstName="This field is required"
            
        }
        
        axios.post("http://localhost:8080/api/admin/addAdmin",JSON.stringify(this.state),{
            headers: {
                'Content-Type': 'application/json',
            },
         }
         ).then((res)=>{
            console.log(res);
         });
        this.props.history.push("/admin/administrators");
        window.location.reload(false);
    }

    render(){
        return(
            <div>
                <div className = "m-4">
                <Card
                title="Add New Administrator"
                category="Please fill out the form and click on SUBMIT"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Form>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" name="firstName" value={this.state.firstName} placeholder="FirstName" onChange={this.handleChange}/>
                            {this.state.errors.firstName && <span style={{color:'red'}} className="help-block">{this.state.errors.firstName}</span>}
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" name="lastName"   value={this.state.lastName} placeholder="LastName" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email"  value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name="adminUsername" value={this.state.adminUsername} placeholder="Username" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="adminPassword" value={this.state.adminPassword} placeholder="Password" onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={()=>this.addAdmin()}>
                        Submit
                        </Button>
                    </Form>
                }
                />
                </div>
            </div>
        );
    }
}

export default AddAdminForm;