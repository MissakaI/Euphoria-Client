import React, { Component } from 'react'
import {Radio,Typography} from '@material-ui/core';
import {Button} from 'react-bootstrap';
import axios from 'axios';
export default class Rate extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedValue:'1'
        }
    }
    handleChange=(e)=>{
        this.setState({selectedValue:e.target.value});
    }
    submit=(e)=>{
        const counselorId=this.props.counselor_id;
        const userId=this.props.uid;
        const rate=this.state.selectedValue;
        const rate_object={counselorId,userId,rate};
        console.log("rate ob")
        console.log(rate_object);
        axios.post('http://localhost:8080/api/user/ratecounselor',JSON.stringify(rate_object),{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            console.log(res.data);
            window.location.replace('/user/homepage')
        
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        console.log(this.state.selectedValue)
        return (
           <React.Fragment>

            <div>   
                <Typography>Rate Your Counselor from 1 to 5</Typography>
            </div>
            <div>
            1
            <Radio
                checked={this.state.selectedValue === '1'}
                onChange={this.handleChange}
                value="1"
                name="radio-button-demo"
                style={{color:'red'}}
                inputProps={{ 'aria-label': 'A' }}
            />
            2
            <Radio
                checked={this.state.selectedValue === '2'}
                onChange={this.handleChange}
                value="2"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
                style={{color:'red'}}

            />
            3
            <Radio
                checked={this.state.selectedValue === '3'}
                onChange={this.handleChange}
                value="3"
                color="primary"
                style={{color:'blue'}}
                
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
            />
            4
            <Radio
                checked={this.state.selectedValue === '4'}
                onChange={this.handleChange}
                value="4"
                color="primary"
                name="radio-button-demo"
                style={{color:'green'}}
                inputProps={{ 'aria-label': 'E' }}
                size="small"
            />
            5
            <Radio
                checked={this.state.selectedValue === '5'}
                onChange={this.handleChange}
                value="5"
                color="primary"
                name="radio-button-demo"
                style={{color:'green'}}
                inputProps={{ 'aria-label': 'F' }}
                size="small"
            />
            </div>
            <Button variant="outline-info" onClick={this.submit}>Rate</Button>
           </React.Fragment> 
        )
    }
}
