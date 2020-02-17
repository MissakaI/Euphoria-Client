import React, { Component,useState} from 'react'
import {Modal,Button,ButtonToolbar,Form,Card,Image} from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons';
import {CreatePostStyles as styles} from '../../../assets/Styles'

import {FormGroup,Checkbox,TextField,Tooltip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import UserProfile from '../../../assets/UserProfile';
export default class AddPost extends Component {
  render() {
    return (
                        <div style={{border:'3px',padding:'2em 4em'}}>
                            <CreatePostModal></CreatePostModal>
                        </div>
    )
  }
}



function MyVerticallyCenteredModal(props) {
    const [post_title,setPostTitle]=useState('');
    const [post_description,setPostDescription]=useState('');
    const createpost=props.createpost;
    const [state, setState] = React.useState({
        anxious: false,
        depressed: false,
        suicidal: false,
        sad: false,
        stressed: false,
        other: false
      });
    const [emotion_tags,setEmotions]=React.useState([]);
    
    
    
    const handleTitle=e=>{
       
       setPostTitle(e.target.value);
    }
    
    const handleDescription=e=>{
       
       setPostDescription(e.target.value);
    }
    const handleCheck = name => event => {
        setState({ ...state, [name]: event.target.checked });

        // if the emotion exists remove it,if it doesn't add it
        // this is like a toggle of emotions.if we press the same check box twice,first time we're adding 
        // second time we're removing it.
        const index=emotion_tags.indexOf(name)
        if(index==-1){
            setEmotions([...emotion_tags,name]);
        }else{
            emotion_tags.splice(index,1);
        }

    };
    const handleSend=()=>{
        const user_id=UserProfile.getId();
        console.log(user_id)
        const post={post_title,post_description,emotion_tags,user_id}
        createpost(post);
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>



          <Modal.Title id="contained-modal-title-vcenter">
                    <Image variant="top" src={require('../../../assets/profile/girl.jpeg')} 
                            style={{
                                margin:'20px',
                                width: '90px',
                                height: '85px',
                                objectFit:'cover'}}
                            roundedCircle
                    />
               Add New Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className={styles.root}>
                <TextField
                id="standard-full-width"
                name="post_title"
                value={post_title}
                label="Title"
                style={{ margin: 8 }}
                //helperText="It'll help you to get more attention"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleTitle}
                />
          </div>

          <Form.Control 
            as="textarea" 
            name="post_description"
            onChange={handleDescription} 
            placeholder="Let us know what's on your mind" 
            rows="3" 
            value={post_description}
         />

          <div>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.anxious}
                            onChange={handleCheck('anxious')}
                            value="anxious"
                            color="primary"
                        />
                    }
                label="Anxious"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.depressed}
                            onChange={handleCheck('depressed')}
                            value="depressed"
                            color="primary"
                        />
                    }
                label="Depressed"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.suicidal}
                            onChange={handleCheck('suicidal')}
                            value="suicidal"
                            color="primary"
                        />
                    }
                label="Suicidal"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.sad}
                            onChange={handleCheck('sad')}
                            value="sad"
                            color="primary"
                        />
                    }
                label="Sad"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.stressed}
                            onChange={handleCheck('stressed')}
                            value="stressed"
                            color="primary"
                        />
                    }
                label="Stressed"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.other}
                            onChange={handleCheck('other')}
                            value="other"
                            color="primary"
                        />
                    }
                label="Other"
                />
            </FormGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info"  onClick={handleSend} style={{margin:'20px'}}>Send</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
class CreatePostModal extends Component {
    constructor(props){
        super(props);
        this.state={
            modalShow:false
        }
    }
    createPost=(post)=>{    
        axios.post('http://localhost:8080/api/user/newpost',JSON.stringify(post),{headers: {
            'Content-Type': 'application/json',
        }}).then((res)=>{
            console.log(res);
            window.location.replace('/user/feed')
        }).catch(err=>{
            alert("Something Went Wrong");
        });
        

    }
    render() {
        return (
            <ButtonToolbar>
            <Tooltip title="Add New Post">
              <Button variant="outline-primary" size="sm" style={{borderRadius:'50%'}}  onClick={() => this.setState({modalShow:true})}>
                <Plus size={50}></Plus>
              </Button>
             </Tooltip>
              <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow:false})}
                createpost={this.createPost}
                
              />
            </ButtonToolbar>
          );
    }
}
