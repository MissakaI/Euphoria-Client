import React, { Component } from 'react';
import {Card,Button,Image,Accordion,InputGroup,FormControl} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import {Container} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { Button as Butt,Chip,Badge } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import UserProfile from '../../../assets/UserProfile';
import axios from 'axios';

class LongText extends Component { 
    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});
    render() {
        const {content, limit} = this.props;
        const {showAll} = this.state;
        if(content.length<=limit) {
            // there is nothing more to show
            return <div>{content}</div>
        }
        if(showAll) {
            // We show the extended text and a link to reduce it
            return <div>
                {content}
                <a><span onClick={this.showLess} style={{color:'blue',cursor:'pointer'}}> Read less </span></a>
            </div>
        }
        // In the final case, we show a text with ellipsis and a `Read more` button
        const toShow = content.substring(0,limit)+"... ";
        return <div>
            {toShow}<a><span onClick={this.showMore} style={{color:'blue',cursor:'pointer'}}>Read more </span></a>
        </div>
    }
}
class CommentComponent extends Component{
    
    render(){   
        const pic=this.props.comment.commented_user_id.pic_name;
        
        return(
            <Card style={{height:'150px'}}>
                <div >
                    <Container>

                       <Grid  container spacing={3}>
                            <Grid item >
                                <div style={{marginTop:'20px'}}>
                                    <Avatar alt="Remy Sharp" src={require('../../../assets/profile/'+pic)} />
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{marginTop:'20px'}}>
                                    <Card.Title style={{fontWeight:'bold'}}>{this.props.comment.commented_user_id.firstname}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{this.props.comment.comment_age}</Card.Subtitle>

                                </div>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                               <div style={{marginLeft:'54px'}}>

                                    <Card.Text style={{textAlign:'left'}}>
                                        {this.props.comment.comment_description}
                                    </Card.Text>
                               </div>
                        </Grid>

                        <Grid container direction="row" justify="flex-end" alignItems="center">
                
                            <Card.Link href="#">Delete</Card.Link>
                        </Grid>
                    </Container>
                </div>    
            </Card>
        )
    }
}


class PostComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            coms:[],
            emo_tags:[],
            user:{},
            new_comment:''
        }
    }

    componentDidMount(){
        const x=this.props.post.comments;
        const u=this.props.post.user_id;
        const t=this.props.post.emotion_tags;
        this.setState({coms:x,user:u,emo_tags:t});
    }
    componentDidUpdate(){
    }

    handleChange=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value})
    }
    postComment=()=>{
        const comment_description=this.state.new_comment;
        const user_id=UserProfile.getId();
        const post_id=this.props.post.id;
        const comment_data={user_id,post_id, comment_description};
        console.log(comment_data);
        axios.post('http://localhost:8080/api/user/addcomment',JSON.stringify(comment_data),{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            
            this.setState({new_comment:''});
            alert('success');
        }).catch(err=>{
            console.log(err);
        }) 
        
    }
    render() {
        
        const pic=this.props.post.user_id.pic_name;
        console.log()
        const all_comms=this.state.coms.map((c)=>(<div key={c.comment_id} style={{float:'left',width:'100%',margin:'10px'}}><CommentComponent comment={c}></CommentComponent></div>));
        const emotion_tags=this.state.emo_tags.map((tag)=>(<Chip color="primary" clickable size="small" key={tag.id} label={tag.emotion_tag} style={{margin:'5px'}}/>));
        return (
            <React.Fragment>

                    <Card className="text-center" >
                        
                        <Card.Header style={{fontFamily:'Georgia, serif',fontSize:'150%',height:''}} > 
                            <Container>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Avatar alt="Remy Sharp" src={require('../../../assets/profile/'+pic)} style={{height:'80px',width:'81px',margin:'10px'}}/>
                                    {this.props.post.user_id.firstname}
                                </Grid>

                            </Container>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'bold',fontFamily:'system-ui'}}>{this.props.post.post_title}</Card.Title>
                                <LongText content={this.props.post.post_description} limit={250}></LongText>
                                <div style={{margin:'10px'}}>
                                    {emotion_tags}
                                </div>
                                {/* {this.props.post.post_description} */}
                            <Accordion>
                                <Card style={{backgroundColor:'white'}}>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        {UserProfile.getUserType=="formal"&&<Button variant="outline-primary">Comments</Button>}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Container>

                                        <Grid container>
                                            <Card.Body>

                                                <InputGroup>
                                                        
                                                    <InputGroup.Prepend style={{color:'red'}}>
                                                    <InputGroup.Text>Add Comment</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl name="new_comment" onChange={this.handleChange} value={this.state.new_comment} as="textarea" aria-label="Add Comment" />
                                                    <Butt color="primary" onClick={this.postComment}><ArrowForwardIosIcon></ArrowForwardIosIcon></Butt>
                                                </InputGroup>
                                            </Card.Body>
                                        </Grid>
                                        <Grid container>
                                                {all_comms}
                                        </Grid>
                                        </Container>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>

                        </Card.Body>
                        <Card.Footer className="text-muted">{this.props.post.post_age}</Card.Footer>
                    </Card>

            </React.Fragment>
        )
    }
}

export default PostComponent;