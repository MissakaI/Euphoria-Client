import React, { Component } from 'react'
import PostComponentUser from '../../components/user/PostComponentUser'
import AddPost from '../../components/user/feed/AddPost'
import {Row,Col} from 'react-bootstrap'
import PostComponent from '../../components/user/feed/PostComponent'
import axios from 'axios';
import {Grid,TextField} from '@material-ui/core';
import CheckEmailPage from './CheckEmailPage';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import NavbarUser from '../../components/user/NavbarUser';
import { Jumbotron } from '../../components/user/Jumbotron';
import {Container} from 'react-bootstrap';
import UserProfile from '../../assets/UserProfile'

class Feed extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
            search:'',
            emo_tags : [
                'anxious',
                'depressed',
                'suicidal',
                'sad',
                'stressed',
                'other'
            ],
            emotions:[]
        }
    }
  
    
    componentDidMount=()=>{
        this.loadData();
    }
    loadData=()=>{
        axios.get('http://localhost:8080/api/user/getposts',{headers: {
            'filter1-Type': 'application/json',
        }})
        .then(res=>{
            
            console.log(res.data)
            this.setState({posts:res.data})
            
        }).catch(err=>{
            console.log(err);
        })
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
   
    componentDidUpdate(){
        console.log(this.state.emotions);
        
    }
     arrayUnique=(array)=> {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    
        return a;
    }
    render() {
        const filter1=this.state.posts.filter(
            (post)=>{
                return (post.post_description.toLocaleLowerCase().indexOf(this.state.search)!==-1)||(post.post_title.toLocaleLowerCase().indexOf(this.state.search)!==-1);
            }
        );
        const filter2=[]
        this.state.posts.filter((post)=>{
            return this.state.emotions.forEach((e1)=>{
                return post.emotion_tags.forEach((e2)=>{
                    if(e1===e2.emotion_tag){ 
                        filter2.push(post);
                        return;
                    }else{ 
                    }


                })
            })
        });
        
        var content=[]
        if(Object.entries(filter2).length !== 0){
            content=this.arrayUnique(filter2);

        }else{
            content=this.arrayUnique(filter1);
        }
       
        
        console.log("*****")
        console.log(content);
        
        
        const posts=content.map((post)=>(<div key={post.id} style={{margin:'20px'}}><PostComponent style={{display:'flex'}} post={post}></PostComponent></div>));
        console.log(posts)
        return (
            
            <React.Fragment>
                <NavbarUser></NavbarUser>
                <Jumbotron></Jumbotron>
                <Container>

                <Grid container spacing={3}  direction="row" justify="center" alignItems="center">

                    <Grid item>
                        <TextField id="outlined-search" name="search" onChange={this.handleChange} label="Search field" type="search" variant="outlined" />
                    </Grid>

                    <Grid item>
                        
                        <FormControl style={{margin:'20px',width:'200px'}}>
                            <InputLabel id="demo-mutiple-checkbox-label">Emotion Tags</InputLabel>
                            <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            name="emotions"
                            value={this.state.emotions}
                            onChange={this.handleChange}
                            input={<Input />}
                            renderValue={selected => selected.join(', ')}
                            >
                            {this.state.emo_tags.map(name => (
                                <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.emotions.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        {posts}
                    </Grid>
                    <Grid item xs={2}>
                        {(UserProfile.getUserType()=="formal") && <AddPost></AddPost>}
                    </Grid>
                </Grid>
            </Container>
            </React.Fragment>

                
        )
    }
}

export default Feed;