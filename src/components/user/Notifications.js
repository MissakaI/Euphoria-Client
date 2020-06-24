import React, {Component} from 'react'
import {Accordion, Button, Card, Container, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import UserProfile from '../../assets/UserProfile';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Rate from './Rate';
import Payment from '../../views/Payment';

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
    console.log("component did mount")
    axios.get('http://localhost:8080/api/user/getrequests',{headers: {
        'Content-Type': 'application/json',
    }})
    .then(res=>{
        const uid=UserProfile.getId();
        const reqs=res.data;

        console.log("-------------");
        console.log(reqs);
        console.log("------------------")
        const myreqs=reqs.filter(r=>{
            return r.id.user.uid==uid;
        })
        
        const mypending=[];
        myreqs.map(r=>{
            if(r.status=="PENDING"){
                mypending.push(r);
            }
        });
        
        this.setState({
            pending:mypending,
        })
        

        
    }).catch(err=>{
        console.log(err);
    })
    this.getRated();
    this.getPayment();

   }


   getPayment=()=>{
        const uid=UserProfile.getId();

        axios.get('http://localhost:8080/api/user/getpayment',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            const uid=UserProfile.getId();
            const reqs=res.data;
            const myreqs=reqs.filter(r=>{
                return (r.paymentStatus=="unpaid" && r.id.user_id.uid==uid);
            })
            
            this.setState({
                accepted:myreqs
            })
            

            
        }).catch(err=>{
            console.log(err);
        })
   }
   getRated=()=>{
    const uid=UserProfile.getId();

    axios.get('http://localhost:8080/api/user/getrated',{headers: {
        'Content-Type': 'application/json',
    }})
    .then(res=>{
        const uid=UserProfile.getId();
        const reqs=res.data;
        const myreqs=reqs.filter(r=>{
            console.log(r.rated!="yes");
            return (r.rated!="yes" && r.id.user_id.uid==uid);
        })
        
        this.setState({
            completed:myreqs
        })
        

        
    }).catch(err=>{
        console.log(err);
    })
   }

  render() {
    console.log("****")
    console.log(this.state.accepted);
    console.log("****")
    const preqs=this.state.pending.map(
        x=>(<div><ListGroup.Item variant="warning">Request made to {x.id.counselor.name} is still pending.
            </ListGroup.Item></div>
        ))

    const areqs=this.state.accepted.map(x=>(
        <div><ListGroup.Item variant="success">{x.id.counselor_id.name} has accepted your request.The counselor will get in touch with you soon.Please complete the payment and  check your email if you're not formally registered.
        <Payment counselor_id={x.id.counselor_id.id} uid={UserProfile.getId()}></Payment>
        </ListGroup.Item></div>))


    const creqs=this.state.completed.map(x=>(
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <h5>How was your session with {x.id.counselor_id.name}.Please rate your experience</h5>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <Rate counselor_id={x.id.counselor_id.id} uid={UserProfile.getId()}></Rate>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                
                </Card>
            </Accordion>

    ));
        
    console.log(this.state);
    return (
      <Container>

      <ListGroup>
        <div style={{marginTop:'30px'}}>
        <ListGroup.Item> <NotificationsActiveIcon></NotificationsActiveIcon> Notifications</ListGroup.Item>
        {preqs}
        {areqs}
        {creqs}
        
        
        </div>
      </ListGroup>
      </Container>  
    )
  }
}
