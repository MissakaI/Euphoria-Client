import React, {Component} from 'react';
import {Row,Col,Button,Card} from 'react-bootstrap';
import AdminNavbar from "../../components/admin/AdminNavbar";
import axios from 'axios';

class AdminDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            onlineCounselors:'',
            onlineUsers:'',
            registeredCounselors:'',
            registeredUsers:''
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/admin/getOnlineCounselors",JSON.stringify(this.state))
        .then(res1=>{
            const onlineCounselorCount=res1.data;
            this.setState({onlineCounselors:onlineCounselorCount})
            })

        axios.get("http://localhost:8080/api/admin/getRegisteredCounselors",JSON.stringify(this.state))
        .then(res2=>{
            const regCounselorCount=res2.data;
            this.setState({registeredCounselors:regCounselorCount})
            })

        axios.get("http://localhost:8080/api/admin/getOnlineUsers",JSON.stringify(this.state))
            .then(res3=>{
                const onlineUserCount=res3.data;
                this.setState({onlineUsers:onlineUserCount})
            })

        axios.get("http://localhost:8080/api/admin/getRegisteredUsers",JSON.stringify(this.state))
            .then(res4=>{
                const regUsersCount = res4.data;
                this.setState({registeredUsers:regUsersCount})
            })
     }

    render(){
        return(
            <React.Fragment>

            <AdminNavbar/>
            <div className="container">
                <div className="m-4">
                <Row>
                    <Col lg={6} sm={12}>
                        <Card className="text-center bg-success">
                            <Card.Header>Online Counselors</Card.Header>
                            <Card.Body>
                                <Card.Text>{this.state.onlineCounselors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card className="text-center bg-danger">
                            <Card.Header>Registered Counselors</Card.Header>
                            <Card.Body>
                                <Card.Text>{this.state.registeredCounselors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col lg={6} sm={12}>
                        <Card className="text-center bg-warning">
                            <Card.Header>Online Users</Card.Header>
                            <Card.Body>
                                <Card.Text>{this.state.onlineUsers}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card className="text-center bg-info">
                        <Card.Header>Registered Users</Card.Header>
                            <Card.Body>
                                <Card.Text>{this.state.registeredUsers}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default AdminDashboard;