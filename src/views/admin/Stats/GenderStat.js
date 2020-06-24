import React, { Component } from 'react'
import PieChart from './PieChart'
import axios from 'axios';

export default class GenderStat extends Component {
    constructor(){
        super();
        this.state = {
            
            chartData:{},
            isLoaded:false
        }
        }

    componentDidMount(){
        this.getChartData();
    }

    getChartData=()=>{
        const gender=[]
        const count=[]
        axios.get('http://localhost:8080/api/charts/getgender',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            res.data.map((d)=>{
                gender.push(d.gender);
                count.push(d.count);
                return null;
            });
            console.log(gender);
            console.log(count);
            this.setState({
                isLoaded:true,
                chartData:{
                    labels: [...gender],
                    datasets:[
                    {
                        label:'Population',
                        data:count,
                        backgroundColor:[
                            
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)' 
                                  
                        ]
                    }
                    ]
                }
                });
            
        }).catch(err=>{
            console.log(err);
        })
    

        
    }
  render() {
    
    const loading=this.state.isLoaded;
    const title="Gender Variation"
    return (
        <div>
            { loading && <PieChart chartData={this.state.chartData} title={title}></PieChart>}
        </div>
    )
  }

}
