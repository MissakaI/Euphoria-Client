import React, { Component } from 'react'
import {ListGroup,Container,Card,Accordion,Button} from 'react-bootstrap';
import axios from 'axios';
import UserProfile from '../../assets/UserProfile';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

export default class Notifications extends Component {
   
   constructor(props){
       super(props);
       this.state={
            pending:[],
            accepted:[],
            completed:[]
       }

   }
   componentDidMount(){
    axios.get('http://localhost:8080/api/user/getrequests',{headers: {
        'Content-Type': 'application/json',
    }})
    .then(res=>{
        console.log(res.data);
        const uid=UserProfile.getId();
        const reqs=res.data;
        const myreqs=reqs.filter(r=>{
            return r.user_counselor.user_id.uid==uid;
        })
        console.log("----------------")
        console.log(myreqs);
        console.log("----------------")

        const mypending=[];
        const myaccepted=[];
        const mycompleted=[];
        myreqs.map(r=>{
            if(r.appointmentStatus=="pending"){
                mypending.push(r);
            }else if(r.appointmentStatus=="accepted"){
                myaccepted.push(r);
            }else if(r.appointmentStatus=="completed"){
                mycompleted.push(r);
                
            }
        });

        console.log("aaaa");
        console.log(mypending);
        this.setState({
            accepted:myaccepted,
            pending:mypending,
            completed:mycompleted
        })



    }).catch(err=>{
        console.log(err);
    })
   }

  render() {
    const preqs=this.state.pending.map(
        x=>(<div><ListGroup.Item variant="warning">Request made to {x.user_counselor.counselor_id.counselor_name} is still pending.
            </ListGroup.Item></div>
        ))
    const creqs=this.state.accepted.map(x=>(
        <div><ListGroup.Item variant="success">{x.user_counselor.counselor_id.counselor_name} accepted your request.The counselor will get in touch with you soon.please check your email if you're not formally registered.
        
        </ListGroup.Item></div>))
    return (
      <Container>

      <ListGroup>
        <div style={{marginTop:'30px'}}>
        <ListGroup.Item> <NotificationsActiveIcon></NotificationsActiveIcon> Notifications</ListGroup.Item>
        {preqs}
        {creqs}
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <h5>How your session with doctor who.please click below to rate your experience</h5>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Rate
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
      </ListGroup>
      </Container>  
    )
  }
}
