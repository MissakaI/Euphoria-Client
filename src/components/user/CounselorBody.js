import React, { Component } from 'react'
import {Row,Col,Card,Button,ListGroupItem,Form,Alert} from 'react-bootstrap';
import axios from 'axios';
import CounselorRequestModal from '../../components/user/CounselorRequestModal';
import UserProfile from '../../assets/UserProfile';
import {Snackbar,Button as But} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
export default class CounselorBody extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }

    makeRequest=(msg)=>{
        const user_counselor={
            "user_id":UserProfile.getId(),
            "counselor_id":this.props.doc.id
        }
        const request_description=msg;
        const counselor_request_details={...user_counselor,request_description};
        console.log(counselor_request_details)
        axios.post('http://localhost:8080/api/user/requestcounselor',JSON.stringify(counselor_request_details),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>{
            console.log(response);
            this.setState({open:true});
        })

    }
    handleClose=()=>{
        this.setState({open:true})
    }
    render() {
        console.log("----")
        console.log(this.props.doc)
        
        console.log("----")
        
        return (
            <React.Fragment>
                         <Alert show={this.state.open} style={{position:'fixed',top:'0',left:'0',width:'100%',height:'20%'}} variant="success">
                                <div style={{marginTop:'110px'}}>

                                <Alert.Heading style={{marginLeft:'600px'}}>Request Sent Successfully!Please Check your notifications</Alert.Heading>
                                </div>
                                <div className="d-flex justify-content-end" style={{marginTop:'-30px'}} >
                                    <Button onClick={() => this.setState({open:false})} variant="outline-success">
                                       <HighlightOffIcon></HighlightOffIcon> Dismiss
                                    </Button>
                                </div>
                                
                        </Alert>
                
                <Col xs={4} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../../assets/img/doctor/'+this.props.doc.picName)} 
                        style={{
                            width: '100%',
                            height: '20vw',
                            objectFit:'cover'
                       
                        }} />
                        <Card.Body>
                            <Card.Title>{this.props.doc.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Specialty: {this.props.doc.specialty}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Rating: {this.props.doc.rating}</Card.Subtitle>
                            <Card.Text>{this.props.doc.description}</Card.Text>
                            <CounselorRequestModal doc={this.props.doc} makerequest={this.makeRequest}></CounselorRequestModal>

                           
                            {/* <Button variant="primary" onClick={this.handleClick}>Request</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }
}
