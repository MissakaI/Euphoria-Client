import React, {Component} from 'react';
import {Table,Row,Col,Button} from 'react-bootstrap';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Card from "../../components/admin/Card";
import axios from 'axios';

class AdminUsers extends Component{
    constructor(props){
        super(props)
        this.state={
            formalUsers:[],
            quickUsers:[]
        }
        this.deleteUser=this.deleteUser.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/admin/getFormalUsers")
            .then(res=>{
                const formalUser = res.data;
                this.setState({formalUsers:formalUser})
            })

        axios.get("http://localhost:8080/api/admin/getQuickUsers")
            .then(res2=>{
                const quickUser = res2.data;
                this.setState({quickUsers:quickUser})
            })
    }

    deleteUser(uid){
        alert("Are you sure you want to remove this user?");
        axios.delete("http://localhost:8080/api/admin/deleteUser",{
            params:{
                "id":uid
            },
        })
        window.location.reload(false);
    }

    render(){
        return(
            <React.Fragment>

            <AdminNavbar/>
            <div className="container"> 
                <div className="m-4">
                    <Row>
                        <Col md={12}>
                        <Card
                            title="Formal Users"
                            category="Formally Registered Users"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                            <Table striped hover>
                                <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/*Here we should display only the formal registered users*/}
                                    {
                                        this.state.formalUsers.map(
                                            formalUser=>(
                                                <tr key={formalUser.uid}>
                                                    <td>{formalUser.uid}</td>
                                                    <td>{formalUser.first_name}</td>
                                                    <td>{formalUser.last_name}</td>
                                                    <td>{formalUser.city}</td>
                                                    <td><Button variant="danger"onClick={()=>this.deleteUser(formalUser.uid)}>REMOVE</Button></td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </Table>
                            }
                            />
                        </Col>
                    </Row> 
                </div>
                    
                <div className="m-4">
                    <Row>
                        <Col md={12}>
                        <Card
                            plain
                            title="Quick Users"
                            category="Quick Registered Users"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                            <Table striped hover>
                                <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/**Here we should display only the quick registered users */}
                                {
                                    this.state.quickUsers.map(
                                        quickUser=>
                                        <tr key={quickUser.uid}>
                                            <td>{quickUser.uid}</td>
                                            <td>{quickUser.contact_number}</td>
                                            <td>{quickUser.email}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                            }
                        />
                        </Col>
                    </Row>
                </div>
        </div>
            </React.Fragment>
        );
    }
}

export default AdminUsers;