import React, {Component} from 'react';
import {Table,Row,Col} from 'react-bootstrap';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Card from "../../components/admin/Card";
import axios from 'axios';

class AdminCounselors extends Component{
    constructor(props){
        super(props)
        this.state={
            counselors:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/admin//getCounselors")
            .then(res=>{
                const counselor = res.data;
                this.setState({counselors:counselor})
            })
    }

    render(){
        return(
            <div className="container">
                <AdminNavbar/>
                <div className="m-4">
                    <Row>
                        <Col md={12}>
                        <Card
                            title="Counselors"
                            category="Registered Counselors"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                            <Table striped hover>
                                <thead>
                                <tr>
                                    <th>Counselor ID</th>
                                    <th>Name</th>
                                    <th>Hospital</th>
                                    <th>City</th>
                                    <th>speciality</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.counselors.map(
                                            counselor=>(
                                                <tr key={counselor.counselor_id}>
                                                    <td>{counselor.counselor_id}</td>
                                                    <td>{counselor.counselor_name}</td>
                                                    <td>{counselor.hospital}</td>
                                                    <td>{counselor.city}</td>
                                                    <td>{counselor.specialty}</td>
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
            </div>
        );
    }
}

export default AdminCounselors;