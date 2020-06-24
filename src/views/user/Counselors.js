import React, { Component } from 'react'
import {Row,Col,Card,Button,ListGroupItem} from 'react-bootstrap';

import house from '../../assets/img/doctor/house.jpg';
import CounselorBody from '../../components/user/CounselorBody'

import {UserLayout} from '../../components/user/UserLayout';
import NavbarUser from '../../components/user/NavbarUser';
import { Jumbotron } from '../../components/user/Jumbotron';

import axios from 'axios';
import UserProfile from '../../assets/UserProfile';

class Counselors extends Component {

    constructor(props){
        super(props);
        this.state={
            counselors:[]
        }
    }
    elements = [
        {
        "doctor_id":1,
        "doctor_name":"Dr.Gregory House",
        "specialty":"New york Mercy hospital",
        "picName":"house"
        },
        {
        "doctor_id":2,
        "doctor_name":"Dr.William Chase",
        "specialty":"Johns Hopkins Hospital",
        "picName":"chase"
        },
        {
        "doctor_id":3,
        "doctor_name":"Dr.Cameron Chase",
        "specialty":"Torronto General Hospital",
        "picName":"cameron"
        },
        {
        "doctor_id":4,
        "doctor_name":"Dr.James Wilson",
        "specialty":"Ninewells Hospital",
        "picName":"wilson"
        },
        {
        "doctor_id":5,
        "doctor_name":"Dr.Lisa Cuddy",
        "specialty":"Castle Street Hospital",
        "picName":"lisa"
        },
        {
        "doctor_id":6,
        "doctor_name":"Dr.Eric Foreman",
        "specialty":"The Mayo Clinic",
        "picName":"foreman"
        },
    ];
    

    
    loadCounselors=()=>{
        axios.get('http://localhost:8080/api/user/getCounselors',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            console.log(res.data)
            const data=res.data;
            this.setState({counselors:data})
        }).catch(err=>{
            console.log(err);
        })
    }
    
    handleClick=(e)=>{
        e.preventDefault();
        
        
    }
    componentDidMount(){
        console.log("mounted counselor");
        this.loadCounselors();
        console.log("the user is"+UserProfile.getName())
    }
    
    
    render() {
       const items = this.state.counselors.map((doc)=>
            <div key={doc.id}>
                    <CounselorBody doc={doc}></CounselorBody>
            </div>
        );
        return (
            <React.Fragment>
                <NavbarUser></NavbarUser>
                <Jumbotron></Jumbotron>
                <UserLayout>
                            <Row>
                                <Col>
                                </Col>
                                <Col xs={6}>
                                    <h1>Select your counselor</h1> 
                                </Col>
                                <Col>
                                </Col>
                    
                            </Row> 
                            
                        <Row>
                            {items}
                        </Row>
                </UserLayout>
             </React.Fragment>
        )
    }
}
export default Counselors;