import React, {Component} from 'react';
import {Table,Row,Col} from 'react-bootstrap';
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

    render(){
        function accountType(props){

        }
        return(
            <div className="container"> 
                <AdminNavbar/>
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
                                    <th>Title</th>
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
                                                    <td>{formalUser.title}</td>
                                                    <td>{formalUser.first_name}</td>
                                                    <td>{formalUser.last_name}</td>
                                                    <td>{formalUser.city}</td>
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
        );
    }
}

export default AdminUsers;