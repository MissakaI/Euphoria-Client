import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import AdminNavbar from '../../components/admin/AdminNavbar';
import Card from '../../components/admin/Card';
import axios from 'axios';
import UserProfile from '../../assets/UserProfile';

class AdminProfile extends Component{
    constructor(props){
        super(props)
        this.state={
            adminID:'',
            firstName:'',
            lastName:'',
            email:'',
            adminUsername:'',
            adminPassword:'',
            activeStatus:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.updateAdmin=this.updateAdmin.bind(this);
    }

    componentDidMount(){
        const id=UserProfile.getId();
        
        axios.get("http://localhost:8080/api/admin/viewAdmin",{
            params:{
                "adminID":id
            }
        }
        ).then(res=>{
            const admin=res.data;
            console.log(res);
            this.setState({
                adminID:admin.adminID,
                firstName:admin.firstName,
                lastName:admin.lastName,
                email:admin.email,
                adminUsername:admin.adminUsername,
                adminPassword:admin.adminPassword,
                activeStatus:admin.activeStatus})
            
        })
        
    }
    handleChange(event){
        this.setState={
            [event.target.name]:event.target.value
        }
    }

    updateAdmin(){
            axios.post("http://localhost:8080/api/admin/updateAdmin",JSON.stringify(this.state),{
                headers: {
                    'Content-Type': 'application/json',
                },
            })
    }

    render(){
        console.log(this.state.lastName);
        console.log("here")
        
        return(
            <div className = "container">
                <AdminNavbar/>
                <div className="m-4">
                <Card
                title="Administrator Profile"
                category="Please make changes in the form to Update Administrator details"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Form>
                        <Form.Group controlId="formBasicID">
                            <Form.Label>Admin ID</Form.Label>
                            <Form.Control disabled type="id" name="adminID" value={this.state.adminID} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" name="lastName"   value={this.state.lastName} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email"  value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name="adminUsername" value={this.state.adminUsername} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="adminPassword" value={this.state.adminPassword} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>this.updateAdmin()}>
                            UPDATE
                        </Button>
                </Form>

                }
                />
                </div>
            </div>
        )
    }
}

export default AdminProfile;