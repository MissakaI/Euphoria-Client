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
import Notifications from '../../components/user/Notifications'
import UserProfile from '../../assets/UserProfile';

class UserHome extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
            isLoaded:false
          
           
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
            
            const dat=res.data;
            const list=dat.filter(p=>{
               return (p.user_id.uid==UserProfile.getId());
            });
            console.log(list);
            this.setState({posts:list,isLoaded:true})
            
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
 
    render() {
       
        
        const posts=this.state.posts.map((post)=>(<div key={post.post_id} style={{margin:'20px'}}><PostComponent style={{display:'flex'}} post={post}></PostComponent></div>));
        console.log(this.state.isLoaded)
        return (
            <React.Fragment>

                <Grid container spacing={3}  direction="row" justify="center" alignItems="center">

                    <Grid item>
                        <TextField id="outlined-search" name="search" onChange={this.handleChange} label="Search field" type="search" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    
                    <Grid item xs={8}>

                        {posts}
                    </Grid>
                    <Grid item xs={4}>
                        <Notifications></Notifications>
                    </Grid>
                </Grid>
            </React.Fragment>

                
        )
    }
}

export default UserHome;