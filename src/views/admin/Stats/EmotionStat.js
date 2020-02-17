import React, { Component } from 'react'
import BarChart from './BarChart'
import axios from 'axios';

export default class EmotionStat extends Component {
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
        const emotions=[]
        const count=[]
        axios.get('http://localhost:8080/api/charts/getemotions',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            res.data.map((d)=>{
                emotions.push(d.emotion);
                count.push(d.count);
                return null;
            });
            this.setState({
                isLoaded:true,
                chartData:{
                    labels: emotions,
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
    const title="Most Recorded Problems Faced by Users"
    return (
        <div>
            { loading && <BarChart chartData={this.state.chartData} title={title}></BarChart>}
        </div>
    )
  }
}
