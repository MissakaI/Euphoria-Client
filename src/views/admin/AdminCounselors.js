import React, {Component} from 'react';
import {Table,Row,Col,Button} from 'react-bootstrap';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Card from "../../components/admin/Card";
import axios from 'axios';

class AdminCounselors extends Component{
    constructor(props){
        super(props)
        this.state={
            counselors:[],
            pcounselors:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/admin/getCounselors")
            .then(res=>{
                const counselor = res.data;
                console.log(res.data);
                const ureqs=counselor.filter(c=>{
                    return c.enabled=="no";
                })
                const ereqs=counselor.filter(c=>{
                    return c.enabled=="yes";
                })

                this.setState({counselors:ereqs,pcounselors:ureqs})
                console.log(res)
            })
    }
    handleClick=e=>{
        axios.post("http://localhost:8080/api/admin/activatecounselor"+"/"+e)
            .then(res=>{
                console.log(res);
                window.location.reload(false)
            })
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
                                    <th>SLMC Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.counselors.map(
                                            counselor=>(
                                                <tr key={counselor.id}>
                                                    <td>{counselor.id}</td>
                                                    <td>{counselor.name}</td>
                                                    <td>{counselor.hospital}</td>
                                                    <td>{counselor.city}</td>
                                                    <td>{counselor.specialty}</td>
                                                    <td><Button variant="danger">REMOVE</Button></td>
                                                    <td>{counselor.slmcNumber}</td>
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
                            title="Counselor Requests"
                            category="Requests to be reviewed"
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
                                    <th>SLMC Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.pcounselors.map(
                                            counselor=>(
                                                <tr key={counselor.id}>
                                                    <td>{counselor.id}</td>
                                                    <td>{counselor.name}</td>
                                                    <td>{counselor.hospital}</td>
                                                    <td>{counselor.city}</td>
                                                    <td>{counselor.specialty}</td>
                                                    <td>{counselor.slmcNumber}</td>
                                                    <td><Button variant="primary" onClick={()=>this.handleClick(counselor.id)}>Accept</Button></td>
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
            </React.Fragment>
        );
    }
}

export default AdminCounselors;