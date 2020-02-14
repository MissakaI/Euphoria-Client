import React, {Component} from 'react'
import {Button, Card, Col} from 'react-bootstrap';
import axios from 'axios';

export default class CounselorBody extends Component {

    handleClick=(e)=>{
        e.preventDefault();
        const doctor=this.props.doc;
        const patient={
            "user_id":1,
            "user_name":"Daniel Carter"
        }
        const details={...doctor,...patient};
        console.log(details)
        axios.post('http://localhost:8080/api/user/counselorrequest',JSON.stringify(details),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>{
            console.log(response);
            alert("Request Successful");
            
        
        })

    }
    render() {
        return (

                <Col xs={4} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../../assets/img/doctor/'+this.props.doc.picName+'.jpg')} 
                        style={{
                            width: '100%',
                            height: '20vw',
                            objectFit:'cover'
                       
                        }} />
                        <Card.Body>
                            <Card.Title>{this.props.doc.doctor_name}</Card.Title>
                            <Card.Subtitle>{this.props.doc.specialty}</Card.Subtitle>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary" onClick={this.handleClick}>Request</Button>
                        </Card.Body>
                    </Card>
                </Col>
        )
    }
}
