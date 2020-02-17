import React, { Component } from 'react'
import axios from 'axios';
import LineChart from './LineChart'
export default class YearStat extends Component {
    constructor(){
        super();
        this.state = {
            year:[],
            count:[],
            chartData:{},
            isLoaded:false
        }
        }

    componentDidMount(){
        this.getChartData();
    }

    getChartData=()=>{
        axios.get('http://localhost:8080/api/charts/getyear',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            const list=res.data;
            console.log(list);
            list.sort((a, b) => (a.year > b.year) ? 1 : -1)
            list.map((d)=>{
                this.state.year.push(d.year);
                this.state.count.push(d.count);
                return null;
            });
            this.setState({
                isLoaded:true,
                chartData:{
                    labels: this.state.year,
                    datasets:[
                    {
                        label:'Population',
                        data:this.state.count,
                        backgroundColor:[
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
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
    const title="Yearly Distribution of Users"
    
    return (
        <div>
            { loading && <LineChart chartData={this.state.chartData} title={title}></LineChart>}
        </div>
    )
  }

}
