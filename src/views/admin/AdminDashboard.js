import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import AdminNavbar from "../../components/admin/AdminNavbar";
import StatsCard from "../../components/admin/StatsCard";
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
            <div className="container">
                <AdminNavbar/>
                <div className="m-4">
                <Row>
                    <Col lg={3} sm={6}>
                        <StatsCard
                            bigIcon={<i className="pe-7s-server text-warning" />}
                            statsText="Onine Counselors"
                            statsValue="0"
                            statsIcon={<i className="fa fa-refresh" />}
                            statsIconText="Updated now"
                        />
                    </Col>
                    <Col lg={3} sm={6}>
                        <StatsCard
                            bigIcon={<i className="pe-7s-wallet text-success" />}
                            statsText="Registered Counselors"
                            statsValue={this.state.registeredCounselors}
                            statsIcon={<i className="fa fa-calendar-o" />}
                            statsIconText="Last day"
                        />
                    </Col>
                    <Col lg={3} sm={6}>
                        <StatsCard
                            bigIcon={<i className="pe-7s-graph1 text-danger" />}
                            statsText="Online Users"
                            statsValue={this.state.onlineUsers}
                            statsIcon={<i className="fa fa-clock-o" />}
                            statsIconText="In the last hour"
                        />
                    </Col>
                    <Col lg={3} sm={6}>
                        <StatsCard
                            bigIcon={<i className="fa fa-twitter text-info" />}
                            statsText="Registered Users"
                            statsValue={this.state.registeredUsers}
                            statsIcon={<i className="fa fa-refresh" />}
                            statsIconText="Updated now"
                        />
                    </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;