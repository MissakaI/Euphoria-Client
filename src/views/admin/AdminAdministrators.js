import React, {Component} from 'react';
import {Table,Row,Col,Button} from 'react-bootstrap';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Card from "../../components/admin/Card";
import axios from 'axios';

class AdminAdministrators extends Component{
    constructor(props){
        super(props)
        this.state={
            admins:[]
        }

        this.deleteAdmin = this.deleteAdmin.bind(this);
    }
     componentDidMount(){
        axios.get("http://localhost:8080/api/admin/getActiveAdmins")
        .then(res=>{
            const admin=res.data;
            this.setState({admins:admin})
        })
     }

     deleteAdmin(adminId){
         alert("Are you sure you want to remove this admin?");
         axios.delete("http://localhost:8080/api/admin/deleteAdmin",{
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            params:{
               "id":adminId,
            },
         }
         ).then((res)=>{
            console.log(res);
         });
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
                            title="Administrators"
                            category="System Administrators"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                            <Table striped hover>
                                <thead>
                                <tr>
                                    <th>Admin ID</th>
                                    <th>Username</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.admins.map(
                                            admin=>(
                                                <tr key={admin.adminID}>
                                                    <td>{admin.adminID}</td>
                                                    <td>{admin.adminUsername}</td>
                                                    <td>{admin.firstName}</td>
                                                    <td>{admin.lastName}</td>
                                                    <td>{admin.email}</td>
                                                    <td><Button variant="danger" onClick={()=>this.deleteAdmin(admin.adminID)}>REMOVE</Button></td>
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
                    <Button variant="success" onClick={()=>this.props.history.push("/admin/addAdminForm")}>ADD NEW ADMINISTRATOR</Button>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default AdminAdministrators;